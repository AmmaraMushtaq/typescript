
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="section bg-black">
      <div className="container-custom">
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white animate-slide-up">
                Ready to transform your business with expert DevOps services?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "100ms" }}>
                Let's discuss how I can help streamline your operations, enhance security, and optimize your cloud infrastructure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email me at</p>
                    <a href="mailto:contact@luqmanmiraj.com" className="text-white hover:text-white/80 transition-all">
                      contact@luqmanmiraj.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: "300ms" }}>
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call me at</p>
                    <a href="tel:+123456789" className="text-white hover:text-white/80 transition-all">
                      +1 (234) 567-89
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="bg-white/5 rounded-xl p-6 shadow-sm border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-6 w-6 text-white" />
                  <h3 className="text-white font-semibold text-lg">Schedule a Free Consultation</h3>
                </div>
                
                <p className="text-white/70 text-sm mb-6">
                  Book a 30-minute call to discuss your business needs and how I can help you achieve your goals.
                </p>
                
                <Link 
                  to="/contact" 
                  className="group bg-white hover:bg-white/90 text-black font-medium px-6 py-3 rounded-full w-full flex items-center justify-center gap-2 transition-all"
                >
                  Book Your Call
                 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
