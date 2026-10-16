import { Link } from "react-router-dom";
import Logo from "../assets/SUP-SAFER_Logo-Long.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col items-center">
            <img
              src={Logo}
              alt="SUP Safer"
              className="w-[190px]"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              A paddleboarding risk assessment tool designed to help users
              better understand the environmental conditions at Swansea Beach.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Explore
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="w-fit text-sm text-gray-500 transition hover:text-[#247a76]"
              >
                Home
              </Link>

              <Link
                to="/how-it-works"
                className="w-fit text-sm text-gray-500 transition hover:text-[#247a76]"
              >
                How It Works
              </Link>

              <Link
                to="/privacy-policy"
                className="w-fit text-sm text-gray-500 transition hover:text-[#247a76]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-gray-500 transition hover:text-[#247a76]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Safety Disclaimer
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              SUP Safer provides an environmental risk assessment based on
              available conditions. It is intended to support, not replace,
              personal judgement, experience, weather awareness and appropriate
              water safety knowledge.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SUP Safer. All rights reserved.
          </p>

          <p>
            Developed as part of a Swansea University dissertation project.
          </p>
        </div>
      </div>
    </footer>
  );
}