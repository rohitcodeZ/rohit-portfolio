import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    short: "B.Tech CSE",
    field: "Computer Science & Engineering",
    institute: "I.K. Gujral Punjab Technical University",
    duration: "2022 – 2026",
    location: "Jalandhar, Punjab",
    score: "CGPA: 8.0 / 10",
    description:
      "Bachelor of Technology in Computer Science and Engineering graduate with a strong foundation in software development, data structures and algorithms, database management, operating systems, networking, and full-stack web development.",
    subjects: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOPS Concept",
      "React",
      "MERN Stack",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    short: "Class XII",
    field: "Science Stream (BSEB)",
    institute: "S.M.R.C.K College",
    duration: "2020 – 2022",
    location: "Samastipur, Bihar",
    score: "72%",
    description:
      "Completed Higher Secondary Education in the Science stream with a focus on Physics, Chemistry, Mathematics.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Hindi",
      "English",
    ],
  },
  {
    id: 3,
    degree: "Secondary Education",
    short: "Class X",
    field: "CBSE",
    institute: "Holy Mission School",
    duration: "2020",
    location: "Darbhanga, Bihar",
    score: "65%",
    description:
      "Completed secondary education under the CBSE curriculum while building a strong academic foundation in mathematics, science.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>

          <p className="text-muted-foreground">
            Academic background and qualifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-glass rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl"></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                      {edu.short}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">
                    {edu.degree}
                  </h3>

                  <h4 className="text-lg text-primary font-semibold mt-1">
                    {edu.field}
                  </h4>

                  <p className="text-lg font-medium mt-2">
                    {edu.institute}
                  </p>

                  <p className="text-green-400 font-semibold mt-1">
                    {edu.score}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mt-4 mb-5">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-white/5"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}