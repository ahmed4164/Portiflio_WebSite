import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaMobile,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaReact,
  FaApple,
  FaAndroid,
  FaNodeJs,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaWrench,
  FaHammer,
  FaRocket,
  FaCog,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaBolt,
  FaStar,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiIos,
  SiAndroid,
  SiXcode,
  SiAndroidstudio,
  SiAppstore,
  SiGoogleplay,
} from "react-icons/si";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="App">
      {/* Circuit Pattern Overlay */}
      <div className="circuit-pattern"></div>

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Binary Code Animation Background */}
      <div className="binary-code">
        <div className="binary-line">
          01001000 01100101 01101100 01101100 01101111 00100000 01010111
          01101111 01110010 01101100 01100100 00100000 01001000 01100101
          01110010 01100101 00100000 01001001 00100000 01000001 01101101
        </div>
        <div className="binary-line">
          01100001 01101000 01101101 01100101 01100100 00100000 01010000
          01101111 01110010 01110100 01100110 01101111 01101100 01101001
          01101111 00100000 01000100 01100101 01110110 01100101 01101100
          01101111 01110000 01100101 01110010
        </div>
        <div className="binary-line">
          01001101 01101111 01100010 01101001 01101100 01100101 00100000
          01000001 01110000 01110000 00100000 01000100 01100101 01110110
          01100101 01101100 01101111 01110000 01100101 01110010 00100000
          01010010 01100101 01100001 01100011 01110100 00100000 01001110
          01100001 01110100 01101001 01110110 01100101
        </div>
        <div className="binary-line">
          01000110 01101100 01110101 01110100 01110100 01100101 01110010
          00100000 01001010 01100001 01110110 01100001 01010011 01100011
          01110010 01101001 01110000 01110100 00100000 01010100 01111001
          01110000 01100101 01010011 01100011 01110010 01101001 01110000
          01110100
        </div>
        <div className="binary-line">
          01001110 01101111 01100100 01100101 00101110 01101010 01110011
          00100000 01000101 01111000 01110000 01110010 01100101 01110011
          01110011 00100000 01001101 01101111 01101110 01100111 01101111
          01000100 01000010 00100000 01000110 01101001 01110010 01100101
          01100010 01100001 01110011 01100101
        </div>
        <div className="binary-line">
          01000001 01010000 01001001 00100000 01000100 01100101 01110110
          01100101 01101100 01101111 01110000 01101101 01100101 01101110
          01110100 00100000 01001000 01110100 01110100 01110000 01110011
          00111010 00101111 00101111 01100111 01101001 01110100 01101000
          01110101 01100010 00101110 01100011 01101111 01101101
        </div>
        <div className="binary-line">
          01000001 01101000 01101101 01100101 01100100 00110100 00110001
          00110110 00110100 00100000 01001000 01110100 01110100 01110000
          01110011 00111010 00101111 00101111 01110111 01110111 01110111
          00101110 01101100 01101001 01101110 01101011 01100101 01100100
          01101001 01101110 00101110 01100011 01101111 01101101
        </div>
        <div className="binary-line">
          01001001 01101110 00101111 01100001 01101000 01101101 01100101
          01100100 00110000 00110001 00110001 00100000 01000001 01100010
          01101111 01110101 01110100 00100000 01001101 01100101 00100000
          01010011 01101011 01101001 01101100 01101100 01110011 00100000
          01010000 01110010 01101111 01101010 01100101 01100011 01110100
          01110011
        </div>
        <div className="binary-line">
          01000111 01101001 01110100 01001000 01110101 01100010 00100000
          01001100 01101001 01101110 01101011 01100101 01100100 01001001
          01101110 00100000 01010100 01110111 01101001 01110100 01110100
          01100101 01110010 00100000 01001001 01101110 01110011 01110100
          01100001 01100111 01110010 01100001 01101101
        </div>
        <div className="binary-line">
          01010111 01101000 01100001 01110100 01110011 01000001 01110000
          01110000 00100000 01000100 01101001 01110011 01100011 01101111
          01110010 01100100 00100000 01010011 01101100 01100001 01100011
          01101011 00100000 01000001 01110000 01110000 00100000 01010011
          01110100 01101111 01110010 01100101 00100000 01000100 01100101
          01110110 01100101 01101100 01101111 01110000 01100101 01110010
        </div>
        <div className="binary-line">
          01001000 01110100 01110100 01110000 01110011 00111010 00101111
          00101111 01100111 01101001 01110100 01101000 01110101 01100010
          00101110 01100011 01101111 01101101 00101111 01000001 01101000
          01101101 01100101 01100100 00110100 00110001 00110110 00110100
          00100000 01001000 01110100 01110100 01110000 01110011 00111010
          00101111 00101111 01110111 01110111 01110111 00101110 01101100
          01101001 01101110 01101011 01100101 01100100 01101001 01101110
          00101110 01100011 01101111 01101101 00101111 01101001 01101110
          00101111 01100001 01101000 01101101 01100101 01100100 00110000
          00110001 00110001
        </div>
        <div className="binary-line">
          01000001 01100010 01101111 01110101 01110100 00100000 01001101
          01100101 00100000 01010011 01101011 01101001 01101100 01101100
          01110011 00100000 01010000 01110010 01101111 01101010 01100101
          01100011 01110100 01110011 00100000 01000111 01101001 01110100
          01001000 01110101 01100010 00100000 01001100 01101001 01101110
          01101011 01100101 01100100 01001001 01101110 00100000 01010100
          01110111 01101001 01110100 01110100 01100101 01110010 00100000
          01001001 01101110 01110011 01110100 01100001 01100111 01110010
          01100001 01101101
        </div>
      </div>
      <div className="portfolio-container">
        {/* Profile Section */}
        <div className="profile-card">
          <div className="profile-avatar">
            <span>A</span>
          </div>
          <h1 className="profile-name">
            Ahmed <FaMobile className="name-icon" />
            <FaRocket className="name-icon" />
          </h1>
          <p className="profile-title">
            Mobile App Developer crafting exceptional iOS & Android experiences
            with passion and precision
          </p>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Hyderabad, India</span>
          </div>
          <div className="social-links">
            <a href="mailto:ahmed.docx@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            {/* <a href="tel:+919573312630" className="social-link">
              <FaPhone />
            </a> */}
            <a
              href="https://github.com/Ahmed4164"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed011"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com/ahmed_mobile" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a> */}
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-card">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Hey there! 👋 I'm a passionate mobile developer who's been
              crafting digital experiences since college. Starting with basic
              lines of code, I've evolved into a mobile app development expert
              with a passion for creating apps that users love and businesses
              rely on.
            </p>
            <p>
              Through continuous learning and relentless practice, I've become
              proficient in mobile technologies:
              <strong>React Native</strong>, <strong>iOS Swift</strong>, and{" "}
              <strong>Android Kotlin</strong>. I specialize in cross-platform
              development and add a touch of finesse using
              <strong> TypeScript</strong>, with expertise in{" "}
              <strong>Firebase</strong> and <strong>REST APIs</strong>. 📱🚀
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-card">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <span className="skill-tag">
              <SiReact className="skill-icon" />
              React Native
            </span>
            <span className="skill-tag">
              <SiIos className="skill-icon" />
              iOS Swift
            </span>
            <span className="skill-tag">
              <SiAndroid className="skill-icon" />
              Android Kotlin
            </span>
            <span className="skill-tag">
              <SiTypescript className="skill-icon" />
              TypeScript
            </span>
            <span className="skill-tag">
              <SiJavascript className="skill-icon" />
              JavaScript
            </span>
            <span className="skill-tag">
              <SiFirebase className="skill-icon" />
              Firebase
            </span>
            <span className="skill-tag">
              <SiMongodb className="skill-icon" />
              MongoDB
            </span>
            <span className="skill-tag">
              <FaNodeJs className="skill-icon" />
              Node.js
            </span>
            <span className="skill-tag">
              <SiXcode className="skill-icon" />
              Xcode
            </span>
            <span className="skill-tag">
              <SiAndroidstudio className="skill-icon" />
              Android Studio
            </span>
            <span className="skill-tag">
              <SiAppstore className="skill-icon" />
              App Store
            </span>
            <span className="skill-tag">
              <SiGoogleplay className="skill-icon" />
              Google Play
            </span>
            <span className="skill-tag">
              <FaCloud className="skill-icon" />
              Cloud Services
            </span>
            <span className="skill-tag">
              <FaShieldAlt className="skill-icon" />
              Security
            </span>
            <span className="skill-tag">
              <FaBolt className="skill-icon" />
              Performance
            </span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-card">
          <h2 className="section-title">Experience</h2>

          {/* Current Position */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Mobile App Developer</h3>
                <p className="company-name">Stealth Startup</p>
                <p className="experience-duration">February 2025 - Present</p>
              </div>
              <span className="remote-tag">Remote</span>
            </div>
            <p className="experience-description">
              Currently developing production-grade mobile applications using
              React Native. Working on cross-platform solutions with focus on
              performance optimization, API integration, and modern mobile
              development practices. Contributing to scalable mobile
              architecture and implementing best practices for mobile app
              development.
            </p>
          </div>

          {/* Virtus-IT Full-Time */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Mobile App Developer (Full-Time)</h3>
                <p className="company-name">Virtus-IT Private Limited</p>
                <p className="experience-duration">July 2023 - February 2025</p>
              </div>
              <span className="remote-tag">Hyderabad, India</span>
            </div>
            <p className="experience-description">
              Designed and developed 2+ production-grade cross-platform
              applications using React Native. Integrated RESTful APIs with
              Redux for state management. Implemented dynamic screens, reusable
              components, and form validations to enhance UI consistency and
              user experience. Collaborated with cross-functional teams to
              deliver high-quality mobile solutions.
            </p>
          </div>

          {/* Virtus-IT Internship */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Mobile App Developer (Intern)</h3>
                <p className="company-name">Virtus-IT Private Limited</p>
                <p className="experience-duration">March 2023 - July 2023</p>
              </div>
              <span className="remote-tag">Hyderabad, India</span>
            </div>
            <p className="experience-description">
              Assisted in developing and testing mobile features for both
              internal and client-facing applications, working under senior
              developer guidance. Gained hands-on experience in component
              design, API integration, and real-world development workflows
              using Git. Contributed to mobile app testing and quality assurance
              processes.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-card">
          <h2 className="section-title">Projects I've Made</h2>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-header">
                <FaMobile className="project-icon" />
                <h3>Bazark App</h3>
                <div className="app-stores">
                  <SiAppstore className="store-icon" />
                  <SiGoogleplay className="store-icon" />
                </div>
              </div>
              <p>
                Developed the Bazark mobile app from scratch as part of the core
                product team, delivering a fully functional MVP under Agile
                sprints. Architected and implemented major modules including
                product listings, live bidding system, wishlist boards,
                authentication flows, and payment integration.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">
                  <SiReact className="tech-icon" />
                  React Native
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Redux
                </span>
                <span className="tech-tag">
                  <FaShieldAlt className="tech-icon" />
                  Payment Integration
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Real-time Updates
                </span>
                <span className="tech-tag">
                  <FaUsers className="tech-icon" />
                  User Interactions
                </span>
                <span className="tech-tag">
                  <FaRocket className="tech-icon" />
                  Agile Development
                </span>
              </div>
              {/* <div className="project-links">
                <a
                  href="https://apps.apple.com/app/bazark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiAppstore /> App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bazark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiGoogleplay /> Play Store
                </a>
              </div> */}
            </div>

            <div className="project-item">
              <div className="project-header">
                <FaHeart className="project-icon" />
                <h3>midoc - Patient & Doctor App</h3>
                <div className="app-stores">
                  <SiAppstore className="store-icon" />
                  <SiGoogleplay className="store-icon" />
                </div>
              </div>
              <p>
                Spearheaded the development of both patient and doctor-facing
                mobile apps using React Native and Redux, handling complete
                frontend architecture and modular codebase. Built secure and
                scalable modules for appointment scheduling, prescription
                uploads, in-app chat, and real-time notifications.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">
                  <SiReact className="tech-icon" />
                  React Native
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Redux
                </span>
                <span className="tech-tag">
                  <FaStar className="tech-icon" />
                  AI-Powered Features
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Real-time Chat
                </span>
                <span className="tech-tag">
                  <FaShieldAlt className="tech-icon" />
                  Secure Authentication
                </span>
                <span className="tech-tag">
                  <FaCog className="tech-icon" />
                  Voice-to-Text
                </span>
              </div>
              <div className="project-links">
                <a
                  href="https://apps.apple.com/in/app/midoc-members/id6476858168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiAppstore /> App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.midoc.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiGoogleplay /> Play Store
                </a>
              </div>
            </div>

            <div className="project-item">
              <div className="project-header">
                <FaRocket className="project-icon" />
                <h3>Store2Door Mobile App</h3>
                <div className="app-stores">
                  <SiAppstore className="store-icon" />
                  <SiGoogleplay className="store-icon" />
                </div>
              </div>
              <p>
                Developed and maintained a feature-rich logistics and delivery
                mobile app enabling users to place, track, and receive packages
                with real-time updates. Implemented key modules including
                multi-step order placement, package inspection reports, user
                authentication, and secure payment processing.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">
                  <SiReact className="tech-icon" />
                  React Native
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Redux
                </span>
                <span className="tech-tag">
                  <SiFirebase className="tech-icon" />
                  Firebase
                </span>
                <span className="tech-tag">
                  <FaBolt className="tech-icon" />
                  Real-time Tracking
                </span>
                <span className="tech-tag">
                  <FaShieldAlt className="tech-icon" />
                  Secure Payments
                </span>
                <span className="tech-tag">
                  <FaRocket className="tech-icon" />
                  Agile
                </span>
              </div>
              <div className="project-links">
                <a
                  href="https://apps.apple.com/in/app/store2door-mobile/id1555407352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiAppstore /> App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.storedoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <SiGoogleplay /> Play Store
                </a>
              </div>
            </div>
          </div>
          <div className="view-more">
            <FaGithub className="github-icon" />
            <button className="view-more-btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
