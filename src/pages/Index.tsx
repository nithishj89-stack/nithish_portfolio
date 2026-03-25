import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Qualifications />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Index;
