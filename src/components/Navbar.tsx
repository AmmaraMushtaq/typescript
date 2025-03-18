
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-black/90 backdrop-blur-md border-b border-white/10" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-semibold tracking-tight text-white">Luqman Miraj</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/') ? "text-white" : "text-white/70 hover:text-white"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/about') ? "text-white" : "text-white/70 hover:text-white"
            )}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/services') ? "text-white" : "text-white/70 hover:text-white"
            )}
          >
            Services
          </Link>
          <Link 
            to="/case-studies" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/case-studies') ? "text-white" : "text-white/70 hover:text-white"
            )}
          >
            Case Studies
          </Link>
          <Link 
            to="/contact" 
            className="bg-white hover:bg-white/90 text-black font-medium text-sm px-5 py-2 rounded-full transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
      )}>
        <nav className="flex flex-col items-center gap-6">
          <Link 
            to="/" 
            className={cn(
              "text-lg font-medium transition-colors",
              isActive('/') ? "text-white" : "text-white/70 hover:text-white"
            )}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-lg font-medium transition-colors",
              isActive('/about') ? "text-white" : "text-white/70 hover:text-white"
            )}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "text-lg font-medium transition-colors",
              isActive('/services') ? "text-white" : "text-white/70 hover:text-white"
            )}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/case-studies" 
            className={cn(
              "text-lg font-medium transition-colors",
              isActive('/case-studies') ? "text-white" : "text-white/70 hover:text-white"
            )}
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link 
            to="/contact" 
            className="bg-white hover:bg-white/90 text-black font-medium px-5 py-2 rounded-full mt-4 transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
