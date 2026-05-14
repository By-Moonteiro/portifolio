import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getGithubStats, getTotalCommits } from "@/lib/github";
import GithubActivity from "@/components/sections/GithubActivity";

export default async function Home() {
  const [commits, stats] = await Promise.all([
    getTotalCommits("By-Moonteiro"),
    getGithubStats("By-Moonteiro"),
  ]);

  return (
    <main>
      <Header />
      <Hero commits={commits} />
      <Projects />
      <Skills />
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
