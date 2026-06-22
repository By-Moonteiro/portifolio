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
  const [stats, t, tAbout, tContact] = await Promise.all([
    getGithubStats("By-Moonteiro"),
    getTranslations("hero"),
    getTranslations("about"),
    getTranslations("contact"),
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
      <About
        title={tAbout("title")}
        badge={tAbout("badge")}
        p1={tAbout("p1")}
        p1Keywords={tAbout("p1Keywords").split(",")}
        p2={tAbout("p2")}
        p2Keywords={tAbout("p2Keywords").split(",")}
        p3={tAbout("p3")}
        p3Keywords={tAbout("p3Keywords").split(",")}
      />
      <GithubActivity
        followers={stats.followers}
        public_repos={stats.public_repos}
        contributions={stats.contributions}
        total={stats.total}
      />
      <Experience />
      <Contact
        title={tContact("title")}
        heading={tContact("heading")}
        subheading={tContact("subheading")}
      />
      <Footer />
    </main>
  );
}
