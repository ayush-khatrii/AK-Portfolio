import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";

const socialLinks = [
 {
  icon: FaGithub,
  link: "https://github.com/ayush-khatrii.com",
  label: "Github",
  isLeftHovered: true,
 },
 {
  icon: FaLinkedin,
  link: "https://linkedin.com/in/ayush-khatrii",
  label: "LinkedIn",
  isLeftHovered: false,
 },
 {
  icon: FaXTwitter,
  link: "https://twitter.com/ayush-khatrii",
  label: "X(Twitter)",
  isLeftHovered: true,
 },
 {
  icon: FaInstagram,
  link: "https://instagram.com/ayush-khatrii",
  label: "Instagram",
  isLeftHovered: false,
 },
];
const Socials = () => {
 return (
  <div className="">
   <div className="flex justify-center items-center flex-col">
    <div className="flex my-5 items-center gap-5">
     {socialLinks.map((social, index) => (
      <TooltipProvider key={index} delayDuration={100}>
       <Tooltip>
        <TooltipTrigger asChild>
         <a
          href={social.link}
          target="_blank"
          className={`hover:-translate-y-2 ${social.isLeftHovered ? "hover:-rotate-12" : "hover:rotate-12"} hover:scale-150 transition-transform hover:text-primary ease-out duration-150`}
         >
          <social.icon size="20" />
         </a>
        </TooltipTrigger>
        <TooltipContent>
         <p>{social.label}</p>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     ))}
    </div>
    <div className="flex items-center gap-3">
     <Link href="https://ayushkhatri.hashnode.dev" target="_blank">
      <Button
       variant="outline"
       size="sm"
       className="hover:scale-110 hover:px-3 cursor-pointer transition-transform duration-200"
      >
       Blog
      </Button>
     </Link>
     <Link href="/resume-ak.pdf" target="_blank">
      <Button
       variant="default"
       size="sm"
       className="hover:scale-110 hover:px-3 cursor-pointer transition-transform duration-200"
      >
       Resume
      </Button>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Socials;
