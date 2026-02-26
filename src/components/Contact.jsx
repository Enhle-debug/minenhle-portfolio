import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="contact-label">CONTACT</p>

        <h2 className="contact-title">
          Let’s <span className="highlight">work together</span>
        </h2>

        <p className="contact-text">
          Have a project in mind? I’d love to hear about it.
          Drop me a message and let’s build something great.
        </p>

        {/* EMAIL BUTTON */}
        <a
          href="mailto:cossaminentle@gmail.com"
          className="contact-email"
        >
          <Mail size={18} />
          cossaminentle@gmail.com
        </a>

        {/* SOCIAL LINKS */}
        <div className="contact-socials">
          <a
            href="https://github.com/Enhle-debug"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={22}  />
          </a>

          <a
            href="https://www.linkedin.com/in/minenhle-cossa-089309371"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}