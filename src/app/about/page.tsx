"use client";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { motion } from "framer-motion";

const birthYear = 2003;
const age = new Date().getFullYear() - birthYear;

const education = [
  {
    id: 1,
    date: "2021 - 2024",
    title: "Bachelor's in Computer Applications",
    description:
      "Studied software development and web technologies at DNV International College.",
  },
  {
    id: 2,
    date: "2010 - 2021",
    title: "Primary & Higher Education",
    description:
      "Completed schooling at Modern School, building a strong academic foundation",
  },
];

const About = () => {
  return (
    <section className="max-w-4xl mx-auto py-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Hey there! I’m{" "}
          <span className="font-semibold text-foreground">Ayush Khatri</span>, a{" "}
          {age}-year-old passionate{" "}
          <span className="text-primary font-medium">
            Full-Stack Web Developer
          </span>
          . Passionate about crafting dynamic, responsive, and user-centric web
          apps. Always learning, always building — one project at a time.
          <br />
          <br />
          <span className="font-normal">
            Beyond coding, I enjoy editing and refining content that tells
            stories and connects ideas beautifully. I'm constantly exploring new
            technologies and improving my skills to build impactful projects
            that make a difference.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-foreground">
          Education Timeline
        </h3>
        <Timeline defaultValue={2}>
          {education.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=vertical]/timeline:ms-10"
            >
              <TimelineHeader>
                <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineDate className="text-sm">{item.date}</TimelineDate>
                <TimelineTitle className="text-base">{item.title}</TimelineTitle>
                <TimelineIndicator className="flex size-5 items-center justify-center group-data-completed/timeline-item:border-2 group-data-completed/timeline-item:bg-transparent group-data-completed/timeline-item:text-primary-foreground group-data-[orientation=vertical]/timeline:-left-7">
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent className="text-base">{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </section>
  );
}

export default About;