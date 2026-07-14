import { AboutSection } from "@/components/AboutSection";
import { Architecture } from "@/components/Architecture";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Projects } from "@/components/Projects";
import { SkillSet } from "@/components/SkillSet";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillSet />
        <Expertise />
        <Projects />
        <Experience />
        <Architecture />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
