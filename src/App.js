"use client"

import { useEffect, useRef, useState } from "react"
import "./App.css"
import { Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin, Menu, X, Facebook } from "lucide-react"

const App = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [activeTab, setActiveTab] = useState("summary")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Section refs
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        scrollToSection(hash)
        setActiveSection(hash)
      }
    }

    // Handle initial load with hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ]

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const refs = {
      hero: heroRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    }

    const targetRef = refs[sectionId]
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navigateToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`)
    scrollToSection(sectionId)
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  const Header = () => (
    <header className="header">
      <div className="header-content">
        <button onClick={() => navigateToSection("hero")} className="logo-button">
          Kiel Ongtengco
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )

  const Hero = () => (
    <section ref={heroRef} className="hero">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Crafting Elegant
          <br />
          Experiences Through Code
        </h1>
        <p className="hero-subtitle">
          I'm a passionate developer focusing on clean, modern web design and impactful projects.
        </p>
        <button onClick={() => navigateToSection("projects")} className="hero-button">
          View My Work
        </button>
      </div>
    </section>
  )

  const ProfileCard = () => (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src="images/kiel4.jpg" alt="Kiel Ongtengco" className="profile-image" />
      </div>
      <h3 className="profile-name">Kiel Ongtengco</h3>
      <p className="profile-title">Computer Engineering Student</p>

      <div className="social-buttons">
        <button className="social-button"
        onClick={() => window.open('https://github.com/kk3L', '_blank')}
        aria-label="GitHub Profile">
          <Github size={20} />
        </button>
        <button className="social-button"
        onClick={() => window.open('https://www.linkedin.com/in/kiel-ongtengco-a847b11b7', '_blank')}
        aria-label="LinkedIn Profile" >
          <Linkedin size={20} />
        </button>
        <button className="social-button"
        onClick={() => window.open('https://www.facebook.com/ongtengco.kiell', '_blank')}
        aria-label="Facebook Profile">
          <Facebook size={20} />
        </button>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <MapPin size={16} />
          <span>Philippines</span>
        </div>
        <div className="contact-item">
          <Mail size={16} />
          <span>kielongtengco@gmail.com</span>
        </div>
        <div className="contact-item">
          <Phone size={16} />
          <span>+63 927 082 3209</span>
        </div>
      </div>
    </div>
  )

  const TabButton = ({ title, isActive, onPress }) => (
    <button className={`tab-button ${isActive ? "active" : ""}`} onClick={onPress}>
      {title}
    </button>
  )

  const ResumeContent = ({ activeTab }) => {
    const renderContent = () => {
      switch (activeTab) {
        case "summary":
          return (
            <div className="tab-content">
              <h3 className="tab-content-title">Professional Summary</h3>
              <div className="tab-content-text">
                <p>
                  Passionate Computer Engineering student with a strong aptitude for logic and problem-solving. 
                  Skilled in designing and analyzing logic circuits, breadboarding, and networking concepts. 
                  Adequate in web development, with hands-on experience building functional, user-focused applications using modern tools like JavaScript and React. 
                  Driven to combine hardware and software knowledge to create efficient, reliable solutions.
                </p>
                <p>
                  I thrive on solving complex problems and turning ideas into beautiful, functional digital experiences.
                  Always eager to learn new technologies and collaborate with teams to deliver exceptional results.
                </p>
              </div>
            </div>
          )

        case "experience":
          return (
            <div className="tab-content">
              <div className="experience-item">
                <div className="experience-header">
                  <div>
                    <h4 className="experience-title">Sangguniang Kabataan Kagawad</h4>
                    <p className="experience-company">SK Barangay 855</p>
                  </div>
                  <div className="experience-date">
                    <Calendar size={14} />
                    <span>2022 - Present</span>
                  </div>
                </div>
                <div className="experience-details">
                  <p>• Strengthened community engagement by utilizing social media platforms to promote projects and disseminate information</p>
                  <p>• Mobilized and coordinated volunteers for outreach projects, fostering teamwork and active youth participation</p>
                  <p>• Resolved conflicts and built consensus among youth groups, demonstrating strong interpersonal and decision-making skills</p>
                </div>
              </div>
            </div>
          )

        case "education":
          return (
            <div className="tab-content">
              <div className="education-item">
                <div className="experience-header">
                  <div>
                    <h4 className="experience-title">Grade School to Senior High</h4>
                    <p className="experience-company">Paco Catholic School</p>
                  </div>
                  <div className="experience-date">
                    <Calendar size={14} />
                    <span>2010 - 2021</span>
                  </div>
                </div>
                <p className="education-description">
                  Completed basic education from Grade School to Senior High School under the STEM strand, building a strong foundation in science, mathematics, and technology.
                  Actively participated in academic competitions, group projects, and leadership roles while maintaining consistent academic performance.
                </p>
              </div>

              <div className="education-item">
                <div className="experience-header">
                  <div>
                    <h4 className="experience-title">Bachelor of Science in Computer Engineering</h4>
                    <p className="experience-company">Technological Institute of the Philippines - Manila</p>
                  </div>
                  <div className="experience-date">
                    <Calendar size={14} />
                    <span>2021 - Present</span>
                  </div>
                </div>
                <p className="education-description">
                  Currently in Summer of 4th year, focusing on Seminars, Web Development, and preparation for Project Design.
                  Maintaining strong academic performance while building practical programming skills.
                </p>
              </div>
            </div>
          )

        case "certifications":
          return (
            <div className="tab-content">
              <div className="certification-item">
                <div className="certification-header">
                  <div>
                    <h4 className="certification-title">CCNAv7: Introduction to Networks</h4>
                    <p className="certification-issuer">Cisco Networking Academy</p>
                  </div>
                  <span className="certification-year">May 2024</span>
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div>
                    <h4 className="certification-title">CCNAv7: Switching, Routing, and Wireless Essentials</h4>
                    <p className="certification-issuer">Cisco Networking Academy</p>
                  </div>
                  <span className="certification-year">December 2024</span>
                </div>
              </div>
              
              <div className="certification-item">
                <div className="certification-header">
                  <div>
                    <h4 className="certification-title">EF SET English Cerificate 69/100 (C1 Advanced)</h4>
                    <p className="certification-issuer">EF SET</p>
                  </div>
                  <span className="certification-year">April 2025</span>
                </div>
              </div>
            </div>
          )

        default:
          return null
      }
    }

    return <div className="resume-content">{renderContent()}</div>
  }

  const About = () => (
    <section ref={aboutRef} className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline" />

        <div className="about-content">
          <ProfileCard />

          <div className="resume-section">
            <div className="tab-buttons">
              <TabButton title="Summary" isActive={activeTab === "summary"} onPress={() => setActiveTab("summary")} />
              <TabButton
                title="Experience"
                isActive={activeTab === "experience"}
                onPress={() => setActiveTab("experience")}
              />
              <TabButton
                title="Education"
                isActive={activeTab === "education"}
                onPress={() => setActiveTab("education")}
              />
              <TabButton
                title="Certifications"
                isActive={activeTab === "certifications"}
                onPress={() => setActiveTab("certifications")}
              />
            </div>

            <ResumeContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )

  const ProjectCard = ({ title, description, onPress }) => (
    <div className="project-card" onClick={onPress}>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-link">
        <span>View Project</span>
        <ExternalLink size={16} />
      </div>
    </div>
  )

  const Projects = () => (
    <section ref={projectsRef} className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-underline" />

        <div className="projects-grid">
          <ProjectCard
            title="Personal Portfolio Website"
            description="A responsive portfolio built with React showcasing modern design principles and smooth interactions with hash-based navigation."
            onPress={() => {}}
          />
          <ProjectCard
            title="Task Manager Application"
            description="A web app to organize and track tasks with a clean UI, local storage persistence, and responsive design."
            onPress={() => {}}
          />
          <ProjectCard
            title="Basketball Stats Tracker"
            description="A sports application for tracking basketball statistics and player performance, combining my passion for coding and basketball."
            onPress={() => {}}
          />
        </div>
      </div>
    </section>
  )

  const SkillBadge = ({ skill }) => <div className="skill-badge">{skill}</div>

  const Skills = () => (
    <section ref={skillsRef} className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-underline" />

        <div className="skills-grid">
          {[
            "JavaScript",
            "React",
            "HTML5",
            "CSS3",
            "Node.js",
            "Python",
            "Git",
            "Responsive Design",
            "UI/UX Design",
            "Problem Solving",
            "Team Collaboration",
            "Agile Development",
            "Logic Design",
            "Breadboarding",
            "Digital Electronics",
            "Computer Networks",
            "C Programming",
            "Circuit Analysis",
            "Microcontrollers (e.g. Arduino)",
            "Schematic Design",
            "Debugging & Troubleshooting",
            "Technical Documentation",
            "Critical Thinking"
            ].map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )

const Contact = () => {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/mrbkywpo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('Message sent successfully! 🎉')
        form.reset()
      } else {
        setStatus('Oops! There was a problem sending your message. Please try again.')
      }
    } catch (error) {
      setStatus('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={contactRef} className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-underline" />

        <div className="contact-card">
          <h3 className="contact-card-title">Let's work together!</h3>
          <p className="contact-card-text">I'm always interested in new opportunities and exciting projects.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Your name" 
                  className="form-input" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="you@example.com" 
                  className="form-input" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="form-input form-textarea"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className="contact-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status && (
              <div className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Kiel Salomon Ongtengco. All rights reserved.</p>
      </div>
    </footer>
  )

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
