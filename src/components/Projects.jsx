import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Digital ATS Resume Builder",
    description:
      "A professional resume builder that generates ATS-compliant PDFs. Includes dynamic sections, multi-page export, and live preview.",
    tags: ["HTML5", "CSS3", "JavaScript", "PDF Generation"],
    liveUrl: "https://enhle-debug.github.io/digital-resume-builder/",
    githubUrl: "https://github.com/enhle-debug/digital-resume-builder",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <p className="projects-label">WORK</p>
          <h2 className="projects-title">Selected Projects</h2>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="project-card"
            >
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              {/* TAGS */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}