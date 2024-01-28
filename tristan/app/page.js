import Hero from "./sections/Hero";
import About from "./sections/About";
import Nav from "./components/layout/Nav";
import Projects from "./sections/Projects";
import DeFi from "./sections/DeFi";
import Author from "./sections/Author";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  max-w-[1600px] mx-auto hero-bg2 overflow-hidden ">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <DeFi />
      <Author />
      <Skills />
      <Footer />
    </main>
  );
}
