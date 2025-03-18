
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              My Story
            </h1>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-white/80 mb-6 animate-fade-in">
                It all started with my deep dive into cloud architecture and automation while working on projects like Sococo and Etisalat, where I streamlined deployments and secured cloud infrastructures at scale.
              </p>
              <p className="text-lg text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                Over the years, seeing businesses struggle with inefficient pipelines, security blind spots, and costly downtime made me realize—this is where I thrive. I love taking complex DevOps and DevSecOps challenges, breaking them down, and building bulletproof solutions, whether for startups or enterprises.
              </p>
              <p className="text-lg text-white/80 animate-fade-in" style={{ animationDelay: "200ms" }}>
                From automating CI/CD in Chronicle to fortifying security in Carbonite, every project reinforced my passion. Now, through my consultancy, I help businesses harness AWS to scale securely, efficiently, and with confidence.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="text-2xl font-display font-bold mb-6 text-white">Certifications & Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">AWS Certified Solutions Architect – Professional</h4>
                    <p className="text-white/70">Advanced cloud architecture and design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1"> Certified Cloud Practitioner </h4>
                    <p className="text-white/70">Container orchestration expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1"> Certified DevSecOps Specialist</h4>
                    <p className="text-white/70">Security integration across development lifecycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              My Approach
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I believe in a hands-on, transparent, and results-driven approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-white mb-4">
                <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Consultation</h3>
              <p className="text-white/70">Understanding your specific needs and challenges.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-white mb-4">
                <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Strategy</h3>
              <p className="text-white/70">Developing a tailored DevOps & DevSecOps plan.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-white mb-4">
                <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-lg font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Implementation</h3>
              <p className="text-white/70">Applying best practices on AWS for optimized performance.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="text-white mb-4">
                <div className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-lg font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Monitoring</h3>
              <p className="text-white/70">Providing ongoing support and insights to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Let's Collaborate
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              I'm always excited to connect with businesses looking to leverage the power of AWS through expert DevOps & DevSecOps practices. Whether you need infrastructure automation, security hardening, or end-to-end cloud management, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                <span>Ready to talk?</span>
              </div>
              
              <a 
                href="#contact" 
                className="bg-white hover:bg-white/90 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all"
              >
                Schedule a Free Consultation
               
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
