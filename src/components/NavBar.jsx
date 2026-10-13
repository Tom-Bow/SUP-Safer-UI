import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/SUP-SAFER_Logo-Long.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-[900] h-[110px] w-full border-b border-[#e5e5e7] bg-white box-border">
        <div className="relative flex h-full w-full items-center justify-center px-6 box-border">
          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="group absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-[5px] rounded-[9px] border border-[#e1e1e3] bg-white p-0 transition-colors duration-150 hover:border-[#d4d4d7] hover:bg-[#f5f5f6]"
          >
            <span
              className={`block h-[2px] w-[18px] rounded-full bg-[#444] transition-all duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[2px] w-[18px] rounded-full bg-[#444] transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[2px] w-[18px] rounded-full bg-[#444] transition-all duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Logo */}
          <div className="flex h-full items-center justify-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex h-full items-center justify-center"
            >
              <img
                src={Logo}
                alt="SUP Safer"
                className="block w-[200px] h-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-x-0 bottom-0 top-[110px] z-[949] bg-black/[0.22] transition-all duration-200 ${
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        aria-hidden={!open}
        className={`fixed bottom-0 left-0 top-[110px] z-[950] w-[320px] max-w-[calc(100vw-2rem)] overflow-y-auto border-r border-[#e2e2e4] bg-white p-6 shadow-[8px_0_30px_rgba(0,0,0,0.08)] transition-transform duration-[220ms] ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#ededee] px-1 pb-5">
          <div>
            <span className="mb-1 block text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#dd6f09]">
              SUP Safer
            </span>

            <h3 className="m-0 text-[1.15rem] font-bold tracking-[-0.02em] text-[#252527]">
              Menu
            </h3>
          </div>
        </div> */}

        {/* Navigation */}
        <nav className="mb-6">
          <span className="mb-[0.45rem] ml-[0.35rem] block text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#999]">
            Navigation
          </span>

          <div className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={closeMenu}
              className={`relative flex min-h-11 w-full items-center rounded-[9px] px-3 text-[0.86rem] font-semibold no-underline transition-colors duration-150 ${
                isActive("/")
                  ? "bg-[#cef8f5] text-[#247a76]"
                  : "text-[#555] hover:bg-[#f5f5f6] hover:text-[#222]"
              }`}
            >
              {isActive("/") && (
                <span className="absolute bottom-[9px] left-0 top-[9px] w-[3px] rounded-r-[3px] bg-[#247a76]" />
              )}

              Home
            </Link>

            <Link
              to="/how-it-works"
              onClick={closeMenu}
              className={`relative flex min-h-11 w-full items-center rounded-[9px] px-3 text-[0.86rem] font-semibold no-underline transition-colors duration-150 ${
                isActive("/how-it-works")
                  ? "bg-[#cef8f5] text-[#247a76]"
                  : "text-[#555] hover:bg-[#f5f5f6] hover:text-[#222]"
              }`}
            >
              {isActive("/how-it-works") && (
                <span className="absolute bottom-[9px] left-0 top-[9px] w-[3px] rounded-r-[3px] bg-[#247a76]" />
              )}

              How It Works
            </Link>

            {/* <Link
              to="/about"
              onClick={closeMenu}
              className={`relative flex min-h-11 w-full items-center rounded-[9px] px-3 text-[0.86rem] font-semibold no-underline transition-colors duration-150 ${
                isActive("/about")
                  ? "bg-[#cef8f5] text-[#247a76]"
                  : "text-[#555] hover:bg-[#f5f5f6] hover:text-[#222]"
              }`}
            >
              {isActive("/about") && (
                <span className="absolute bottom-[9px] left-0 top-[9px] w-[3px] rounded-r-[3px] bg-[#247a76]" />
              )}

              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={`relative flex min-h-11 w-full items-center rounded-[9px] px-3 text-[0.86rem] font-semibold no-underline transition-colors duration-150 ${
                isActive("/contact")
                  ? "bg-[#cef8f5] text-[#247a76]"
                  : "text-[#555] hover:bg-[#f5f5f6] hover:text-[#222]"
              }`}
            >
              {isActive("/contact") && (
                <span className="absolute bottom-[9px] left-0 top-[9px] w-[3px] rounded-r-[3px] bg-[#247a76]" />
              )}

              Contact
            </Link> */}
          </div>
        </nav>
      </aside>
    </>
  );
}