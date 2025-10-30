import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-purple-400' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-cyan-400' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'yolandapetunia8@gmail.com', href: 'mailto:yolandapetunia8@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0679045977', href: 'tel:0679045977' },
  { icon: MapPin, label: 'Location', value: 'Johannesburg, South Africa', href: null },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-slate-100">
                Let's Connect
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-200 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-200">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-slate-300 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-slate-400 transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <form
                onSubmit={handleSubmit}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
