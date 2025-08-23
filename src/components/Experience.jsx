import React from 'react'

const Experience = () => {
  const experiences = [
    {
      duration: '1 Month',
      title: 'AI Intern',
      company: 'Edunet Foundation | Remote',
      description: [
        'Developed an AI-based ATS analyzer, improving resume parsing accuracy by 30% using NLP techniques.',
        'Implemented NLP techniques to extract and rank key resume attributes for ATS compatibility.',
        'Optimized AI resume screening model, enhancing keyword relevance and ranking efficiency by 25%.',
        'Collaborated on AI-driven solutions to enhance job application success rates.'
      ],
      icon: '🤖',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      duration: '2 Months',
      title: 'Software Development Intern',
      company: 'Traizine Software Pvt Ltd, Noida | Paid On-site',
      description: [
        'Worked on real-world software development projects',
        'Collaborated with experienced developers and learned industry best practices',
        'Gained hands-on experience with modern development tools and frameworks',
        'Contributed to multiple client projects and improved code quality'
      ],
      icon: '💻',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    }
  ]

  return (
    <section id="experience" className="section" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Professional Experience</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card animate-slide-up" style={{
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(0, 245, 255, 0.2)',
              animationDelay: `${index * 0.3}s`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: exp.gradient,
                opacity: 0.05,
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: exp.gradient,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    flexShrink: 0
                  }} className="animate-glow">
                    {exp.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      background: exp.gradient,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      display: 'inline-block',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      {exp.duration}
                    </div>
                    
                    <h3 style={{
                      fontSize: '2rem',
                      marginBottom: '0.5rem',
                      background: exp.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '700'
                    }}>
                      {exp.title}
                    </h3>
                    
                    <p style={{
                      color: '#00f5ff',
                      fontSize: '1.2rem',
                      fontWeight: '500',
                      marginBottom: '2rem'
                    }}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="grid-2" style={{ gap: '1rem' }}>
                  {exp.description.map((item, itemIndex) => (
                    <div key={itemIndex} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(0, 245, 255, 0.05)',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 245, 255, 0.1)'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: exp.gradient,
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0
                      }}></div>
                      <p style={{
                        color: '#a0a0ab',
                        lineHeight: '1.6',
                        fontSize: '1rem'
                      }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
