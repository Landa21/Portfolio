import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Movie streaming Website',
    mediaType: 'video',
    src: '/videos/popcornmovies.mp4',
    github: 'https://github.com/Landa21/Movie-streaming-Website',
    demo: 'https://popcornmovies-ten.vercel.app/',
  },
  {
    title: 'Audi UI Landing Page',
    mediaType: 'video',
    src: '/videos/audi.mp4',
    github: 'https://github.com/Landa21/Audi-UI-Landing-page',
    demo: 'https://landa21.github.io/Audi-UI-Landing-page/#',
  },
  {
    title: 'E-commerce Platform (Melula)',
    mediaType: 'video',
    src: '/videos/melula.mp4',
    github: 'https://github.com/Landa21/MyReactApp',
    demo: 'https://my-react-app-indol-two.vercel.app/',
  },
  {
    title: 'Recipe Finder (Dishcovery)',
    mediaType: 'video',
    src: '/videos/recipefinder.mp4',
    github: 'https://github.com/Landa21/my-recipe-finder',
    demo: 'https://my-recipe-finder-rust.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my technical skills and creativity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/20 transition-all duration-500">

                {/* Media */}
                <div className="relative aspect-video overflow-hidden">
                  {project.mediaType === 'video' ? (
                    <video
                      src={project.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <ImageWithFallback
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold mb-6 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:scale-105 transition"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium hover:border-cyan-500/60 transition"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
