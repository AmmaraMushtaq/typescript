
import { Github, Linkedin, Twitter, Globe, Mail, MapPin  } from "lucide-react";

import { Link } from "react-router-dom"; // Use this for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="/" className="text-lg font-display font-semibold text-white">Luqman Miraj</a>
            </div>
            <p className="text-sm text-white/70 mb-4 max-w-xs">
              Expert DevOps & DevSecOps consultant specializing in AWS cloud solutions and security.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://luqmanmiraj.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
         
          
          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-white/70 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Email</h3>
            <p className="text-sm text-white/70 flex items-center gap-2">
              <Mail className="h-4 w-4" /> 
             
                your-email@example.com
           
            </p>
            <h3 className="font-semibold mb-4 text-white">Location</h3>
            <p className="text-sm text-white/70 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 
              Your City, Your Country
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Luqman Miraj. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Designed and developed with precision
          </p>
        </div>
        </div>
        
       
      
    </footer>
  );
};

export default Footer;
