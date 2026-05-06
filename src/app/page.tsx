import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getTotalCommits } from "@/lib/github";

export default async function Home() {
  const commits = await getTotalCommits("By-Moonteiro");

  return (
    <main>
      <Header />
      <Hero commits={commits} />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
