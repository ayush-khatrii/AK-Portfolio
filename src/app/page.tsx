"use client";
import About from '@/components/About'
import Contact from '@/components/Contact';
import Experience from '@/components/Experience'
import GithubContribution from '@/components/GithubContribution'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import React from 'react'

const page = () => {
  return (
    <div className='h-full md:px-5'>
      <Hero />
      <About />
      <GithubContribution />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default page