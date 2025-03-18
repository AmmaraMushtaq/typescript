
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";


import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast(); // ✅ Extract toast function
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  

    if (!formData.name || !formData.email || !formData.message) {
    
      toast({
        title: "Error",
        description: "All fields are required!",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
  

    setTimeout(() => {
      

      toast({
        title: "Success",
        description: "Thanks for reaching out!",
        variant: "default",
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I'd love to connect! Whether you have a question about my services, want to discuss a potential project, or simply wish to say hello, feel free to reach out.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl font-display font-bold mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href="mailto:your-email@example.com" className="text-white hover:text-white/80 transition-all">
                      your-email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <a href="tel:+123456789" className="text-white hover:text-white/80 transition-all">
                      +1 (234) 567-89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-all">
                      Your LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
                <p className="text-white/70 mb-2">Monday - Friday: 9AM - 5PM EST</p>
                <p className="text-white/70">I aim to respond to all inquiries within 24 business hours.</p>
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl font-display font-bold mb-6 text-white">Message Form</h2>
              <p className="text-white/70 mb-6">
                Please fill out the form below to send me a message directly.
              </p>
             
  
    
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                   
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your Message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white text-black font-medium px-6 py-3 rounded-full w-full transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white/90'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form> 
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ContactPage;