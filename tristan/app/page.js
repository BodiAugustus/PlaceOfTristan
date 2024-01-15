import Hero from "./sections/Hero";
import About from "./sections/About";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";
import DeFi from "./sections/DeFi";
import Author from "./sections/Author";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  max-w-[1600px] mx-auto bg-blue-400 overflow-hidden ">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <DeFi />
      <Author />
    </main>
  );
}
