import { FiBriefcase } from "react-icons/fi";
import { IconType } from "react-icons";
import { BiMoviePlay } from "react-icons/bi";

export const aboutContent = {
  greeting: "Hey! I’m",
  name: "Ayush Khatri",
  role: "Full-Stack Web Developer",
  introduction:
    "I like building web apps, experimenting with new tech, and figuring out better ways to make things work. Most of my time goes into working on projects, fixing what breaks, improving what feels off, and learning something new along the way.",
  interests:
    "I also enjoy editing content and videos, especially the small details that make the final result feel cleaner, sharper, and more put together.",
};

export const aboutInfo = [
  { icon: "mail", label: "Email", value: "ayushkhatri.dev@gmail.com", href: "mailto:ayushkhatri.dev@gmail.com" },
  { icon: "website", label: "Website", value: "ayushkhatri.in", href: "https://ayushkhatri.in" },
  { icon: "location", label: "Location", value: "India 🇮🇳" },
  { icon: "role", label: "Role", value: "Full-Stack Developer" },
];

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
  workId?: string;
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
    workId: "portlinks-india",
    title: "Portlinks India",
    position: "Fullstack Developer",
    date: "Nov 2025 – Present",
    location: "Gujarat, India",
    content: [
      "Architected an end-to-end Project Management System (PMS) that automated lead-to-invoice workflows, cutting internal administrative turnaround time by an estimated 40%.",
      "Engineered an operational Admin Dashboard from scratch, reducing unauthorized access vulnerabilities to zero via custom OAuth RBAC, reCAPTCHA v3, and multi-attempt IP blocking.",
      "Built a high-performance messaging engine using Redis and BullMQ, offloading high-volume bulk email operations to process thousands of weekly dispatches with 99.9% queue uptime.",
      "Developed a low-latency IoT pipeline via Python (PySerial, Socket.IO) and Node.js, streaming real-time weigh-scale telemetry and executing instant local invoice printing in under 200ms.",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "Python",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "MongoDB",
      "Flask",
      "Tailwind CSS",
    ],
    icon: FiBriefcase,
  },
  {
    workId: "self-employed",
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
    workId: "freelance-video-editor",
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
    "title": "LessonMap",
    "desc": "A full-stack AI-powered course creation platform that helps educators turn ideas into structured, shareable learning experiences with drag-and-drop curriculum building, resource management, learner progress tracking, and subscription-based premium features.",
    "githubLink": "https://github.com/ayush-khatrii/Lesson-Map",
    "liveLink": "https://lessonmap.vercel.app",
    "image": "https://raw.githubusercontent.com/ayush-khatrii/Lesson-Map/main/docs/screenshots/home.png",
    "techStack": [
      "Next.js",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "TailwindCSS",
      "DeepSeek AI",
      "Cloudflare R2",
      "Dodo Payments",
      "dnd-kit"
    ]
  },
  {
    "title": "QChat — Real-Time Room-Based Chat",
    "desc": "Built a real-time room-based chat platform with custom room codes, instant messaging, typing indicators, online presence, paginated message history, Google OAuth, and background push notifications via FireBase (FCM)",
    "githubLink": "https://github.com/ayush-khatrii/q-chat",
    "liveLink": "",
    "image": "https://placehold.co/1280x720/1a1a1a/ffffff?text=QChat",
    "techStack": [
      "Next.js",
      "React.js",
      "TypeScript",
      "Ably",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "Firebase Cloud Messaging",
      "TailwindCSS"
    ]
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
];

const galleryImages = [
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-1.jpeg", title: "Me 1", alt: "Me 1 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-2.jpeg", title: "Me 2", alt: "Me 2 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-3.jpeg", title: "Me 3", alt: "Me 3 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-4.jpeg", title: "Me 4", alt: "Me 4 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-5.jpeg", title: "Me 5", alt: "Me 5 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-6.jpeg", title: "Me 6", alt: "Me 6 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-7.jpeg", title: "Me 7", alt: "Me 7 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-8.jpeg", title: "Me 8", alt: "Me 8 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-9.jpeg", title: "Me 9", alt: "Me 9 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-10.jpeg", title: "Me 10", alt: "Me 10 — Ayush Khatri" },
  { src: "https://pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev/1-11.jpeg", title: "Me 11", alt: "Me 11 — Ayush Khatri" },
];

export { skills, work, project, galleryImages };
