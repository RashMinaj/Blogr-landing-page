import { useState, useRef, useEffect } from "react";

interface NavItem {
  label: string;
  links: string[];
}

const navItems: NavItem[] = [
  { label: "Product", links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
  { label: "Company", links: ["About", "Team", "Blog", "Careers"] },
  { label: "Connect", links: ["Contact", "Newsletter", "LinkedIn"] },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDesktopMenu(null);
        setOpenMobileMenu(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDesktop = (label: string) => {
    setOpenDesktopMenu(openDesktopMenu === label ? null : label);
  };

  const toggleMobile = (label: string) => {
    setOpenMobileMenu(openMobileMenu === label ? null : label);
  };

  return (
    <header role="banner">
      <nav
        ref={navRef}
        className="relative z-50"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 md:px-16 py-12">
          {/* Logo */}
          <a href="/" aria-label="Blogr home">
            <img src="/images/logo.svg" alt="Blogr" className="h-8" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 flex-1 ml-16" role="menubar">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDesktop(item.label)}
                  className="flex items-center gap-2 text-white/80 hover:text-white font-overpass text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
                  aria-expanded={openDesktopMenu === item.label}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openDesktopMenu === item.label ? "rotate-180" : ""}`}
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {openDesktopMenu === item.label && (
                  <div
                    className="dropdown-enter absolute top-8 left-0 bg-white rounded-lg shadow-2xl py-4 min-w-[10rem] z-50"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        role="menuitem"
                        className="block px-6 py-2 text-gray-900-blogr font-overpass text-sm hover:font-semibold transition-all duration-150 focus:outline-none focus:bg-gray-100"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-white/80 hover:text-white font-overpass text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-white text-red-500-blogr hover:bg-red-400-blogr hover:text-white font-ubuntu font-bold text-sm px-8 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="24" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <line x1="24" y1="2" x2="2" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="32" height="18" viewBox="0 0 32 18" fill="none" aria-hidden="true">
                <rect width="32" height="3" rx="1.5" fill="white" />
                <rect y="7.5" width="32" height="3" rx="1.5" fill="white" />
                <rect y="15" width="32" height="3" rx="1.5" fill="white" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu-enter md:hidden absolute top-24 left-4 right-4 bg-white dark:bg-gray-900-blogr rounded-xl shadow-2xl z-50 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggleMobile(item.label)}
                  className="flex items-center justify-center gap-3 w-full py-4 font-overpass font-semibold text-blue-900-blogr focus:outline-none focus:ring-2 focus:ring-red-500-blogr rounded"
                  aria-expanded={openMobileMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openMobileMenu === item.label ? "rotate-180" : ""}`}
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1 1l4 4 4-4" stroke="hsl(356,100%,66%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openMobileMenu === item.label && (
                  <div className="mobile-menu-enter bg-gray-100 rounded-lg mb-3 py-3" role="menu">
                    {item.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        role="menuitem"
                        className="block text-center py-2 text-gray-600-blogr font-overpass text-sm hover:font-semibold transition-all focus:outline-none focus:bg-gray-200"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col items-center gap-4 pt-6">
              <a
                href="#"
                className="font-overpass font-semibold text-blue-900-blogr focus:outline-none focus:ring-2 focus:ring-red-500-blogr rounded"
              >
                Login
              </a>
              <a
                href="#"
                className="hero-gradient text-white font-ubuntu font-bold px-16 py-3 rounded-full w-full text-center focus:outline-none focus:ring-2 focus:ring-red-500-blogr"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
