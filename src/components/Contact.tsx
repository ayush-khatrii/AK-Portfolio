"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Copy, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";

const EMAIL_ADDRESS = "ayushkhatri.dev@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    toast.success("Email address copied!");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }
      toast.success(data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    {
      id: "name",
      label: "Name",
      node: <Input id="name" name="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="h-11 border-border/40 bg-muted/20 font-mono text-sm focus-visible:border-primary/40" />,
    },
    {
      id: "email",
      label: "Email",
      node: <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11 border-border/40 bg-muted/20 font-mono text-sm focus-visible:border-primary/40" />,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 overflow-x-hidden py-12 sm:py-16">
      <SectionHeading index="07" label="Open Channel" title="Get in Touch" />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-t border-border/40">
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={field.id} className="grid gap-2 border-b border-border/40 py-4 sm:grid-cols-[3rem_8rem_1fr] sm:items-center sm:gap-4">
              <span className="hidden font-mono text-[10px] text-muted-foreground/50 sm:block">0{index + 1}</span>
              <label htmlFor={field.id} className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{field.label}</label>
              {field.node}
            </div>
          ))}
          <div className="grid gap-2 border-b border-border/40 py-4 sm:grid-cols-[3rem_8rem_1fr] sm:items-start sm:gap-4">
            <span className="hidden pt-3 font-mono text-[10px] text-muted-foreground/50 sm:block">03</span>
            <label htmlFor="message" className="pt-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pt-3">Message</label>
            <Textarea id="message" name="message" placeholder="Your message here..." value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="min-h-36 resize-y border-border/40 bg-muted/20 font-mono text-sm focus-visible:border-primary/40" />
          </div>
          <div className="flex justify-end py-4">
            <Button type="submit" className="h-11 w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="animate-spin" />Sending...</> : <><Send />Send Message</>}
            </Button>
          </div>
        </form>
        <div className="flex flex-col gap-3 border-y border-border/40 bg-muted/20 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-sm text-muted-foreground">Or reach me directly at: <span className="break-all font-mono text-foreground">{EMAIL_ADDRESS}</span></p>
          <Button variant="outline" size="sm" onClick={copyEmailToClipboard} className="h-11 border-border/40 sm:h-9"><Copy />Copy</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
