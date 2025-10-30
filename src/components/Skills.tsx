import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-600',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: 'from-blue-500 to-purple-600',
    skills: ['Node.js', 'MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-purple-500 to-pink-600',
    skills: ['Git', 'AWS'],
  },
];

const tools = [
  'VS Code',
  'Figma',
  'Postman',
  'GitHub',
  'Vercel',
  'Firebase',
  'SQL',
  'Vite',
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                <h3 className={`text-xl mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                      className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-slate-300 text-sm hover:border-cyan-500/60 hover:bg-slate-800/80 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-center mb-8 text-slate-300">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-cyan-400 cursor-default hover:border-cyan-500/60 hover:bg-slate-800/80 transition-all"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
