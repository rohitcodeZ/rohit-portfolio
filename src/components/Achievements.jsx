import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Github, Terminal, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 5, suffix: '+', icon: Code2, color: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.3)' },
  { label: 'GitHub Contributions', value: 50, suffix: '+', icon: Github, color: 'from-purple-500 to-pink-500', glow: 'rgba(168,85,247,0.3)' },
  { label: 'Technologies Learned', value: 20, suffix: '+', icon: Terminal, color: 'from-emerald-500 to-teal-500', glow: 'rgba(16,185,129,0.3)' },
  { label: 'Problems Solved', value: 30, suffix: '+', icon: Award, color: 'from-orange-500 to-red-500', glow: 'rgba(249,115,22,0.3)' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Achievements</span></h2>
          <p className="text-muted-foreground">Numbers that tell the story of my growth and dedication.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${stat.glow} 0%, transparent 70%)` }}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-4 rounded-xl mb-4 bg-gradient-to-br ${stat.color} bg-opacity-10 backdrop-blur-sm border border-white/20`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-foreground">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
