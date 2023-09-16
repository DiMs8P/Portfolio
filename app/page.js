import Image from "next/image";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import WorkSection from "./components/Experience";
import ProjectSection from "./components/Works";
import EmailSection from "./components/Email";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
              <Navbar/>

            <HeroSection />
            <AboutSection />
            <WorkSection/>
            <ProjectSection/>
            <EmailSection/>
          </div>
          <Footer/>
      </main>
  );
}