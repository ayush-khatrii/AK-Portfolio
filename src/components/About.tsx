"use client"
import { motion } from "motion/react"
import Link from "next/link"
import {
  FiExternalLink,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiCode,
} from "react-icons/fi"
import { Button } from "./ui/button"

// CURRENT DATES
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const currentDay = new Date().getDate()

// BIRTH DATES
const birthDay = 15
const birthMonth = 3
const birthYear = 2003

let age = currentYear - birthYear
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) age--

// INFO DATA
const infoData = [
  {
    icon: FiMail,
    label: "Email",
    value: "ayushkhatri.dev@gmail.com",
    href: "mailto:ayushkhatri.dev@gmail.com",
  },
  {
    icon: FiGlobe,
    label: "Website",
    value: "ayushkhatri.in",
    href: "https://ayushkhatri.in",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "India 🇮🇳",
  },
  {
    icon: FiCode,
    label: "Role",
    value: "Full-Stack Developer",
  },
]

const About = () => {
  return (
    <div className="pt-10 py-5">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className="text-xl md:text-3xl font-bold my-2 text-primary"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className="text-muted-foreground leading-relaxed text-base md:text-lg"
      >
        Hey there! I’m <span className="font-semibold text-foreground">Ayush Khatri</span>, a {age}-year-old passionate{" "}
        <span className="text-primary font-medium">Full-Stack Web Developer</span>.
        Passionate about crafting dynamic, responsive, and user-centric web apps. Always learning, always building — one project at a time.
        <br /><br />
        <span className="font-normal">
          Beyond coding, I enjoy editing and refining content that tells stories and connects ideas beautifully.
          I'm constantly exploring new technologies and improving my skills to build impactful projects that make a difference.
        </span>
        <Link
          href="/about"
          className="inline-flex items-center gap-1 mx-1 text-primary underline transition-all"

        >
          Know more about me <FiExternalLink className="text-primary" />
        </Link>
        <br /><br />
        <span className="flex gap-3 items-center">
          Check out my Resume here:
          <Button asChild size={"xs"}>
            <Link
              href="https://github.com/ayush-khatrii"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <FiExternalLink className="" />
            </Link>
          </Button>
        </span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {infoData.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-center gap-5 mt-5"
            >
              <Icon className="text-primary text-lg border rounded-xl bg-foreground/10 p-2.5 size-10" />
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default About
