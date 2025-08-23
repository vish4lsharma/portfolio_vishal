import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Flutter'],
      icon: '🎨',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Microservices'],
      icon: '⚙️',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'SQL', 'Firebase'],
      icon: '🗄️',
      gradient: 'linear-gradient(45deg, #ff0080, #00f5ff)'
    },
    {
      title: 'AI/ML',
      skills: ['NLP', 'TensorFlow', 'OpenCV', 'ChatGPT API'],
      icon: '🤖',
      gradient: 'linear-gradient(45deg, #00f5ff, #ff0080)'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Postman'],
      icon: '🛠️',
      gradient: 'linear-gradient(45deg, #8b5cf6, #00f5ff)'
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'C++', 'Python', 'Dart'],
      icon: '💻',
      gradient: 'linear-gradient(45deg, #ff0080, #8b5cf6)'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Collaboration', 'Agile Methodology'],
      icon: '🧠',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    }
  ]

  return (
    <section id="skills" className="section" style={{
      background: 'linear-gradient(135deg, #111118 0%, #1a1a26 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Skills & Technologies</h2>
        
        <div className="grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card animate-scale-in" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
              animationDelay: `${index * 0.1}s`,
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: category.gradient,
                borderRadius: '50%',
                margin: '0 auto 1.5rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }} className="animate-glow">
                {category.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                background: category.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'rgba(0, 245, 255, 0.1)',
                    color: '#00f5ff',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }} onMouseOver={(e) => {
                    e.target.style.background = category.gradient
                    e.target.style.color = 'white'
                    e.target.style.transform = 'scale(1.05)'
                  }} onMouseOut={(e) => {
                    e.target.style.background = 'rgba(0, 245, 255, 0.1)'
                    e.target.style.color = '#00f5ff'
                    e.target.style.transform = 'scale(1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
