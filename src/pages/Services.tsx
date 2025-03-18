
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CloudCog, GitMerge, Cloud, Shield, BarChart, HardDrive, Package2, Code, MoveRight, Activity, FileCheck } from "lucide-react";


const servicesList = [
  {
    icon: <GitMerge className="h-10 w-10" />,
    title: "CI/CD Automation",
    description: "Accelerate your development lifecycle with fully automated continuous integration and continuous deployment pipelines, reducing manual tasks and speeding up releases."
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Infrastructure Management",
    description: "Design, deploy, and manage scalable cloud environments on AWS. I ensure your infrastructure is optimized for performance, security, and cost-efficiency."
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Security Hardening (DevSecOps)",
    description: "Implement advanced security measures to safeguard your applications and data. My approach integrates security into every step of the development lifecycle."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Monitoring & Logging",
    description: "Set up robust monitoring and logging solutions to gain real-time insights into your systems. Proactive monitoring helps in identifying issues before they impact your business."
  },
  {
    icon: <HardDrive className="h-10 w-10" />,
    title: "Disaster Recovery",
    description: "Develop and implement disaster recovery strategies to keep your business running smoothly, even in unexpected situations."
  },
  {
    icon: <Package2 className="h-10 w-10" />,
    title: "Containerization & Orchestration",
    description: "Leverage Docker and Kubernetes for efficient container management, enabling seamless deployment and scaling of your applications."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Infrastructure as Code (IaC)",
    description: "Automate infrastructure deployment using tools like Terraform and AWS CDK, ensuring consistency and reducing setup times."
  },
  {
    icon: <CloudCog className="h-10 w-10" />,
    title: "Cloud Migration & Modernization",
    description: "Assist businesses in migrating to the cloud or modernizing existing infrastructures, enhancing performance, and cutting costs."
  },
  {
    icon: <Activity className="h-10 w-10" />,
    title: "Performance Optimization",
    description: "Analyze and optimize your infrastructure and applications to improve speed, reliability, and user experience."
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: "Compliance & Governance",
    description: "Ensure your infrastructure and applications meet industry standards and regulatory requirements through comprehensive audits and best practices."
  }
];

const ServicesPage = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              My Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I provide a comprehensive range of DevOps and DevSecOps services to help businesses streamline operations, enhance security, and achieve scalability.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${100 * index}ms` }}
              >
                <div className="text-white mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
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
              If you're looking for tailored DevOps & DevSecOps solutions to drive your business forward, I'm here to help. Let's discuss how my expertise can make a difference.
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

export default ServicesPage;
