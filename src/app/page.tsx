import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getGithubStats } from "@/lib/github";
import GithubActivity from "@/components/sections/GithubActivity";
import About from "../components/sections/About";

export default async function Home() {
  const [stats] = await Promise.all([
    getGithubStats("By-Moonteiro"),
  ]);

  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <GithubActivity
        followers={stats.followers}
        public_repos={stats.public_repos}
        contributions={stats.contributions}
        total={stats.total}
      />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
