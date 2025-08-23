import React, { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const projects = [
    {
      title: 'Disaster Management App',
      description: 'A mobile application to help manage and coordinate disaster response efforts using AI.',
      technologies: ['Flutter', 'Dart', 'AI', 'CNN'],
      github: 'https://github.com/student-yashguptya/Disaster-Management.git',
      demo: '',
      icon: '🌪️',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      title: 'Railway Indoor Navigation App',
      description: 'An AR-based application to provide indoor navigation within railway stations.',
      technologies: ['AR', 'Flutter', 'Dart'],
      github: 'https://github.com/vish4lsharma/Indoor-Navigation-Using-Augmented-Reality-AR-master.git',
      demo: '',
      icon: '🚂',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    },
    {
      title: 'AI-Powered Resume Screening',
      description: 'A system that uses AI to screen and rank resumes for job applications.',
      technologies: ['AI', 'ML', 'NLP'],
      github: 'https://github.com/vish4lsharma/AI-powered-Resume-Screening-and-Ranking-System-vishal-sharma.git',
      demo: '',
      icon: '🤖',
      gradient: 'linear-gradient(45deg, #ff0080, #00f5ff)'
    },
    {
      title: 'Computer Vision Accessibility Tool',
      description: 'A tool that enables cursor movement using head gestures and eye blinks, improving accessibility for disabled users.',
      technologies: ['Computer Vision', 'AI'],
      github: 'https://github.com/vish4lsharma/cursor-movement-through-head-and-click-through-eye-blink.git',
      demo: '',
      icon: '👁️',
      gradient: 'linear-gradient(45deg, #00f5ff, #ff0080)'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built with HTML and CSS to showcase my projects and skills.',
      technologies: ['HTML', 'CSS', 'Responsive'],
      github: 'https://github.com/vish4lsharma.github.io',
    //   github: 'https://portfolio-vishal-ochre.vercel.app/',
      demo: 'vish4lsharma.github.io',
      icon: '💼',
      gradient: 'linear-gradient(45deg, #8b5cf6, #00f5ff)'
    },
    {
      title: 'Text-to-Code Generator',
      description: 'An AI-powered application that converts natural language descriptions into executable code across multiple programming languages.',
      technologies: ['AI', 'NLP', 'Python', 'React'],
      github: 'https://github.com/vish4lsharma/text-to-code-generator.git',
      demo: '',
      icon: '⚡',
      gradient: 'linear-gradient(45deg, #ff0080, #8b5cf6)'
    },
     {
      title: 'Company Employee Management System',
      description: 'An AI-powered application that manages employee data, attendance, and performance reviews efficiently.',
      technologies: ['AI', 'NLP', 'Python', 'html',' css ','javascript'],
      github: 'https://github.com/vish4lsharma/text-to-code-generator.git',
      demo: '',
      icon: '👷‍♂️',
      gradient: 'linear-gradient(45deg, #00ffffff, #8b5cf6)'
    }
  ]

  // Custom Alert Component
  const showDemoAlert = (projectTitle) => {
    // Create custom alert overlay
    const alertOverlay = document.createElement('div')
    alertOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease-out;
    `

    const alertBox = document.createElement('div')
    alertBox.style.cssText = `
      background: linear-gradient(135deg, #111118, #1a1a26);
      border: 2px solid #00f5ff;
      border-radius: 20px;
      padding: 2rem;
      max-width: 90%;
      width: 400px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 245, 255, 0.3);
      animation: slideIn 0.4s ease-out;
    `

    alertBox.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
      <h3 style="color: #00f5ff; font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">
        ${projectTitle}
      </h3>
      <p style="color: #a0a0ab; font-size: 1rem; margin-bottom: 2rem; line-height: 1.6;">
        This project is currently under development or deployment. 
        <br><br>
        <strong style="color: #ff0080;">Want to see the live demo?</strong>
        <br>
        Contact me and I'll show you the project personally!
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button id="contactBtn" style="
          background: linear-gradient(45deg, #00f5ff, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        ">
          📞 Contact Me
        </button>
        <button id="closeBtn" style="
          background: transparent;
          color: #a0a0ab;
          border: 2px solid #ff0080;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        ">
          ✕ Close
        </button>
      </div>
    `

    // Add animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { transform: translateY(-50px) scale(0.9); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
    `
    document.head.appendChild(style)

    alertOverlay.appendChild(alertBox)
    document.body.appendChild(alertOverlay)

    // Add event listeners
    const contactBtn = alertBox.querySelector('#contactBtn')
    const closeBtn = alertBox.querySelector('#closeBtn')

    contactBtn.addEventListener('click', () => {
      document.body.removeChild(alertOverlay)
      document.head.removeChild(style)
      // Scroll to contact section
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    })

    closeBtn.addEventListener('click', () => {
      alertOverlay.style.animation = 'fadeIn 0.3s ease-out reverse'
      setTimeout(() => {
        if (document.body.contains(alertOverlay)) {
          document.body.removeChild(alertOverlay)
          document.head.removeChild(style)
        }
      }, 300)
    })

    // Close on overlay click
    alertOverlay.addEventListener('click', (e) => {
      if (e.target === alertOverlay) {
        alertOverlay.style.animation = 'fadeIn 0.3s ease-out reverse'
        setTimeout(() => {
          if (document.body.contains(alertOverlay)) {
            document.body.removeChild(alertOverlay)
            document.head.removeChild(style)
          }
        }, 300)
      }
    })

    // Add hover effects
    contactBtn.addEventListener('mouseenter', () => {
      contactBtn.style.transform = 'translateY(-2px)'
      contactBtn.style.boxShadow = '0 10px 30px rgba(0, 245, 255, 0.4)'
    })
    contactBtn.addEventListener('mouseleave', () => {
      contactBtn.style.transform = 'translateY(0)'
      contactBtn.style.boxShadow = 'none'
    })

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = '#ff0080'
      closeBtn.style.color = 'white'
      closeBtn.style.transform = 'translateY(-2px)'
    })
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = 'transparent'
      closeBtn.style.color = '#a0a0ab'
      closeBtn.style.transform = 'translateY(0)'
    })
  }

  const handleDemoClick = (project) => {
    if (!project.demo || project.demo === '' || project.demo === '#') {
      showDemoAlert(project.title)
    } else {
      window.open(project.demo, '_blank')
    }
  }

  const handleGithubClick = (project) => {
    if (!project.github || project.github === '' || project.github === '#') {
      // Simple browser alert for GitHub
      alert('🔗 GitHub repository will be available soon!\n\n📞 Contact me for source code access.')
    } else {
      window.open(project.github, '_blank')
    }
  }

  return (
    <section id="projects" className="section" style={{
      background: 'linear-gradient(135deg, #111118 0%, #1a1a26 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Featured Projects</h2>
        
        <div className="grid-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card animate-scale-in" 
              style={{
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
                border: hoveredProject === index ? '1px solid #00f5ff' : '1px solid rgba(0, 245, 255, 0.2)',
                transform: hoveredProject === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                animationDelay: `${index * 0.1}s`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: project.gradient,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 2rem auto',
                animation: hoveredProject === index ? 'glow 2s ease-in-out infinite' : 'none'
              }}>
                {project.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                background: project.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: '#a0a0ab',
                lineHeight: '1.6',
                marginBottom: '2rem',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    background: 'rgba(0, 245, 255, 0.1)',
                    color: '#00f5ff',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 245, 255, 0.3)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <button 
                  onClick={() => handleGithubClick(project)}
                  className="neon-button" 
                  style={{
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2))',
                    border: '1px solid #00f5ff',
                    borderRadius: '25px',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  💻 GitHub
                </button>
                
                <button 
                  onClick={() => handleDemoClick(project)}
                  className="neon-button" 
                  style={{
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    background: project.gradient,
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <div className="glass-card" style={{
            display: 'inline-block',
            padding: '2rem 3rem',
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
            border: '1px solid rgba(0, 245, 255, 0.2)'
          }}>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700'
            }}>
              Like what you see? 👀
            </h3>
            <p style={{
              color: '#a0a0ab',
              marginBottom: '2rem',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Let's collaborate on your next project and bring your ideas to life!
            </p>
            <button 
              className="neon-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(45deg, #8b5cf6, #ff0080)',
                fontSize: '1.2rem',
                padding: '15px 30px',
                borderRadius: '30px',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              💼 Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
