import { motion } from 'motion/react';
import { Code, Coffee, Zap, Cpu } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '5+' },
  { icon: Zap, label: 'Technologies', value: '7' },
  { icon: Cpu, label: 'Years Experience', value: '1' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Hoverable code card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 15 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 group-hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-slate-500">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-400">developer</span> ={' '}
                  <span className="text-yellow-400">{'{'}</span>
                </div>
                <div className="text-slate-500 pl-4">
                  name:{' '}
                  <span className="text-green-400 group-hover:text-green-300 transition-colors">
                    'Yolanda Petunia Ntuli'
                  </span>,
                </div>
                <div className="text-slate-500 pl-4">
                  role:{' '}
                  <span className="text-green-400 group-hover:text-green-300 transition-colors">
                    'Full Stack Developer'
                  </span>,
                </div>
                <div className="text-slate-500 pl-4">
                  location:{' '}
                  <span className="text-green-400 group-hover:text-green-300 transition-colors">
                    'Johannesburg, South Africa'
                  </span>,
                </div>
                <div className="text-slate-500 pl-4">
                  passion:{' '}
                  <span className="text-green-400 group-hover:text-green-300 transition-colors">
                    'Building great products'
                  </span>
                </div>
                <div className="text-slate-500">
                  <span className="text-yellow-400">{'}'}</span>;
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate developer who loves turning ideas into reality through code.
              With a strong foundation in both frontend and backend technologies, I create
              seamless digital experiences that users love.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center group-hover:border-cyan-500/40 transition-colors">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
