import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import nutriguide from "../assets/nutriguide.jpg";
import todo from "../assets/todo.jpg";
import weatherDashboard from "../assets/weather_dashboard.jpg";


const projects = [
  {
    id: 1,
    title: 'NutriGuide AI',
    description: 'An AI-powered nutrition assistant...',
    image: nutriguide,
    category: 'AI',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'AI APIs'],
    features: ['Calorie Tracking', 'Protein Tracking', 'Weather Recommendations'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard...',
    image: weatherDashboard,
    category: 'Frontend',
    stack: ['React', 'Weather API', 'Framer Motion', 'Tailwind CSS'],
    features: ['Real-time Data', 'Interactive UI', 'Location Services'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
  id: 5,
  title: 'To-Do List',
  description: 'A full-stack task management application that allows users to securely create, update, organize, and delete tasks with an intuitive and responsive user interface.',
  image:todo,
  category: 'Full Stack',
  stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  features: [
    'User Authentication',
    'CRUD Operations',
    'Task Completion Status',
    'Responsive Design',
    'REST API Integration'
  ],
  liveUrl: '#',
  githubUrl: '#',
}
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI'];

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work showcasing full stack development and AI integration.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-secondary/50 text-foreground/80 hover:bg-secondary hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-glass rounded-2xl overflow-hidden border border-white/5 group flex flex-col hover:border-primary/30 transition-colors"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col relative z-20 -mt-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-secondary/80 text-foreground/80 border border-white/5">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-primary">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      className="flex-1 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 py-2 rounded-lg bg-secondary/80 hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
