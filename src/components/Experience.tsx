"use client"

import React from "react"
import { motion } from "motion/react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { FiCalendar, FiMapPin } from "react-icons/fi"
import { Badge } from "./ui/badge"
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { work } from "@/constants"



const Experience = () => {
  return (
    <div className="w-full py-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-3xl font-bold my-2 text-primary"
      >
        Work Experience
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <Accordion type="multiple" className="w-full grid grid-cols-1">
          {work.map((item, idx) => (
            <AccordionItem
              key={`${item.title}-${idx}`}
              value={`item-${idx}`}
              className="  last:border-none"
            >
              <AccordionTrigger className="group cursor-pointer flex items-center justify-between hover:no-underline transition-all">
                <div className="flex items-center gap-4 text-left">
                  {item.icon && <item.icon className="text-primary text-lg border rounded-xl bg-foreground/10 p-2.5 size-10 transition-all group-hover:scale-105 group-hover:bg-primary/10" />}
                  <div>
                    <h2 className="font-semibold text-foreground text-base md:text-lg">
                      {item.position}
                    </h2>
                    <p className="text-sm md:text-base text-foreground/70">{item.title}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="font-normal text-muted-foreground" />
                    <span className="font-normal text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="font-normal text-muted-foreground" />
                    <span className="font-normal text-muted-foreground">
                      {item.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-foreground/80 text-base md:text-lg leading-relaxed">
                  {item.content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <TbArrowBadgeRightFilled className="text-primary mt-1" />
                      <span className="flex-1 font-normal">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="font-medium text-foreground">Tech Stack/Tools:</span>{" "}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {
                      item.techStack.map((tech, i) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.2 }}
                        >
                          <Badge variant="secondary" className="text-sm cursor-pointer border text-foreground/85">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))
                    }
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

export default Experience
