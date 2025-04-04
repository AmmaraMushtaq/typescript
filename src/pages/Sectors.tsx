
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Banknote, Stethoscope, Book, ShoppingCart, Gamepad2, ShieldCheck, Building, Landmark } from "lucide-react";

const sectorsList = [
  {
    icon: <Banknote className="h-10 w-10" />, 
    title: "FinTech",
    description: "Cloud-native banking solutions, automated CI/CD pipelines, and regulatory compliance for secure financial services."
  },
  {
    icon: <Stethoscope className="h-10 w-10" />, 
    title: "HealthTech",
    description: "HIPAA-compliant infrastructure, scalable telemedicine solutions, and end-to-end security for healthcare applications."
  },
  {
    icon: <Book className="h-10 w-10" />, 
    title: "EdTech",
    description: "Scalable cloud platforms, CI/CD automation, and AI-driven learning experiences for modern education."
  },
  {
    icon: <ShoppingCart className="h-10 w-10" />, 
    title: "E-Commerce & Retail",
    description: "High-availability infrastructure, performance optimization, and secure payment solutions for online businesses."
  },
  {
    icon: <Gamepad2 className="h-10 w-10" />, 
    title: "Gaming & Entertainment",
    description: "Low-latency cloud architectures, containerized deployments, and scalable microservices for immersive experiences."
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />, 
    title: "Cybersecurity & SaaS",
    description: "Security-first DevOps practices, cloud-native security solutions, and compliance-driven architectures for SaaS applications."
  },
  {
    icon: <Building className="h-10 w-10" />, 
    title: "PropTech & Real Estate",
    description: "AI-powered analytics, cloud-based CRM solutions, and automated workflows for smart property management."
  },
  {
    icon: <Landmark className="h-10 w-10" />, 
    title: "Government & Public Sector",
    description: "Infrastructure modernization, secure cloud solutions, and data encryption for public sector digital transformation."
  }
];

const SectorsPage = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Sectors
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Industries I Empower with DevOps & Full-Stack Innovation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I provide DevOps, DevSecOps, and Full-Stack solutions tailored to the unique challenges of businesses across multiple sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sectors List */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsList.map((sector, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${100 * index}ms` }}
              >
                <div className="text-white mb-6">{sector.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{sector.title}</h3>
                <p className="text-white/70">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              If you're looking for tailored DevOps & software solutions to drive your business forward, I'm here to help. Let's discuss how my expertise can make a difference.
            </p>
            <a 
              href="#contact" 
              className="bg-white hover:bg-white/90 text-black font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Schedule a Free Consultation today!
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default SectorsPage;


