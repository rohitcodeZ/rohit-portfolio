import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript,
  SiHtml5, SiCss, SiExpress, SiMysql, SiCplusplus, SiPython,
  SiGit, SiGithub, SiPostman, SiFigma,
  SiOpenaigym, SiBootstrap
} from 'react-icons/si';
import { BrainCircuit, Code2, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 90 },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 80 },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 85 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 70 },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 90 },
      { name: 'VS Code', icon: Terminal, color: '#007ACC', level: 95 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 70 },
    ],
  },
  {
    title: 'AI',
    skills: [
      { name: 'OpenAI API', icon: SiOpenaigym, color: '#412991', level: 80 },
      { name: 'Gemini API', icon: BrainCircuit, color: '#8b5cf6', level: 80 },
      { name: 'Prompt Eng.', icon: BrainCircuit, color: '#06b6d4', level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary border border-white/5 group-hover:scale-110 transition-transform">
                          <skill.icon size={20} style={{ color: skill.color }} />
                        </div>
                        <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
