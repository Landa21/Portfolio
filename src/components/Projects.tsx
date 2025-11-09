import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AudiImage from '../assets/audi.png';
import melulaImage from '../assets/melula.png';
import recipeImage from '../assets/recipe.png';

const projects = [
 {
  title: 'Clinic File Management System',
  description: 'A secure and efficient web platform for managing patient files, staff access, and clinic operations.',
  image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1080&fit=crop&auto=format&q=80',
  tags: ['React', 'MySQL', 'Tailwind'],
  github: 'https://github.com/Landa21/Clinic-file-management-system',
  Demo:'https://github.com/Landa21/Clinic-file-management-system',
  featured: true,
},

  {
    title: 'Audi UI Landing Page',
    description: 'A sleek and modern Audi A4 showcase image used to highlight automotive design, performance, and elegance in web or app projects.',
    image:AudiImage,
    tags: ['Html', 'Css'],
    github: 'https://github.com/Landa21/Audi-UI-Landing-page',
    demo: 'https://landa21.github.io/Audi-UI-Landing-page/#',
    featured: true,
  },
  {
    title: 'E-commerce Platform(Landing Page)',
    description: 'Melula is a modern eCommerce platform designed to provide a seamless online shopping experience. It features a user-friendly interface, robust product management, secure payment integration, and real-time inventory tracking to help businesses efficiently sell products online.',
    image:melulaImage,
    tags: ['React', 'Node.js', 'Javascript', 'TailwindCSS'],
    github: 'https://github.com/Landa21/MyReactApp',
    demo: 'https://my-react-app-indol-two.vercel.app/',
    featured: false,
  },
  {
    title: 'Recipe Finder(Dishcovery)',
    description: 'Real-time analytics dashboard with customizable widgets and data visualization tools.',
    image: recipeImage,
    tags: ['React', 'node.js', 'tailwindCSS'],
    github: 'https://github.com/Landa21/my-recipe-finder',
    demo: 'https://my-recipe-finder-rust.vercel.app/',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                )}

                <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-900/50 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-400 transition-all hover:border-cyan-500/60 hover:bg-slate-900/80"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
       
      </div>
    </section>
  );
}
