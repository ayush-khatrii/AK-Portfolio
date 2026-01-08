import { FiBriefcase } from "react-icons/fi";
import { IconType } from "react-icons";
import { BiMoviePlay } from "react-icons/bi";

const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "C/C++"],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "Next.js",
      "React.js",
      "Zustand",
      "Hono.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Zod",
      "React Query",
      "ShadCN UI",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    category: "Dev & Ops Tools",
    items: ["VS Code", "Git/GitHub", "Postman", "AWS EC2"],
  },
];

type WorkItem = {
  title: string;
  position: string;
  date: string;
  location: string;
  content: string[];
  techStack: string[];
  icon?: IconType;
};

const work: WorkItem[] = [
  {
    title: "Portlinks India",
    position: "Fullstack Developer",
    date: "Nov 2025 – Present",
    content: [
      "Developed from scratch a highly secure dashboard with advanced IP based security for Portlinks India.",
    ],
    location: "Gujarat, India",
    techStack: ["Next.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    icon: FiBriefcase,
  },
  {
    title: "Self-Employed",
    position: "Freelance Web Developer",
    date: "June 2024 – Present",
    location: "Gujarat, India",
    content: [
      "Developed 5+ responsive websites using React, Next.js, and Tailwind CSS.",
      "Built SEO-friendly, performant architectures scoring 100/100 in Lighthouse (SEO & Best Practices).",
      "Integrated Razorpay for secure online booking and payments.",
      "Collaborated directly with 5+ clients to define project goals and deliver tailored web solutions.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Razorpay",
      "Vercel",
      "Git",
    ],
    icon: FiBriefcase,
  },
  {
    title: "Freelance Projects",
    position: "Video Editor & Content Designer",
    date: "Dec 2023 – Dec 2024",
    location: "Remote, India",
    content: [
      "Edited 50+ videos for multiple clients, including YouTube long-form content, Shorts, and Reels.",
      "Designed around 20+ custom thumbnails for creators to boost click rates and improve their overall channel look.",
      "Handled everything from rough cuts to final exports while communicating directly with clients to match their creative direction and meet deadlines.",
    ],
    techStack: [
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop",
      "Canva",
      "DaVinci Resolve",
    ],
    icon: BiMoviePlay,
  },
];

const project = [
  {
    title: "Issue Board",
    desc: "Engineered a comprehensive full-stack issue tracking system with GitHub OAuth",
    githubLink: "https://github.com/ayush-khatrii/issue-hub",
    liveLink: "https://issueboard.vercel.app",
    image: "https://placehold.co/1280x720/1a1a1a/ffffff?text=issue-board",
    techStack: [
      "React.js",
      "Nexts.js",
      "next-auth",
      "TailwindCSS",
      "Prisma",
      "Postgresql",
    ],
  },
  {
    title: "Cab Booking Web App, Shivay Safar",
    desc: "Developed a cab booking platform with dynamic pricing and vehicle filtering based on user-selected routes. Improved user experience through smart logic and clean, responsive UI.",
    githubLink: "https://github.com/ayush-khatrii/discussIt",
    liveLink: "https://shivaysafar.com",
    image: "https://placehold.co/1280x720/1a1a1a/ffffff?text=Cab-Booking",
    techStack: ["React.js", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Discuss-It Chat App",
    desc: "Discuss-It is a chat app that lets users message in real time, manage friend requests, share files, and create groups. It's designed to make communication easy and interactive. Stay connected and collaborate with ease!",
    githubLink: "https://github.com/ayush-khatrii/discussIt",
    liveLink: "https://discussitt.vercel.app",
    image: "https://placehold.co/1280x720/1a1a1a/ffffff?text=Chat-App",
    techStack: [
      "React.js",
      "Express.js",
      "Javascript",
      "MongoDB",
      "Node.js",
      "Socket.io",
      "TailwindCSS",
    ],
  },
  {
    title: "Night Node",
    desc: "NightNode - Color Theme for VS Code",
    githubLink: "https://github.com/ayush-khatrii/night-node",
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=AyushKhatri.nightnode",
    image:
      "https://raw.githubusercontent.com/ayush-khatrii/night-node/refs/heads/main/images/new-nn-logo.png",
    techStack: ["JSON"],
  },
  {
    title: "Hotel Booking App",
    desc: "Developed a fullstack booking website allowing users to create accounts, search and book rooms, and make payments using the Razorpay API.",
    githubLink: "https://github.com/ayush-khatrii/Hotel-project-FinalYear",
    liveLink: "",
    image: "https://placehold.co/1280x720/1a1a1a/ffffff?text=Hotel Booking",
    techStack: [
      "React.js",
      "Express.js",
      "Javascript",
      "MongoDB",
      "Node.js",
      "TailwindCSS",
      "RazorPay",
    ],
  },
  {
    title: "A.I Saas Landing Page",
    desc: "A sleek and responsive landing page built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and a modern UI",
    githubLink: "https://github.com/ayush-khatrii/saas-landing-page",
    liveLink: "https://insightx-saas.vercel.app",
    image: "https://placehold.co/1280x720/1a1a1a/ffffff?text=sample",
    techStack: ["Next.js", "TypeScript"],
  },
];

export { skills, work, project };
