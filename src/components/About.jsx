import { motion } from "framer-motion";

const skills = [
  "Java",
  "JavaScript",
  "Kotlin",
  "React",
  "HTML5",
  "CSS3",
  "Mobile Development",
  "UI Development",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <p className="about-label">ABOUT</p>
          <h2 className="about-title">
            About <span className="highlight">Me</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about-text"
        >
          I am a Front-End and Mobile Application Developer with 4 years of
          experience building clean, responsive, and user-focused web and mobile
          applications. I turn complex ideas into intuitive digital experiences
          using modern technologies. I am actively seeking a full time opportunity
          where I can apply my technical skills, collaborate with experienced teams,
          and contribute to high-quality products.
        </motion.p>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-skills"
        >
          {skills.map((skill) => (
            <span key={skill} className="about-skill">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}