import React from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Github } from "lucide-react";

export function ContactSection() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/your-profile/",
      description: "Connect with me professionally",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/your-username",
      description: "Check out my projects",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:your.email@example.com",
      description: "Send me a message",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,182,212,0.03),transparent)]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.03),transparent)]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Let’s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 mb-2 rounded-full" />
          <p className="text-slate-400 text-lg">
            I’m always excited to collaborate. Reach out to me through any of
            these platforms.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative group bg-slate-800/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg text-white font-semibold transition-all hover:shadow-cyan-500/40"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                {contact.icon}
              </div>
              <span className="text-lg group-hover:text-cyan-400 transition-colors">
                {contact.name}
              </span>
              <p className="text-slate-400 text-sm text-center">
                {contact.description}
              </p>
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
