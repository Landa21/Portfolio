import { motion } from 'motion/react';
import { Terminal, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Software Developer';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/20 backdrop-blur-sm mb-6"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm">developer@portfolio:~$</span>
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Yolanda Petunia Ntuli
            </span>
          </motion.h1>

          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Code2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl md:text-4xl text-slate-300">
              {text}
              <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Building clean, innovative solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 text-white">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 rounded-lg backdrop-blur-sm transition-all hover:border-cyan-500/60 hover:bg-slate-800/80"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
