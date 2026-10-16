
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error ||
            "We couldn't send your message. Please try again."
        );
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(
        err.message ||
          "Something went wrong. Please try again or email us directly."
      );
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#247a76] focus:ring-4 focus:ring-[#247a76]/10";

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#247a76]/10 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#cef8f5]/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#4ac4a0]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Have a question?
              <span className="mt-2 block text-[#247a76]">
                We're here to help.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you have a question about SUP Safer, want to share
              feedback, or have spotted something that could be improved,
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact form */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-9 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the form below and we'll get back to you.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-emerald-950">
                  Message sent successfully
                </h3>
                <p className="mt-2 text-sm leading-6 text-emerald-800">
                  Thanks for getting in touch. Your message has been
                  submitted, and we'll be in touch as soon as we can.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 rounded-lg border border-emerald-300 px-4 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Your name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Email address{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Your message{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`${inputClasses} resize-y`}
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">
                    {formData.message.length}/5000 characters
                  </p>
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-800"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#247a76] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d6562] focus:outline-none focus:ring-4 focus:ring-[#247a76]/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 animate-spin"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="3"
                          opacity="0.25"
                        />
                        <path
                          d="M21 12a9 9 0 0 0-9-9"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Fields marked with * are required. Please don't include
                  passwords or other sensitive information in your message.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
