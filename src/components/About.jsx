import { motion } from 'framer-motion';
import aboutMeImage from '../assets/about me.png';

const chips = [
  'B.TECH CSE',
  'Full Stack Dev',
  'AI Enthusiast',
  'Problem Solver',
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="bg-glass rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">

            {/* ================= LEFT IMAGE ================= */}
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
                className="relative w-64 h-64 md:w-full md:h-80 flex items-center justify-center"
              >
                {/* Soft blue glow */}
                <div className="absolute inset-8 bg-primary/20 blur-3xl rounded-full" />

                {/* Developer image */}
                <img
                  src={aboutMeImage}
                  alt="Developer workspace"
                  className="
                    relative
                    w-full
                    h-full
                    object-contain
                    drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]
                    transition-all
                    duration-500
                    group-hover:drop-shadow-[0_0_45px_rgba(59,130,246,0.55)]
                  "
                />
              </motion.div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="w-full md:w-2/3">

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full" />
                About Me
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Aspiring MERN Stack Developer with practical experience in
                building web applications using MongoDB, Express.js, React.js,
                and Node.js. Experienced in developing responsive user
                interfaces, integrating RESTful APIs, managing databases, and
                implementing authentication systems. Completed internships in
                Full Stack and MERN Stack Development, contributing to
                real-world projects and collaborative software development
                workflows. Co-authored a research paper on SVM and CNN-based
                Handwritten Digit Classification. Passionate about developing
                scalable, efficient, and user-focused software solutions.
              </p>

              {/* ================= CHIPS ================= */}
              <div className="flex flex-wrap gap-3">
                {chips.map((chip, idx) => (
                  <motion.div
                    key={chip}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * idx,
                      duration: 0.3,
                    }}
                    whileHover={{ y: -3 }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-primary/20
                      bg-primary/5
                      text-primary
                      text-sm
                      font-medium
                      hover:bg-primary/20
                      hover:border-primary/40
                      transition-all
                      duration-300
                    "
                  >
                    {chip}
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}