import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow glow-1" />
<div className="ambient-glow glow-2" />
      {/* GRID BACKGROUND */}
      <div className="hero-grid" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-content"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hero-eyebrow"
        >
          ICT Graduate · Front-End Developer · Mobile Programmer
        </motion.p>

        <h1 className="hero-title hero-italic">
          <span className="hero-gradient">WELCOME</span>
          <br />
          <span className="hero-lastname">Glad you're here!</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hero-description"
        >
          I'm Minenhle Amahle Cossa, a Front-End and Mobile Application Developer crafting clean,
          responsive, and user-focused digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hero-actions"
        >
          <a href="#projects" className="hero-btn primary">
            View Work
          </a>
          <a href="#contact" className="hero-btn secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hero-scroll"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}