import React from 'react'

const Education = () => {
  const education = [
    {
      year: '2022 - 2026',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'SRMSCET, Bareilly | AKTU, Lucknow',
      cgpa: 'CGPA: 8.5',
      icon: '🎓'
    },
    {
      year: '2022',
      degree: 'Intermediate',
      institution: 'Jai Narayan Saraswati Vidya Mandir',
      cgpa: '',
      icon: '📚'
    }
  ]

  return (
    <section id="education" className="section" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Education</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {education.map((edu, index) => (
            <div key={index} className="glass-card animate-slide-up" style={{
              marginBottom: '2rem',
              position: 'relative',
              paddingLeft: '80px',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
              animationDelay: `${index * 0.3}s`
            }}>
              {/* Icon */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '30px',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }} className="animate-glow">
                {edu.icon}
              </div>
              
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '44px',
                  top: '80px',
                  width: '2px',
                  height: 'calc(100% + 30px)',
                  background: 'linear-gradient(to bottom, #00f5ff, #8b5cf6)',
                  opacity: 0.5
                }}></div>
              )}
              
              <div style={{
                background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                {edu.year}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                {edu.degree}
              </h3>
              
              <p style={{
                color: '#00f5ff',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                {edu.institution}
              </p>
              
              {edu.cgpa && (
                <p style={{
                  color: '#8b5cf6',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {edu.cgpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
