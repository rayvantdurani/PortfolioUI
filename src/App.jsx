import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Server,
  Database,
  Lock,
  GitBranch,
  Coffee,
  MessageSquare,
  Globe,
  LayoutGrid,
  Box,
  TestTube,
  FileCode,
  Wrench,
  ArrowUp,
  Download,
  Home,
  User,
  BookOpen,
  Briefcase,
  Search,
  Bell,
  Video,
  ThumbsUp,
  Play,
  Moon,
  Sun,
  Copy,
  Check,
} from "lucide-react";
import "./App.css";

function App() {
  // State for about section
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const aboutRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Calculate years of experience automatically from August 2021
  const calculateExperience = () => {
    const startDate = new Date(2021, 7, 1); // August 2021 (month is 0-indexed, so 7 = August)
    const currentDate = new Date();
    const diffInYears =
      (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.round(diffInYears);
  };

  const yearsOfExperience = calculateExperience();

  // About section text with auto-calculated experience
  const aboutText = `I am a passionate Java Developer with ${yearsOfExperience}+ years of experience in building enterprise applications. I specialize in Spring Boot, microservices architecture, and RESTful API development. Currently working at THG, an ecommerce platform, and previously spent 3 years at HSBC developing financial applications.`;

  // Set up intersection observer for About section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Typewriter effect for About section
  useEffect(() => {
    if (isAboutVisible) {
      let currentIndex = 0;
      const typingSpeed = 30; // milliseconds per character

      const typingInterval = setInterval(() => {
        if (currentIndex < aboutText.length) {
          setTypedText(aboutText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [isAboutVisible, aboutText]);

  // Skills data - organized by categories with proficiency levels
  const skillsCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java 8", level: 90 },
        { name: "Java 11", level: 85 },
        { name: "JavaScript", level: 60 },
        { name: "Python", level: 60 },
      ],
    },
    {
      name: "Web Technologies",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "React", level: 65 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Spring Framework", level: 85 },
        { name: "Spring Security", level: 80 },
        { name: "Spring Cloud", level: 75 },
        { name: "Hibernate", level: 80 },
      ],
    },
    {
      name: "Testing",
      skills: [
        { name: "JUnit 5", level: 80 },
        { name: "Mockito", level: 75 },
      ],
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Bit Bucket", level: 80 },
        { name: "Maven", level: 85 },
        { name: "Gradle", level: 75 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "Relational Databases", level: 80 },
      ],
    },
    {
      name: "Security",
      skills: [
        { name: "OAuth2", level: 75 },
        { name: "JWT", level: 80 },
        { name: "Spring Security", level: 75 },
        { name: "Authentication", level: 80 },
        { name: "Authorization", level: 80 },
      ],
    },
    {
      name: "Project Management",
      skills: [
        { name: "Jira", level: 85 },
        { name: "Confluence", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Scrum", level: 80 },
      ],
    },
    {
      name: "API Development",
      skills: [
        { name: "Postman", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Swagger", level: 80 },
        { name: "API Documentation", level: 85 },
      ],
    },
    {
      name: "Messaging & Caching",
      skills: [
        { name: "Redis", level: 75 },
        { name: "Active MQ", level: 70 },
        { name: "Solace Queue", level: 70 },
        { name: "Kafka", level: 65 },
        { name: "RabbitMQ", level: 65 },
      ],
    },
  ];

  // Work experience data
  const workExperience = [
    {
      company: "THG",
      position: "Software Engineer",
      period: "Aug 2024 - Present",
      description:
        "Working on ecommerce platform development using Java, Spring Boot, and microservices architecture. Responsible for designing and implementing scalable backend services for high-traffic ecommerce applications.",
    },
    {
      company: "HSBC",
      position: "Senior Software Engineer",
      period: "Aug 2021 - Aug 2024",
      description:
        "Developed and maintained financial applications using Java, Spring Boot, and RESTful APIs. Worked on high-performance, secure banking solutions. Implemented microservices architecture and contributed to the digital transformation initiatives.",
    },
  ];

  // Contact information
  const contactInfo = {
    email: "rayvantdurani.corporate@gmail.com",
    github: "github.com/rayvantdurani",
    linkedin: "linkedin.com/in/rayvantdurani",
    location: "Pune, India",
  };

  // Function to copy email to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="App">
      {/* Header with navigation */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">RD</div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#hero" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Rayvant Durani</h1>
            <h2 className="hero-subtitle">Senior Java Developer</h2>
            <p className="hero-description">
              Specialized in building robust, scalable applications with Java,
              Spring Boot, and microservices architecture.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#skills" className="btn btn-secondary">
                View Skills
              </a>
            </div>
          </div>
          <div className="profile-placeholder">RD</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="about-section">
        <div className="container">
          <h2 className={`section-title ${isAboutVisible ? "fade-in" : ""}`}>
            About Me
          </h2>
          <div className={`about-content ${isAboutVisible ? "fade-in" : ""}`}>
            <div className="about-card">
              <div className="about-text">
                <p className="typewriter-text">
                  {typedText}
                  <span className="cursor"></span>
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>{yearsOfExperience}+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                  <h3>2</h3>
                  <p>Companies</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title skills-header">Technical Skills</h2>
          <div className="skills-container">
            {skillsCategories.map((category, index) => (
              <div key={index} className="skill-category-card">
                <h3 className="category-title">{category.name}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            {workExperience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-date">
                  <span className="date-badge">{job.period}</span>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">{job.position}</h3>
                  <h4 className="experience-company">{job.company}</h4>
                  <p className="experience-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-intro-card">
                <h3>How to Contact Me</h3>
                <p>
                  Feel free to reach out through any of the channels below. I'm
                  always open to discussing new projects, opportunities, or just
                  having a conversation about technology.
                </p>
                <p>
                  I typically respond within 24-48 hours and am available for
                  both remote and on-site opportunities in Pune, India.
                </p>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>{contactInfo.email}</p>
                  </div>
                  <button
                    className="copy-button"
                    onClick={() => copyToClipboard(contactInfo.email)}
                    aria-label="Copy email to clipboard"
                  >
                    {copySuccess ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link"
                >
                  <div className="contact-item">
                    <div className="contact-icon">🌐</div>
                    <div className="contact-details">
                      <h3>GitHub</h3>
                      <p>{contactInfo.github}</p>
                    </div>
                  </div>
                </a>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link"
                >
                  <div className="contact-item">
                    <div className="contact-icon">👥</div>
                    <div className="contact-details">
                      <h3>LinkedIn</h3>
                      <p>{contactInfo.linkedin}</p>
                    </div>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">
            © {new Date().getFullYear()} Rayvant Durani. All rights reserved.
          </p>
        </div>
      </footer>

      {/* CSS Styles */}
      <style>{`
        /* Variables */
        :root {
          --primary-color: #2563eb;
          --primary-light: #93c5fd;
          --primary-dark: #1e40af;
          --bg-white: #ffffff;
          --bg-light: #f8fafc;
          --bg-gray: #f1f5f9;
          --bg-dark: #1e293b;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --text-light: #f8fafc;
          --border-radius: 12px;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          --transition: all 0.3s ease;
        }
        
        /* Reset & Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: var(--text-primary);
          line-height: 1.6;
          background-color: var(--bg-light);
        }
        
        a {
          text-decoration: none;
          color: inherit;
        }
        
        ul {
          list-style: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          color: var(--text-primary);
        }
        
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 500;
          transition: var(--transition);
          cursor: pointer;
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: var(--text-light);
        }
        
        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary {
          background-color: var(--bg-light);
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
        
        .btn-secondary:hover {
          background-color: var(--primary-color);
          color: var(--text-light);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Header & Navigation */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--bg-white);
          box-shadow: var(--shadow);
          z-index: 1000;
          padding: 15px 0;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          background-color: var(--bg-light);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: var(--shadow);
        }
        
        .nav-list {
          display: flex;
          gap: 30px;
        }
        
        .nav-link {
          font-weight: 500;
          color: var(--text-primary);
          transition: var(--transition);
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--primary-color);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: var(--transition);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Hero Section */
        .hero-section {
          padding: 150px 0 100px;
          background-color: var(--bg-white);
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        
        .hero-content {
          flex: 1;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 600px;
        }
        
        .hero-cta {
          display: flex;
          gap: 20px;
        }
        
        .profile-placeholder {
          width: 300px;
          height: 300px;
          background-color: var(--bg-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          font-weight: 700;
          color: var(--primary-color);
          border: 8px solid var(--primary-light);
          box-shadow: var(--shadow);
        }
        
        /* About Section */
        .about-section {
          padding: 100px 0;
          background-color: var(--bg-light);
        }
        
        .about-content {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .about-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .about-card {
          background-color: var(--bg-white);
          border-radius: var(--border-radius);
          padding: 40px;
          box-shadow: var(--shadow);
        }
        
        .about-text {
          margin-bottom: 40px;
        }
        
        .typewriter-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: var(--text-primary);
          margin-left: 2px;
          animation: blink 1s infinite;
          vertical-align: middle;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .about-stats {
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin-top: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .stat-item {
          padding: 20px;
          background-color: var(--bg-light);
          border-radius: var(--border-radius);
          min-width: 150px;
        }
        
        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }
        
        .stat-item p {
          font-size: 1rem;
          color: var(--text-secondary);
        }
        
        /* Skills Section */
        .skills-section {
          padding: 100px 0;
          background-color: var(--bg-white);
        }
        
        .skills-header {
          margin-bottom: 40px;
        }
        
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .skill-category-card {
          background-color: var(--bg-light);
          border-radius: var(--border-radius);
          padding: 30px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .skill-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .category-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .category-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 1.5px;
        }
        
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex-grow: 1;
        }
        
        .skill-item {
          margin-bottom: 5px;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .skill-name {
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .skill-percentage {
          color: var(--primary-color);
          font-weight: 600;
        }
        
        .skill-progress {
          height: 8px;
          background-color: var(--bg-gray);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress-bar {
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
        
        /* Media query adjustments for skills section */
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            padding: 0 15px;
          }
          
          .skill-category-card {
            padding: 25px;
          }
          
          .category-title {
            font-size: 1.4rem;
            margin-bottom: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
          
          .skill-category-card {
            padding: 20px;
          }
          
          .category-title {
            font-size: 1.3rem;
          }
        }
        
        /* Experience Section */
        .experience-section {
          padding: 100px 0;
          background-color: var(--bg-light);
        }
        
        .experience-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .experience-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 2px;
          background-color: var(--primary-light);
        }
        
        .experience-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 50px;
          position: relative;
          padding-left: 50px;
        }
        
        .experience-date {
          margin-bottom: 15px;
        }
        
        .date-badge {
          display: inline-block;
          padding: 8px 16px;
          background-color: var(--primary-color);
          color: var(--text-light);
          border-radius: 20px;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .experience-content {
          position: relative;
        }
        
        .experience-item::before {
          content: '';
          position: absolute;
          top: 5px;
          left: 12px;
          width: 16px;
          height: 16px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 3px solid var(--bg-light);
          z-index: 1;
        }
        
        .experience-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 5px;
        }
        
        .experience-company {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--primary-color);
          margin-bottom: 15px;
        }
        
        .experience-description {
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        /* Contact Section */
        .contact-section {
          padding: 100px 0;
          background-color: var(--bg-white);
        }
        
        .contact-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }
        
        .contact-intro-card {
          background-color: var(--bg-light);
          border-radius: var(--border-radius);
          padding: 35px;
          box-shadow: var(--shadow);
          border-left: 5px solid var(--primary-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }
        
        .contact-intro-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .contact-intro-card p {
          color: var(--text-secondary);
          margin-bottom: 15px;
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
          height: 100%;
        }
        
        .contact-item-link {
          display: block;
          text-decoration: none;
          color: inherit;
          flex: 1;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 25px;
          background-color: var(--bg-light);
          padding: 25px 30px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          transition: var(--transition);
          border-left: 3px solid transparent;
          height: 100%;
          position: relative;
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-left: 3px solid var(--primary-color);
        }
        
        .contact-icon {
          font-size: 2rem;
          color: var(--primary-color);
          min-width: 40px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .contact-details {
          flex: 1;
        }
        
        .contact-details h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        
        .contact-details p {
          color: var(--text-secondary);
          word-break: break-word;
          font-size: 1.05rem;
        }
        
        .copy-button {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background-color: var(--bg-white);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--primary-color);
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .copy-button:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        
        .copy-button:active {
          transform: translateY(-50%) scale(0.95);
        }
        
        /* Footer */
        .footer {
          background-color: var(--bg-dark);
          padding: 30px 0;
          text-align: center;
        }
        
        .copyright {
          color: var(--text-light);
          font-size: 0.9rem;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .hero-description {
            margin: 0 auto 30px;
          }
          
          .hero-cta {
            justify-content: center;
          }
          
          .profile-placeholder {
            width: 250px;
            height: 250px;
            font-size: 4rem;
            margin-bottom: 30px;
          }
          
          .experience-timeline::before {
            left: 20px;
          }
          
          .experience-item {
            padding-left: 50px;
          }
          
          .experience-item::before {
            left: 12px;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .contact-intro-card {
            padding: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .skills-container {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            grid-template-columns: 1fr;
          }
          
          .nav-list {
            display: none;
          }
          
          .contact-intro-card {
            padding: 25px;
          }
          
          .contact-intro-card h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
          }
          
          .contact-item {
            padding: 20px 25px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .profile-placeholder {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
          
          .about-card {
            padding: 25px;
          }
          
          .stat-item {
            min-width: 100%;
          }
          
          .skill-category-card {
            padding: 20px;
          }
          
          .experience-item {
            padding-left: 40px;
          }
          
          .experience-item::before {
            left: 11px;
          }
          
          .contact-intro-card {
            padding: 20px;
          }
          
          .contact-item {
            padding: 18px 20px;
            gap: 15px;
          }
          
          .contact-icon {
            font-size: 1.8rem;
            min-width: 30px;
          }
        }
        
        /* Add viewport meta tag for proper mobile scaling */
        @media screen {
          html {
            -webkit-text-size-adjust: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
