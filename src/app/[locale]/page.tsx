import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getGithubStats } from "@/lib/github";
import GithubActivity from "@/components/sections/GithubActivity";
import About from "@/components/sections/About";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const [stats, t] = await Promise.all([
    getGithubStats("By-Moonteiro"),
    getTranslations("hero"),
  ]);

  return (
    <main>
      <Header />
      <Hero
        role={t("role")}
        description={t("description")}
        downloadCV={t("downloadCV")}
        viewProjects={t("viewProjects")}
      />
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
