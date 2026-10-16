
import React from "react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "controller", title: "2. Who is responsible?" },
  { id: "information", title: "3. Information we collect" },
  { id: "usage", title: "4. How we use information" },
  { id: "lawful-basis", title: "5. Lawful basis" },
  { id: "contact-form", title: "6. Contact form and Resend" },
  { id: "cookies", title: "7. Cookies and analytics" },
  { id: "sharing", title: "8. Sharing information" },
  { id: "international", title: "9. International transfers" },
  { id: "retention", title: "10. Data retention" },
  { id: "security", title: "11. Data security" },
  { id: "rights", title: "12. Your rights" },
  { id: "complaints", title: "13. Complaints" },
  { id: "children", title: "14. Children's privacy" },
  { id: "third-party", title: "15. Third-party services" },
  { id: "changes", title: "16. Policy changes" },
  { id: "contact", title: "17. Contact us" },
];

const teal = "#247a76";

const lastUpdated = "16 October 2026";

function PolicySection({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200 py-8 last:border-b-0 sm:py-10"
    >
      <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function PolicyLink({ href, children }) {
  return (
    <a
      href={href}
      className="font-medium underline decoration-teal-600/40 underline-offset-4 transition-colors hover:text-teal-700 hover:decoration-teal-700"
    >
      {children}
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-900">
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-[#102f30]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#4ac4a0" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#4ac4a0" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-200 transition-colors hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M19 12H5m7 7-7-7 7-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to SUP Safer
          </a>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              How SUP Safer handles your information, protects your privacy
              and uses data to provide its paddleboarding risk assessment
              service.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-teal-300"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M16 3v4M8 3v4M3 10h18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                Last updated: {lastUpdated}
              </span>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-teal-300"
                >
                  <path
                    d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                UK data protection
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14">
          {/* Table of contents */}
          <aside className="self-start lg:sticky lg:top-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Contents
              </h2>

              <nav aria-label="Privacy policy contents" className="mt-4">
                <ol className="space-y-1.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                      >
                        <span
                          className="mr-2 mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-teal-600"
                          aria-hidden="true"
                        />
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-6 rounded-xl bg-[#eef9f5] p-4">
                <p className="text-sm font-semibold text-[#205f55]">
                  Have a privacy question?
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Get in touch directly by email.
                </p>
                <a
                  href="mailto:thomas@bowdenvisuals.co.uk?subject=SUP%20Safer%20Privacy%20Enquiry"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#247a76] hover:text-[#185b57]"
                >
                  Contact us
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Policy */}
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-9 lg:px-12">
            <div className="border-b border-slate-200 py-8 sm:py-10">
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                SUP Safer is a website designed to help paddleboarders
                understand the potential risks of paddleboarding at Swansea
                Beach. This policy explains what information may be processed
                when you use the website and how that information is handled.
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                We aim to collect only the information necessary to operate,
                maintain and improve the service.
              </p>
            </div>

            <PolicySection id="introduction" title="1. Introduction">
              <p>
                This Privacy Policy applies to the SUP Safer website at{" "}
                <PolicyLink href="https://sup-safer.co.uk">
                  sup-safer.co.uk
                </PolicyLink>{" "}
                and its associated services.
              </p>
              <p>
                SUP Safer presents environmental information, including
                weather, wave and tidal conditions, to help users understand
                the potential risks of paddleboarding at Swansea Beach.
              </p>
              <p>
                This policy should be read alongside any relevant information
                provided by third-party services that support the website.
              </p>
            </PolicySection>

            <PolicySection id="controller" title="2. Who is responsible for your information?">
              <p>
                SUP Safer is operated independently by Thomas Bowden. For
                personal information processed in connection with the
                operation of SUP Safer, Thomas Bowden is the data controller
                where applicable data protection law requires one to be
                identified.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">
                  Data controller
                </p>
                <p className="mt-2">Thomas Bowden, independent developer</p>
                <p>
                  Website:{" "}
                  <PolicyLink href="https://sup-safer.co.uk">
                    sup-safer.co.uk
                  </PolicyLink>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:thomas@bowdenvisuals.co.uk"
                    className="break-all font-medium text-[#247a76] hover:underline"
                  >
                    thomas@bowdenvisuals.co.uk
                  </a>
                </p>
              </div>

              <p>
                If you have any questions about this policy or how your
                personal information is handled, you can contact us using the
                email address above.
              </p>
            </PolicySection>

            <PolicySection id="information" title="3. Information we collect">
              <h3 className="font-semibold text-slate-800">
                3.1 Contact form information
              </h3>
              <p>
                If you contact us through the website's contact form, we
                collect the information you choose to provide:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#247a76]">
                <li>
                  <strong className="text-slate-800">Name:</strong> to identify
                  you when responding to your enquiry.
                </li>
                <li>
                  <strong className="text-slate-800">Email address:</strong>{" "}
                  to reply to your message.
                </li>
                <li>
                  <strong className="text-slate-800">Message:</strong> to
                  understand and respond to your enquiry.
                </li>
              </ul>

              <h3 className="pt-3 font-semibold text-slate-800">
                3.2 Technical information
              </h3>
              <p>
                When you visit the website or interact with its API, technical
                information may be processed by the hosting infrastructure
                and server systems. Depending on their configuration, this
                may include your IP address, request date and time, requested
                pages or endpoints, browser information and error details.
              </p>
              <p>
                This information may be processed to deliver the website,
                maintain security, diagnose errors and prevent misuse. The
                information actually recorded depends on the configuration
                of the relevant services.
              </p>

              <h3 className="pt-3 font-semibold text-slate-800">
                3.3 Weather, wave and tidal information
              </h3>
              <p>
                SUP Safer retrieves environmental information from external
                data providers to generate its risk assessments. Fixed
                coordinates associated with Swansea Beach are used to request
                the relevant conditions.
              </p>
              <p>
                These coordinates identify the assessment location and do
                not, by themselves, represent your personal location. The
                core risk assessment does not require your live GPS location.
              </p>
            </PolicySection>

            <PolicySection id="usage" title="4. How we use information">
              <p>Where applicable, information is used to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#247a76]">
                <li>Provide and maintain the SUP Safer service.</li>
                <li>Retrieve environmental information and generate risk assessments.</li>
                <li>Respond to contact form enquiries and related follow-up.</li>
                <li>Maintain the security, reliability and availability of the website.</li>
                <li>Investigate technical errors and prevent misuse.</li>
                <li>Meet applicable legal obligations.</li>
              </ul>
              <p>
                Contact form information is used to handle your enquiry. We do
                not sell personal information or use contact form submissions
                for marketing.
              </p>
            </PolicySection>

            <PolicySection id="lawful-basis" title="5. Lawful basis for processing">
              <p>
                Where the UK General Data Protection Regulation (UK GDPR)
                applies, we process personal information only where an
                appropriate lawful basis exists.
              </p>
              <p>Depending on the circumstances, this may include:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#247a76]">
                <li>
                  <strong className="text-slate-800">Legitimate interests:</strong>{" "}
                  responding to enquiries, operating the website, maintaining
                  security and diagnosing technical problems, where these
                  interests are not overridden by your rights and interests.
                </li>
                <li>
                  <strong className="text-slate-800">Legal obligation:</strong>{" "}
                  processing necessary to comply with applicable law.
                </li>
                <li>
                  <strong className="text-slate-800">Other applicable bases:</strong>{" "}
                  where the circumstances of a particular processing activity
                  require a different lawful basis.
                </li>
              </ul>
              <p>
                The lawful basis depends on the particular activity and its
                circumstances. Where we rely on legitimate interests, you may
                have the right to object as explained in Section 12.
              </p>
            </PolicySection>

            <PolicySection id="contact-form" title="6. Contact form and Resend">
              <p>
                The website's contact form collects your name, email address
                and message. Providing this information is voluntary, but a
                valid email address and sufficient information about your
                enquiry are needed for us to respond.
              </p>

              <h3 className="font-semibold text-slate-800">
                Email delivery provider
              </h3>
              <p>
                Contact form submissions are sent using{" "}
                <PolicyLink href="https://resend.com/">
                  Resend
                </PolicyLink>
                , an email delivery service. The information you submit is
                transmitted to Resend so that the message can be delivered to
                the website operator's email address.
              </p>
              <p>
                Resend may process email addresses, message content, delivery
                information and associated technical logs in providing its
                service. Its own terms and data-handling practices also apply.
              </p>
              <p>
                You can find further information in Resend's{" "}
                <PolicyLink href="https://resend.com/legal/privacy-policy">
                  Privacy Policy
                </PolicyLink>{" "}
                and{" "}
                <PolicyLink href="https://resend.com/legal/dpa">
                  Data Processing Addendum
                </PolicyLink>
                .
              </p>

              <h3 className="font-semibold text-slate-800">
                Email correspondence
              </h3>
              <p>
                Enquiries delivered to our email inbox may be retained as
                correspondence so that we can respond, manage necessary
                follow-up and maintain relevant records.
              </p>
            </PolicySection>

            <PolicySection id="cookies" title="7. Cookies and analytics">
              <p>
                At the time of writing, SUP Safer does not intentionally use
                website analytics or advertising tracking tools, based on the
                current configuration known to the operator.
              </p>
              <p>
                We do not knowingly use non-essential cookies for advertising
                or visitor profiling. However, the website, its hosting
                infrastructure or integrated services may use technical
                mechanisms necessary to deliver, secure or operate the
                service.
              </p>
              <p>
                The use of cookies and similar technologies will be reviewed
                if the website's configuration changes. Where consent is
                required by applicable law, it will be obtained before the
                relevant technologies are used.
              </p>
              <p>
                You can also manage cookies through your browser settings.
                Blocking certain cookies may affect website functionality.
              </p>
            </PolicySection>

            <PolicySection id="sharing" title="8. Who we share information with">
              <p>
                We do not sell personal information. Information may be
                processed by third parties where necessary to operate the
                service, including:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#247a76]">
                <li>
                  <strong className="text-slate-800">Hosting and infrastructure providers:</strong>{" "}
                  to deliver the website and API and maintain their operation
                  and security.
                </li>
                <li>
                  <strong className="text-slate-800">Resend:</strong> to deliver
                  contact form submissions to our email inbox.
                </li>
                <li>
                  <strong className="text-slate-800">Environmental data providers:</strong>{" "}
                  to retrieve the weather, wave and tidal information used by
                  the risk assessment service.
                </li>
              </ul>
              <p>
                These providers may process technical information when their
                services receive requests. Their own privacy policies and
                service terms may apply.
              </p>
              <p>
                Information may also be disclosed where required by law or
                where reasonably necessary to establish, exercise or defend
                legal claims.
              </p>
            </PolicySection>

            <PolicySection id="international" title="9. International data transfers">
              <p>
                Some third-party providers used by SUP Safer may process
                information outside the United Kingdom. This may include
                information handled by Resend as part of email delivery.
              </p>
              <p>
                Where a transfer of personal information is subject to UK
                data protection law, the required conditions and safeguards
                must be met. These may include an adequacy decision or an
                appropriate transfer mechanism, together with any additional
                measures required in the circumstances.
              </p>
              <p>
                Further information about Resend's arrangements can be found
                in its{" "}
                <PolicyLink href="https://resend.com/legal/dpa">
                  Data Processing Addendum
                </PolicyLink>
                .
              </p>
            </PolicySection>

            <PolicySection id="retention" title="10. How long we retain information">
              <p>
                We retain personal information for as long as reasonably
                necessary for the purpose for which it was collected, taking
                account of applicable legal requirements.
              </p>
              <p>In particular:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#247a76]">
                <li>
                  <strong className="text-slate-800">Contact form submissions and correspondence:</strong>{" "}
                  retained while an enquiry is active and for any necessary
                  follow-up or record-keeping. Older correspondence will be
                  reviewed periodically and deleted when it is no longer
                  reasonably needed, unless there is a justified reason to
                  retain it.
                </li>
                <li>
                  <strong className="text-slate-800">Technical and security logs:</strong>{" "}
                  retained according to the operational, security and logging
                  requirements of the relevant systems.
                </li>
                <li>
                  <strong className="text-slate-800">Third-party records:</strong>{" "}
                  may be subject to separate retention periods under the
                  relevant provider's policies and service settings.
                </li>
              </ul>
              <p>
                When information is no longer required, it will be deleted
                or anonymised where appropriate and technically practicable.
              </p>
            </PolicySection>

            <PolicySection id="security" title="11. How we protect your information">
              <p>
                We take reasonable technical and organisational measures to
                protect information against unauthorised access, accidental
                loss, alteration, disclosure or destruction.
              </p>
              <p>
                Measures may include secure connections, access controls,
                appropriate server configuration, system updates and
                restricted access to infrastructure.
              </p>
              <p>
                No website or method of transmitting information over the
                internet can be guaranteed to be completely secure.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="12. Your data protection rights">
              <p>
                Depending on the circumstances and applicable law, you may
                have the right to:
              </p>
              <ul className="list-disc space-y-3 pl-6 marker:text-[#247a76]">
                <li>
                  <strong className="text-slate-800">Access:</strong> request
                  a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong className="text-slate-800">Rectification:</strong>{" "}
                  request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong className="text-slate-800">Erasure:</strong> request
                  deletion where the relevant legal conditions are met.
                </li>
                <li>
                  <strong className="text-slate-800">Restriction:</strong>{" "}
                  request that processing be restricted in certain
                  circumstances.
                </li>
                <li>
                  <strong className="text-slate-800">Objection:</strong> object
                  to processing carried out on the basis of legitimate
                  interests, where the right applies.
                </li>
                <li>
                  <strong className="text-slate-800">Data portability:</strong>{" "}
                  request certain information in a portable format where the
                  right applies.
                </li>
              </ul>
              <p>
                These rights are subject to legal conditions and exemptions.
                They do not apply identically to every type of processing.
              </p>
              <p>
                To exercise a right, email{" "}
                <a
                  href="mailto:thomas@bowdenvisuals.co.uk?subject=SUP%20Safer%20Data%20Protection%20Request"
                  className="break-all font-semibold text-[#247a76] hover:underline"
                >
                  thomas@bowdenvisuals.co.uk
                </a>
                . We may need to verify your identity before responding.
              </p>
            </PolicySection>

            <PolicySection id="complaints" title="13. Complaints">
              <p>
                If you have concerns about how your personal information is
                handled, please contact us first so that we can try to
                resolve the issue.
              </p>
              <p>
                You also have the right to complain to the UK's Information
                Commissioner's Office (ICO), which is responsible for
                overseeing data protection in the UK.
              </p>
              <p>
                <PolicyLink href="https://ico.org.uk/">
                  Information Commissioner's Office — ico.org.uk
                </PolicyLink>
              </p>
            </PolicySection>

            <PolicySection id="children" title="14. Children's privacy">
              <p>
                SUP Safer's core risk assessment functionality does not
                require users to provide personal information or create an
                account.
              </p>
              <p>
                We do not knowingly seek personal information from children
                through the core risk assessment service. If you believe
                personal information has been provided to us inappropriately,
                please contact us so that we can review the matter.
              </p>
            </PolicySection>

            <PolicySection id="third-party" title="15. Third-party websites and services">
              <p>
                SUP Safer relies on external services for certain functions
                and may link to third-party websites. These services are
                operated independently and may have their own privacy
                policies, terms and data-handling practices.
              </p>
              <p>
                We encourage you to review the relevant policies before
                providing personal information directly to a third party.
              </p>
              <p>
                Environmental information supplied by third parties is used
                to support the service. Their processing of technical data
                associated with requests is governed by their own practices.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="16. Changes to this Privacy Policy">
              <p>
                This Privacy Policy may be updated to reflect changes to
                SUP Safer, its technical configuration, the services it uses
                or applicable legal requirements.
              </p>
              <p>
                The latest version will be published on this page, together
                with the date on which it was last updated. We encourage you
                to review this page periodically.
              </p>
            </PolicySection>

            <PolicySection id="contact" title="17. Contact us">
              <p>
                If you have questions about this Privacy Policy, the
                information we process or your data protection rights, you
                can contact the website operator using the details below.
              </p>

              <div className="rounded-2xl border border-teal-100 bg-[#eef9f5] p-5 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#247a76] shadow-sm">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-slate-900">
                      Thomas Bowden
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Independent developer of SUP Safer
                    </p>
                    <a
                      href="mailto:thomas@bowdenvisuals.co.uk"
                      className="mt-3 inline-block break-all font-semibold text-[#247a76] hover:underline"
                    >
                      thomas@bowdenvisuals.co.uk
                    </a>
                    <p className="mt-2 text-sm text-slate-600">
                      Website:{" "}
                      <PolicyLink href="https://sup-safer.co.uk">
                        sup-safer.co.uk
                      </PolicyLink>
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* Footer note */}
            <div className="border-t border-slate-200 py-7">
              <p className="text-sm leading-6 text-slate-500">
                This policy was last updated on {lastUpdated}. It describes
                the intended handling of information by SUP Safer and should
                be kept aligned with the website's actual technical
                configuration and data-processing practices.
              </p>
              <a
                href="#introduction"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#247a76] hover:text-[#185b57]"
              >
                Back to the beginning
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="m6 15 6-6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>

    </main>
  );
}
