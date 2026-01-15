import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/your-profile/',
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:your.email@example.com',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,182,212,0.05),transparent)]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.05),transparent)]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 mb-2 rounded-full" />
          <p className="text-slate-400 text-lg">
            You can reach me through these platforms.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              className="relative group bg-slate-800/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-lg text-white font-semibold transition-all hover:shadow-cyan-500/40"
            >
              {contact.icon}
              <span className="text-lg group-hover:text-cyan-400 transition-colors">{contact.name}</span>

              {/* Hover gradjient overlay */}
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
