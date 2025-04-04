import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-black/90 backdrop-blur-md border-b border-white/10" : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-display font-semibold tracking-tight text-white">
          Luqman Miraj
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("text-sm font-medium", isActive("/") ? "text-white" : "text-white/70 hover:text-white")}>
            Home
          </Link>
          <Link to="/about" className={cn("text-sm font-medium", isActive("/about") ? "text-white" : "text-white/70 hover:text-white")}>
            About
          </Link>

          {/* Clickable Dropdown */}
          <div className="relative">
            <button
              ref={buttonRef}
              className="text-sm font-medium text-white/70 hover:text-white flex items-center gap-1"
              onClick={() => setDropdownOpen(prev => !prev)}
            >
              <span className="w-full text-center">Solutions</span>
              <ChevronDown size={14} />
            </button>

            <div
              ref={dropdownRef}
              className={cn(
                "absolute left-0 mt-2 bg-black/90 text-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform scale-95 opacity-0",
                dropdownOpen && "opacity-100 scale-100"
              )}
              style={{
                width: buttonRef.current?.offsetWidth || "auto",
                pointerEvents: dropdownOpen ? "auto" : "none",
              }}
            >
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-center hover:bg-white/20"
                onClick={() => setDropdownOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/sectors"
                className="block px-4 py-2 text-sm text-center hover:bg-white/20"
                onClick={() => setDropdownOpen(false)}
              >
                Sectors
              </Link>
            </div>
          </div>

          <Link to="/case-studies" className={cn("text-sm font-medium", isActive("/case-studies") ? "text-white" : "text-white/70 hover:text-white")}>
            Case Studies
          </Link>

          <Link to="/contact" className="bg-white hover:bg-white/90 text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none text-white" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-black/95 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
      )}>
        <nav className="flex flex-col items-center gap-6">
          <Link to="/" className={cn("text-lg font-medium", isActive("/") ? "text-white" : "text-white/70 hover:text-white")} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className={cn("text-lg font-medium", isActive("/about") ? "text-white" : "text-white/70 hover:text-white")} onClick={closeMenu}>
            About
          </Link>

          {/* Mobile Dropdown */}
          <details className="w-full text-center">
            <summary className="text-lg font-medium text-white/70 hover:text-white cursor-pointer">
              Solutions
            </summary>
            <div className="mt-2 flex flex-col items-center">
              <Link to="/services" className="text-sm text-white/70 hover:text-white" onClick={closeMenu}>
                Services
              </Link>
              <Link to="/sectors" className="text-sm text-white/70 hover:text-white" onClick={closeMenu}>
                Sectors
              </Link>
            </div>
          </details>

          <Link to="/case-studies" className={cn("text-lg font-medium", isActive("/case-studies") ? "text-white" : "text-white/70 hover:text-white")} onClick={closeMenu}>
            Case Studies
          </Link>

          <Link to="/contact" className="bg-white hover:bg-white/90 text-black font-medium px-5 py-2 rounded-full mt-4 transition-colors" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
