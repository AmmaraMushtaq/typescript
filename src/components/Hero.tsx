
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-gradient pt-20 pb-32">
      <div className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium tracking-wide animate-slide-down">
              <span>DevOps & DevSecOps Expertise for Your Business</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white animate-slide-down" style={{ animationDelay: "100ms" }}>
              Streamline Your Business with Cutting-Edge DevOps Solutions
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl animate-slide-down" style={{ animationDelay: "200ms" }}>
              I specialize in delivering robust, secure, and efficient cloud solutions on AWS, helping businesses optimize their operations and scale with confidence.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4 animate-slide-down" style={{ animationDelay: "300ms" }}>
              <a href="#contact" className="group bg-white text-black font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-all">
                Schedule a Free Consultation
               
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/NK22nXObT5WGr7TRD0TMww" 
                alt="DevOps expert collaborating with business owner" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
