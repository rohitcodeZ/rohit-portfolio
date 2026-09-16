import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    duration: "January 2026 – June 2026",
    company: "Sharpner Tech Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    role: "Full Stack Development Intern",
    description:
      "Developed an AI-powered nutrition assistant using the MERN Stack with personalized diet planning, calorie tracking, meal logging, AI-based recipe generation, and food image analysis. Built responsive user interfaces, optimized MongoDB database operations, and managed version control using Git and GitHub.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 2,
    duration: "1 June 2024 – 15 July 2024",
    company: "Azure Skynet Solutions Pvt. Ltd.",
    location: "Gurgaon, Haryana",
    role: "Web Development Intern",
    description:
      "Completed a web development internship focused on building responsive and interactive web applications using HTML, CSS, and JavaScript while following modern UI/UX and development best practices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <p className="text-muted-foreground">
            My internships and professional journey in web development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start mb-16"
            >
              <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>

              <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right md:flex md:flex-col md:items-end">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-2">
                  {exp.duration}
                </span>

                <h3 className="text-2xl font-bold">{exp.company}</h3>

                <p className="text-muted-foreground">
                  {exp.location}
                </p>
              </div>

              <div className="pl-8 md:pl-12 md:w-1/2 mt-4 md:mt-0">
                <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-accent" />
                  {exp.role}
                </h4>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/50 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}