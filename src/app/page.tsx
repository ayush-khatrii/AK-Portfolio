"use client";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GithubContribution from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
 return (
  <div className="h-full">
   <Hero />
   <AvailabilityBanner />
   <About />
   <GithubContribution />
   <Experience />
   <Skills />
   <Projects />
  </div>
 );
};

export default page;
