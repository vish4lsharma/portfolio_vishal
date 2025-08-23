import React, { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const projects = [
    {
      title: 'Disaster Management App',
      description: 'A mobile application to help manage and coordinate disaster response efforts using AI.',
      technologies: ['Flutter', 'Dart', 'AI', 'CNN'],
      github: '#',
      demo: '#',
      icon: '🌪️',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      title: 'Railway Indoor Navigation App',
      description: 'An AR-based application to provide indoor navigation within railway stations.',
      technologies: ['AR', 'Flutter', 'Dart'],
      github: '#',
      demo: '#',
      icon: '🚂',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    },
    {
      title: 'AI-Powered Resume Screening',
      description: 'A system that uses AI to screen and rank resumes for job applications.',
      technologies: ['AI', 'ML', 'NLP'],
      github: '#',
      demo: '#',
      icon: '🤖',
      gradient: 'linear-gradient(45deg, #ff0080, #00f5ff)'
    },
    {
      title: 'Computer Vision Accessibility Tool',
      description: 'A tool that enables cursor movement using head gestures and eye blinks, improving accessibility for disabled users.',
      technologies: ['Computer Vision', 'AI'],
      github: '#',
      demo: '#',
      icon: '👁️',
      gradient: 'linear-gradient(45deg, #00f5ff, #ff0080)'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built with HTML and CSS to showcase my projects and skills.',
      technologies: ['HTML', 'CSS', 'Responsive'],
      github: '#',
      demo: '#',
      icon: '💼',
      gradient: 'linear-gradient(45deg, #8b5cf6, #00f5ff)'
    },
    {
      title: 'Text-to-Code Generator',
      description: 'An AI-powered application that converts natural language descriptions into executable code across multiple programming languages.',
      technologies: ['AI', 'NLP', 'Python', 'React'],
      github: '#',
      demo: '#',
      icon: '⚡',
      gradient: 'linear-gradient(45deg, #ff0080, #8b5cf6)'
    }
  ]

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
                <a href={project.github} className="neon-button" style={{
                  padding: '12px 24px',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2))',
                  border: '1px solid #00f5ff'
                }}>
                  💻 GitHub
                </a>
                
                <a href={project.demo} className="neon-button" style={{
                  padding: '12px 24px',
                  fontSize: '0.9rem',
                  background: project.gradient
                }}>
                  🚀 Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
