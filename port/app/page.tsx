'use client';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import AnimatedCounters from "./components/AnimatedCounters";
import ProjectFilters from "./components/ProjectFilters";
import TiltCard from "./components/TiltCard";
import Typewriter from "./components/Typewriter";
import SectionDivider from "./components/SectionDivider";
import CaseStudies from "./components/CaseStudies";
import NewsletterSignup from "./components/NewsletterSignup";
import ProjectCarousel from "./components/ProjectCarousel";
import PersonalTimeline from "./components/PersonalTimeline";
import FunFacts from "./components/FunFacts";
import GitHubActivity from "./components/GitHubActivity";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("All");
  return (
    <main>
      <Hero>
        <Typewriter words={["Frontend Developer", "UI/UX Enthusiast", "React & Next.js Expert"]} />
      </Hero>
      <SectionDivider />
      <AnimatedCounters />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <PersonalTimeline />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <ProjectCarousel />
      <SectionDivider />
      <FunFacts />
      <SectionDivider />
      <GitHubActivity />
      <SectionDivider />
      <ProjectFilters onFilter={setFilter} />
      <Projects filter={filter} TiltCard={TiltCard} />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <NewsletterSignup />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
