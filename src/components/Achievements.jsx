import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon (SIH) 2023',
      position: 'Waiting List Runner-Up',
      icon: '🏆',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      title: 'UCER Prayagraj Hackathon',
      position: 'Most Scalable Solution',
      icon: '🥇',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    },
    {
      title: 'SRMS CET Hackathon 1 & 2',
      position: 'Winner',
      icon: '🏆',
      gradient: 'linear-gradient(45deg, #ff0080, #00f5ff)'
    }
  ]

  const certifications = [
    'Core Java under Industry Academia Interaction Program by Softpro India',
    'Livewire Certificate Artificial Intelligence and Machine Learning',
    'Certificate of Participation in Level 1: E-Commerce',
    'AWS APAC - Solutions Architecture Job Simulation',
    'Accenture North America - Data Analytics and Visualization Job Simulation'
  ]

  const competencies = [
    'Data Structures',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering'
  ]

  return (
    <section id="achievements" className="section" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Achievements & Certifications</h2>
        
        {/* Achievements */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            🏆 Hackathons & Competitions
          </h3>
          
          <div className="grid-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card animate-scale-in" style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: achievement.gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  margin: '0 auto 2rem auto'
                }} className="animate-glow">
                  {achievement.icon}
                </div>
                
                <h4 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>
                  {achievement.title}
                </h4>
                
                <p style={{
                  background: achievement.gradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  {achievement.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #8b5cf6, #ff0080)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            📜 Certifications
          </h3>
          
          <div className="glass-card animate-slide-up" style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(255, 0, 128, 0.05))',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              {certifications.map((cert, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.borderColor = '#8b5cf6'
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(45deg, #8b5cf6, #ff0080)',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}></div>
                  <p style={{
                    color: '#a0a0ab',
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #ff0080, #00f5ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            🧠 Core Competencies
          </h3>
          
          <div className="grid-4">
            {competencies.map((competency, index) => (
              <div key={index} className="glass-card animate-scale-in" style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.05), rgba(0, 245, 255, 0.05))',
                border: '1px solid rgba(255, 0, 128, 0.2)',
                animationDelay: `${index * 0.1}s`
              }}>
                <h4 style={{
                  background: 'linear-gradient(45deg, #ff0080, #00f5ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {competency}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
