import React from 'react'

const About = () => {
  const stats = [
    { number: '8.5', label: 'CGPA', icon: '🎓' },
    { number: '6+', label: 'Hackathons', icon: '🏆' },
    { number: '10+', label: 'Projects', icon: '💻' }
  ]

  return (
    <section id="about" className="section" style={{
      background: 'linear-gradient(135deg, #111118 0%, #1a1a26 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">About Me</h2>
        
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {/* Profile Image */}
          <div className="animate-slide-left">
            <div className="glass-card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1))'
            }}>
             {/* Avatar - Replace with your photo */}
<div style={{
  width: '300px',
  height: '300px',
  margin: '0 auto 2rem',
  background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
  borderRadius: '50%',
  padding: '5px',
  position: 'relative',
  animation: 'glow 3s ease-in-out infinite'
}} className="animate-glow">
  <img 
    src="vishal1.jpg"
    alt="Vishal Sharma" 
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover'
    }}
  />
</div>

              <h3 style={{
                fontSize: '2rem',
                background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
              }}>
                Vishal Sharma
              </h3>
              <p style={{ color: '#a0a0ab', fontSize: '1.1rem' }}>
               Software Developer
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-right">
            <div className="glass-card">
              <h3 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Who Am I? 🤔
              </h3>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#a0a0ab',
                marginBottom: '2rem'
              }}>
                I am a dedicated <span style={{ color: '#00f5ff', fontWeight: '600' }}>Computer Science Engineering</span> student at 
                <span style={{ color: '#8b5cf6', fontWeight: '600' }}> SRMSCET, Bareilly</span> with a CGPA of 
                <span style={{ color: '#ff0080', fontWeight: '600' }}> 8.5</span>. My journey in technology has equipped me with a 
                strong foundation in both frontend and backend development, along with expertise in AI/ML technologies.
              </p>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#a0a0ab',
                marginBottom: '2rem'
              }}>
                I have a passion for <span style={{ color: '#00f5ff', fontWeight: '600' }}>problem-solving</span> and creating 
                innovative solutions through technology. My experience includes AI development, web application design, and 
                participating in multiple hackathons where I've demonstrated my ability to work well under pressure.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {['React.js', 'Node.js', 'Python', 'AI/ML', 'Flutter'].map((tech, index) => (
                  <span key={index} style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1))',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    borderRadius: '25px',
                    color: '#00f5ff',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid-3">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card animate-scale-in" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1))',
              animationDelay: `${index * 0.2}s`
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#a0a0ab',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
