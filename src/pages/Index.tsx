
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Lazy loading images with blur effect
    const blurDivs = document.querySelectorAll<HTMLElement>(".blur-load");
    
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");
      
      function loaded() {
        div.classList.add("loaded");
      }
      
      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener("load", loaded);
      }
    });
    
    return () => {
      blurDivs.forEach((div) => {
        const img = div.querySelector("img");
        img?.removeEventListener("load", () => {});
      });
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <TrustedBy />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
