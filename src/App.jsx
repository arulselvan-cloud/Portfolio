
import { motion } from "motion/react";
import {
  GraduationCap,
  UserRound,
  Sparkles,
  Terminal,
  Globe,
  Layers,
  Database,
  ExternalLink,
  Brain,
  MapPinned,
  ScanEye,
  Languages,
  BriefcaseBusiness,
  Award,
  Mail,
  ArrowDown,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          arul<span className="accent">.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="glow glow-one" />
        <div className="glow glow-two" />

        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="status-dot" />
            COMPUTER SCIENCE STUDENT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Hello, I'm
            <br />
            <span className="gradient-text">Arulselvan.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Aspiring Software Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            BE Computer Science student passionate about
            building web applications, solving problems,
            and exploring new technologies.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              <Mail size={17} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span>CONNECT WITH ME</span>
            <div className="social-line" />
            <Code2 size={19} />
            <span>Developer Portfolio</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.div
            className="code-card"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="card-top">
              <div className="window-dots">
                <i /><i /><i />
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p><span className="purple">const</span> developer = {"{"}</p>
              <p className="indent">
                name: <span className="green">"Arulselvan"</span>,
              </p>
              <p className="indent">
                role: <span className="green">"Student"</span>,
              </p>
              <p className="indent">
                passion: <span className="green">"Building"</span>,
              </p>
              <p className="indent">
                learning: <span className="green">"Everyday"</span>
              </p>
              <p>{"}"}</p>
              <p className="code-comment">
                // Turning ideas into reality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={17} />
          SCROLL TO EXPLORE
        </motion.a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">GET TO KNOW ME</span>
          <h2>About <span className="gradient-text">Me.</span></h2>
          <p>A little introduction about who I am.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-icon">
              <UserRound size={25} />
            </div>

            <h3>Who I Am</h3>

            <p>
              I'm Arulselvan, a Computer Science and Engineering
              student at Sri Krishna College of Engineering
              and Technology.

              I'm interested in software development, web
              technologies and problem-solving. I enjoy learning
              new technologies and turning ideas into practical
              applications.
            </p>

            <div className="about-highlight">
              <Sparkles size={18} />
              <span>Always learning. Always building.</span>
            </div>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-icon">
              <GraduationCap size={25} />
            </div>

            <h3>Education</h3>

            <div className="education-item">
              <span className="education-dot" />

              <div>
                <h4>B.E. Computer Science and Engineering</h4>
                <p>Sri Krishna College of Engineering and Technology</p>
                <span className="education-year">2025 – 2029</span>
                <span className="education-status">Currently Pursuing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section" id="skills">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">MY TECH STACK</span>
          <h2>Technical <span className="gradient-text">Skills.</span></h2>
          <p>Technologies and tools I'm learning and working with.</p>
        </motion.div>

        <div className="skills-grid">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="skill-card-heading">
              <Terminal />
              <h3>Programming Languages</h3>
            </div>
            <div className="skill-tags">
              {["C", "C++", "Java", "Python"].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="skill-card-heading">
              <Globe />
              <h3>Frontend Development</h3>
            </div>
            <div className="skill-tags">
              {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="skill-card-heading">
              <Layers />
              <h3>Backend Development</h3>
            </div>
            <div className="skill-tags">
              {["Python", "Flask"].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="skill-card-heading">
              <Database />
              <h3>Tools & Technologies</h3>
            </div>
            <div className="skill-tags">
              {["Git", "GitHub", "VS Code"].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="status-dot" />
          Always exploring and learning new technologies.
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">WHAT I'VE BUILT</span>
          <h2>Featured <span className="gradient-text">Projects.</span></h2>
          <p>A collection of projects I've worked on and developed.</p>
        </motion.div>

        <div className="projects-grid">
          {/* PROJECT 1 */}
          <motion.article
            className="project-card featured-project"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-visual land-visual">
              <span className="project-number">01 / FEATURED</span>
              <MapPinned size={65} />
              <span className="visual-caption">
                AI · PREDICTIVE ANALYTICS
              </span>
            </div>

            <div className="project-info">
              <span className="project-category">MACHINE LEARNING</span>
              <h3>Land Acquisition Delay Predictor</h3>

              <p>
                An AI-powered predictive analytics platform
                that identifies land acquisition risks,
                explains delay factors and simulates
                mitigation strategies across statutory stages.
              </p>

              <div className="project-tags">
                {["Python", "FastAPI", "React", "XGBoost", "SHAP", "PostGIS"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/arulselvan-cloud/LAND_ACQUISITION_DELAY_PREDICTOR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> Source Code <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>

          {/* PROJECT 2 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="project-visual lingo-visual">
              <span className="project-number">02</span>
              <Languages size={65} />
              <span className="visual-caption">
                LEARN · CONNECT · EXPLORE
              </span>
            </div>

            <div className="project-info">
              <span className="project-category">WEB DEVELOPMENT</span>
              <h3>LingoSpark</h3>

              <p>
                A modern language-learning website featuring
                language discovery, learning features,
                pricing plans and an engaging user interface.
              </p>

              <div className="project-tags">
                {["React", "JavaScript", "Vite", "CSS"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/arulselvan-cloud/LINGOSPARK"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> Source Code <ExternalLink size={14} />
                </a>

                <a
                  href="https://lingospark-rho.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={17} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>

          {/* PROJECT 3 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="project-visual jarvis-visual">
              <span className="project-number">03</span>
              <Brain size={65} />
              <span className="visual-caption">
                INTELLIGENCE · AUTOMATION
              </span>
            </div>

            <div className="project-info">
              <span className="project-category">ARTIFICIAL INTELLIGENCE</span>
              <h3>JARVIS OS – AI Assistant</h3>

              <p>
                An AI-powered assistant with Gemini integration,
                smart-device interfaces, workflow automation,
                a code workspace and multimedia tools.
              </p>

              <div className="project-tags">
                {["TypeScript", "React", "Gemini API", "Express", "Electron"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/arulselvan-cloud/AI-Powered-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> Source Code <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>

          {/* PROJECT 4 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="project-visual crowd-visual">
              <span className="project-number">04</span>
              <ScanEye size={65} />
              <span className="visual-caption">
                COMPUTER VISION · REAL TIME
              </span>
            </div>

            <div className="project-info">
              <span className="project-category">COMPUTER VISION</span>
              <h3>CrowdSafe – Crowd Detection</h3>

              <p>
                A real-time crowd monitoring system using
                YOLOv8 and OpenCV to detect people,
                track crowd density and generate alerts.
              </p>

              <div className="project-tags">
                {["Python", "YOLOv8", "OpenCV", "FastAPI", "React"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/arulselvan-cloud/CROWD_DETECTION_SYSTEM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> Source Code <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section" id="experience">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">MY JOURNEY</span>
          <h2>Experience & <span className="gradient-text">Growth.</span></h2>
          <p>My professional journey and continuous learning.</p>
        </motion.div>

        <div className="experience-container">
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="experience-icon">
              <BriefcaseBusiness size={26} />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <span className="experience-type">INTERNSHIP</span>
                <span className="experience-status">
                  <span className="status-dot" />
                  Currently Ongoing
                </span>
              </div>

              <h3>Python Full Stack Developer Intern</h3>

              <h4>Galwin Technologies</h4>

              <p>
                Currently gaining practical experience in
                Python Full Stack Development with Flask,
                exploring backend development and building
                practical software applications.
              </p>

              <div className="project-tags">
                {["Python", "Flask", "Backend Development", "Full Stack"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="growth-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="experience-icon">
              <Award size={26} />
            </div>

            <h3>Continuous Learning</h3>

            <p>
              Constantly improving my programming skills,
              exploring emerging technologies and developing
              projects to strengthen my technical knowledge.
            </p>

            <span className="growth-highlight">
              LEARN · BUILD · IMPROVE
            </span>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <motion.section
        className="contact-section"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-container">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's build something
            <span> amazing together.</span>
          </h2>

          <p className="contact-description">
            I'm open to opportunities, collaborations, and exciting projects.
            Feel free to reach out!
          </p>

          <a
            href="mailto:arulselvan4912@gmail.com"
            className="contact-email"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/arulselvan-cloud"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 />
            </a>

            <a
              href="https://www.linkedin.com/in/arulselvan-m-92ba3b408/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <UserRound />
            </a>

            <a
              href="mailto:arulselvan4912@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
      </motion.section>
    </main>

    <footer className="portfolio-footer">
      <p>© 2026 Arulselvan. Built with passion and code.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
    </>
  );
}

export default App;
