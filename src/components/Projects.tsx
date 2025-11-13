import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AudiImage from '../assets/audi.png';
import melulaImage from '../assets/melula.png';
import recipeImage from '../assets/recipe.png';

const projects = [
  {
    title: 'Clinic File Management System',
    description:
      'A secure and efficient web platform for managing patient files, staff access, and clinic operations.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1080&fit=crop&auto=format&q=80',
    tags: ['Java', 'MySQL'],
    github: 'https://github.com/Landa21/Clinic-file-management-system',
    demo: 'https://github.com/Landa21/Clinic-file-management-system',
  },
  {
    title: 'Audi UI Landing Page',
    description:
      'A sleek and modern Audi A4 showcase landing page highlighting automotive design and elegance.',
    image: AudiImage,
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/Landa21/Audi-UI-Landing-page',
    demo: 'https://landa21.github.io/Audi-UI-Landing-page/#',
  },
  {
    title: 'E-commerce Platform (Melula)',
    description:
      'Melula is a modern eCommerce platform that provides a seamless online shopping experience with real-time inventory tracking and secure payment integration.',
    image: melulaImage,
    tags: ['React', 'Node.js', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Landa21/MyReactApp',
    demo: 'https://my-react-app-indol-two.vercel.app/',
  },
  {
    title: 'Recipe Finder (Dishcovery)',
    description:
      'A recipe search web app that helps users discover meals using available ingredients with real-time filtering and data from an API.',
    image: recipeImage,
    tags: ['React', 'Node.js', 'TailwindCSS', 'javascript'],
    github: 'https://github.com/Landa21/my-recipe-finder',
    demo: 'https://my-recipe-finder-rust.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl  mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and creativity in building web-based solutions.
          </p>
        </motion.div>

        {/* 🧩 Projects Grid - 2 Columns */}
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
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/20 transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-900/50 border border-cyan-500/20 rounded-full text-cyan-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm transition-all hover:border-cyan-500/60 hover:bg-slate-900/80"
                    >
                      <Github className="w-4 h-4" />
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
