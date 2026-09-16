import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import profileImage from '../assets/merapic.png';

const roles = [
  'Full Stack Web Developer',
  'React Developer',
  'AI Enthusiast',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText((prev) =>
            currentRole.substring(0, prev.length + 1)
          );

          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText((prev) =>
            currentRole.substring(0, prev.length - 1)
          );

          if (displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* =========================
              TEXT CONTENT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
              Hi, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
              <span className="text-gradient">
                Rohit Kumar
              </span>
            </h1>

            {/* Typing Role */}
            <div className="h-12 md:h-16 mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-4xl font-semibold text-foreground/90">
                {displayText}

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  className="inline-block ml-1 w-1 h-8 md:h-10 bg-primary translate-y-1"
                />
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Building scalable, high-performance web applications with modern technologies and Artificial Intelligence..
            </p>

            {/* =========================
                CALL TO ACTION BUTTONS
            ========================= */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">

              {/* Download Resume */}
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />

                Download Resume
              </button>

              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary/50 text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-all group"
              >
                View Projects

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-foreground/80 font-medium hover:text-primary transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* =========================
                SOCIAL LINKS
            ========================= */}
            <div className="flex items-center justify-center lg:justify-start gap-6">

              {/* GitHub */}
              <motion.a
                href="https://github.com/rohitcodeZ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/rohit-kumar-732429251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              {/* Email */}
              <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitk93339@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Email"
  title="Email"
>
  <Mail className="w-5 h-5" />
</motion.a>

            </div>
          </motion.div>

          {/* =========================
              PROFILE VISUAL
          ========================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-cyan-500 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full border border-white/10 bg-background/50 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Rohit Kumar"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Cyan Shape */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-cyan-500/20 backdrop-blur border border-cyan-500/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating Purple Shape */}
              <motion.div
                className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur border border-purple-500/30"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}