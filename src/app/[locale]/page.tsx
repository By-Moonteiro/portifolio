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
  const [stats, t, tAbout, tContact, tSkills, tExperience, tGithub, tProjects] =
    await Promise.all([
      getGithubStats("By-Moonteiro"),
      getTranslations("hero"),
      getTranslations("about"),
      getTranslations("contact"),
      getTranslations("skills"),
      getTranslations("experience"),
      getTranslations("github"),
      getTranslations("projects"),
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
      <Projects
        title={tProjects("title")}
        filters={{
          all: tProjects("filters.all"),
          fullstack: tProjects("filters.fullstack"),
          backend: tProjects("filters.backend"),
        }}
        viewDetails={tProjects("viewDetails")}
        repo={tProjects("repo")}
        demo={tProjects("demo")}
        descriptions={{
          astreon: tProjects("items.astreon.description"),
          nebula: tProjects("items.nebula.description"),
        }}
      />
      <Skills
        title={tSkills("title")}
        learning={tSkills("learning")}
        learningSubtitle={tSkills("learningSubtitle")}
        categories={{
          languages: tSkills("categories.languages"),
          backend: tSkills("categories.backend"),
          frontend: tSkills("categories.frontend"),
          database: tSkills("categories.database"),
          infra: tSkills("categories.infra"),
          tools: tSkills("categories.tools"),
        }}
      />
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
        title={tGithub("title")}
        contributionsLabel={tGithub("contributions")}
        repos={tGithub("repos")}
        followersLabel={tGithub("followers")}
        graphTitle={tGithub("graphTitle")}
        viewProfile={tGithub("viewProfile")}
        less={tGithub("less")}
        more={tGithub("more")}
        loading={tGithub("loading")}
        contributionsTooltip={tGithub("contributionsTooltip")}
      />
      <Experience
        title={tExperience("title")}
        history={tExperience("history")}
        soon={tExperience("soon")}
        firstJob={tExperience("firstJob")}
        historyPlaceholder={tExperience("historyPlaceholder")}
        education={tExperience("education")}
        inProgress={tExperience("inProgress")}
        certifications={tExperience("certifications")}
        degree={tExperience("degree")}
        period={tExperience("period")}
      />
      <Contact
        title={tContact("title")}
        heading={tContact("heading")}
        subheading={tContact("subheading")}
      />
      <Footer />
    </main>
  );
}
