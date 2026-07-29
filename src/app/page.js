import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/techStack.jsx";
import Projects from "../components/projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
