"use client";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TextPressure from "./TextExpand";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
    url: "https://github.com/ayush-khatrii",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/ayushkhatrii",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="w-5 h-5" />,
    url: "https://x.com/khatri_ayush15",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    url: "https://www.instagram.com/ayush.khatrii",
  },
];

const Footer = () => {
  return (
    <div className="relative h-[300px] w-full">
      <footer className="relative w-full border-border/40  pb-10">
        <div className="flex flex-col items-center justify-center px-6 gap-6 text-center relative z-10">
          <div className="flex items-center flex-wrap justify-center gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-background text-foreground/70 transition-all duration-300"
                whileHover={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-accent-foreground)",
                  borderColor: "var(--color-accent)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
      <div style={{ position: "relative", height: "", opacity: .6 }}>
        <TextPressure
          text="Ayush Khatri"
          flex
          alpha={false}
          stroke
          width
          weight
          textColor="#ececec"
          strokeColor="#000000"
          className="opacity-50"
        />
      </div>
      <motion.p
        className="text-sm text-center pb-10 text-muted-foreground/70 mt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        © {new Date().getFullYear()} Crafted with ❤️ and curiosity.
      </motion.p>
    </div>
  );
};

export default Footer;
