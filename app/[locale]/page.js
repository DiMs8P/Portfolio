import HeroSection from "./../components/Hero";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/About";
import WorkSection from "../components/experience/Experience";
import ProjectSection from "../components/projects/Works";
import EmailSection from "./../components/email/Email";
import Footer from "./../components/Footer";

export default function Home() {

  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar/>
          <div className="container mt-24 mx-auto sm:px-12 px-6 py-4">
            <HeroSection/>
            <AboutSection />
            <WorkSection/>
            <ProjectSection/>
            <EmailSection/>
          </div>
          <Footer/>
      </main>
  );
}