import React from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Github, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/petunia-yolanda-ntuli/",
      description: "Connect professionally",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/Landa21",
      description: "View my projects",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:yolandapetunia8@gmail.com",
      description: "Send a message",
      gradient: "from-cyan-500 to-cyan-600",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "South Africa",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "067 945 977",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yolandapetunia8@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_50%)]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Feel free to reach out through any of these channels!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl h-full">
              <h3 className="text-3xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl h-full">
              <h3 className="text-3xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="relative group bg-slate-900/50 backdrop-blur-md border border-slate-700 rounded-xl p-5 flex items-center gap-4 overflow-hidden transition-all duration-300 hover:border-cyan-500/50"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className={`relative flex-shrink-0 w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {contact.icon}
                    </div>

                    <div className="relative flex-1">
                      <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                        {contact.name}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {contact.description}
                      </p>
                    </div>

                    <motion.div
                      className="relative text-slate-400 group-hover:text-cyan-400 transition-colors duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
