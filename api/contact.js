
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL ||
    !process.env.RESEND_CONFIRMATION_TEMPLATE_ID
  ) {
    console.error("Contact endpoint environment variables are missing.");

    return res.status(500).json({
      error: "The contact form is temporarily unavailable.",
    });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const name =
      typeof body?.name === "string" ? body.name.trim() : "";

    const email =
      typeof body?.email === "string" ? body.email.trim() : "";

    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    // Validate required fields.
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    // Apply length limits.
    if (name.length > 100) {
      return res.status(400).json({
        error: "Your name must be 100 characters or fewer.",
      });
    }

    if (email.length > 254) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({
        error: "Your message must be between 10 and 5000 characters.",
      });
    }

    // Reject malformed email addresses.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

    // 1. Send the enquiry to the site owner.
    const { data: enquiryData, error: enquiryError } =
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: ["thomas@bowdenvisuals.co.uk"],
        replyTo: email,
        subject: `SUP Safer contact enquiry from ${name}`,
        html: `
          <h2>New SUP Safer contact enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
        text: [
          "New SUP Safer contact enquiry",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });

    if (enquiryError || !enquiryData?.id) {
      console.error("Contact enquiry email failed:", enquiryError);

      return res.status(502).json({
        error: "We couldn't send your message. Please try again.",
      });
    }

    // 2. Send the visitor's confirmation using your published Resend template.
    const { error: confirmationError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [email],
      template: {
        id: process.env.RESEND_CONFIRMATION_TEMPLATE_ID,
        variables: {
          name,
          message,
        },
      },
    });

    if (confirmationError) {
      // The enquiry has already been delivered for processing.
      // Don't tell the visitor to resubmit and risk duplicate enquiries.
      console.error(
        "Contact confirmation email failed:",
        confirmationError
      );
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact endpoint error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
}
