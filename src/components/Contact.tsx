"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Copy, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState, FormEvent } from "react";

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
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-10">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.09 }}
          className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="">Have a question or want to work together? Drop me a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label
                htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label htmlFor="email" className="block text-sm font-medium  mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <Button
                type="submit"
                className="font-bold w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          <div className="flex flex-col items-center text-center sm:flex-row justify-between gap-3 pt-4">
            <p className="text-sm text-muted-foreground">
              Or reach me directly at: <span className="text-foreground">{EMAIL_ADDRESS}</span>
            </p>
            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
              className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmailToClipboard}
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;