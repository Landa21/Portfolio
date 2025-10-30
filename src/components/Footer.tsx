import { motion } from 'motion/react';
import { Heart, Terminal } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Yolanda Petunia Ntuli
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-cyan-500 fill-cyan-500" />
            <span>by Yolanda Petunia Ntuli</span>
          </div>

          {/* Tech stack note */}
          <p className="text-slate-600 text-xs mt-4">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
