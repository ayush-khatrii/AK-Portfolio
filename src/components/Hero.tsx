"use client";

import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { BorderBeam } from "./magicui/border-beam";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { IoSparklesSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const socials = [
 {
  name: "GitHub",
  icon: <FaGithub className="w-6 h-6" />,
  url: "https://github.com/ayush-khatrii",
 },
 {
  name: "LinkedIn",
  icon: <FaLinkedin className="w-6 h-6" />,
  url: "https://www.linkedin.com/in/ayushkhatrii",
 },
 {
  name: "Twitter",
  icon: <FaXTwitter className="w-6 h-6" />,
  url: "https://x.com/khatri_ayush15",
 },
 {
  name: "Instagram",
  icon: <FaInstagram className="w-6 h-6" />,
  url: "https://www.instagram.com/ayush.khatrii",
 },
];

const Hero = () => {
 return (
  <>
   <div className="">
    <div
     className="absolute inset-0 z-0 opacity-20"
     style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
     }}
    />
    <section className="relative py-20 overflow-hidden">
     <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
      <div className="flex flex-col justify-center text-center items-center gap-5 md:gap-14">
       <Dialog>
        <DialogTrigger asChild className="cursor-pointer group">
         <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 border border-primary/30 rounded-full overflow-hidden flex items-center justify-center bg-background hover:shadow-primary/30 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
         >
          <img
           src="/profile-pic.png"
           alt="Profile"
           className="w-full h-full object-cover object-top scale-150 absolute top-10 left-1 inset-0 rotate-3 translate-y-1"
          />
          <BorderBeam duration={8} size={100} />
         </motion.div>
        </DialogTrigger>
        <DialogContent className="z-[200]">
         <DialogHeader>
          <DialogTitle>Profile Picture</DialogTitle>
          <DialogDescription>Full-size profile image</DialogDescription>
         </DialogHeader>
         <img
          src="/profile-pic.png"
          alt="Profile Full"
          className="w-full h-full object-cover rounded-lg"
         />
        </DialogContent>
       </Dialog>
       <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
       >
        <Badge
         variant="outline"
         className="w-fit rounded-full px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 flex items-center gap-1"
        >
         <IoSparklesSharp size={12} className="text-primary animate-pulse" />
         <span>Available for new projects</span>
        </Badge>
        <div>
         <h1 className="text-4xl md:text-6xl font-semibold tracking-normal text-foreground">
          Ayush Khatri
         </h1>
         <p className="text-base md:text-lg text-muted-foreground font-medium">
          Full Stack Developer
         </p>
        </div>
        <div className="flex gap-8 mt-4">
         {socials.map((social, idx) => (
          <motion.a
           key={idx}
           href={social.url}
           target="_blank"
           rel="noopener noreferrer"
           className="text-foreground/70 hover:text-primary"
           whileHover={{ scale: 1.8, rotate: -10 }}
           whileTap={{ scale: 1.5, rotate: -10 }}
           transition={{
            type: "keyframes",
            stiffness: 250,
            damping: 12,
            mass: 0.5,
           }}
           title={social.name}
          >
           {social.icon}
          </motion.a>
         ))}
        </div>
       </motion.div>
      </div>
     </div>
    </section>
   </div>
  </>
 );
};

export default Hero;
