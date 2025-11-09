import { motion } from 'motion/react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: 'Software Development Internship',
    role: 'Software Development Intern',
    period: '2024 - Present',
    description: 'Currently gaining hands-on experience in software development, working with modern technologies and contributing to real-world projects.',
    achievements: [
      'Learning and applying best practices in code development',
      'Collaborating with experienced developers on team projects',
      'Building responsive web applications using modern frameworks',
    ],
    icon: Briefcase,
  },
 
  
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 -translate-x-1.5 md:-translate-x-2 z-10" />

                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 group-hover:border-cyan-500/40 transition-colors">
                      {/* Company & Role */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl text-slate-100 mb-1">
                            {exp.role}
                          </h3>
                          <div className="text-cyan-400">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-slate-400 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
