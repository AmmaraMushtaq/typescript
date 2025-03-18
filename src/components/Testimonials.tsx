
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechNova Inc.",
    quote: "Luqman's expertise in AWS and DevSecOps transformed our deployment process. We've reduced our deployment time by 70% and significantly improved our security posture.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    position: "VP of Engineering, DataFlow Systems",
    quote: "We were struggling with scalability issues until Luqman implemented a containerized solution. Our infrastructure is now more resilient and our team is more productive.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Priya Patel",
    position: "DevOps Lead, FinTech Solutions",
    quote: "The CI/CD pipeline Luqman designed has become the backbone of our development process. His attention to security details is unmatched in the industry.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-dark-gradient">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            What My Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -left-5 md:-left-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              // className="bg-white/5 border border-white/10 rounded-full p-3 hover:bg-white/10 transition-all"
              // aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 md:-right-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              // className="bg-white/5 border border-white/10 rounded-full p-3 hover:bg-white/10 transition-all"
              // aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Testimonial Slider */}
          <div className="overflow-hidden relative bg-secondary/30 border border-white/10 rounded-2xl p-8 md:p-8 animate-fade-in">
            <Quote className="absolute top-8 left-8 h-12 w-8 text-white/10" />
            
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="min-w-full flex flex-col items-center px-6"
                  >
                    <blockquote className="text-lg md:text-xl text-white/90 text-center mb-8 relative z-10">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
