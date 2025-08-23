import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [particles, setParticles] = useState([])
  
  const roles = [
    'Computer Science Student',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver'
  ]

  useEffect(() => {
    // Generate particles
    const particleArray = []
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 10 + 's',
        animationDuration: (Math.random() * 3 + 10) + 's'
      })
    }
    setParticles(particleArray)

    // Role rotation
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: `
        radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #1a1a26 100%)
      `,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Particles */}
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="animate-float" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2))',
        borderRadius: '50%',
        filter: 'blur(1px)'
      }}></div>

      <div className="animate-float" style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(255, 0, 128, 0.2), rgba(0, 245, 255, 0.2))',
        borderRadius: '30%',
        filter: 'blur(1px)',
        animationDelay: '2s'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center' }}>
          {/* Avatar */}
          <div className="animate-scale-in" style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 2rem',
            background: 'linear-gradient(45deg, #00f5ff, #8b5cf6, #ff0080)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            fontWeight: 'bold',
            position: 'relative',
            animation: 'glow 3s ease-in-out infinite'
          }}>
            <div style={{
              background: '#111118',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00f5ff'
            }}>
              VS
            </div>
          </div>

          {/* Greeting */}
          <div className="animate-slide-up" style={{
            fontSize: '1.5rem',
            color: '#a0a0ab',
            marginBottom: '1rem',
            animationDelay: '0.2s'
          }}>
            Hi, I'm
          </div>

          {/* Name */}
          <h1 className="animate-slide-up section-title" style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            marginBottom: '2rem',
            animationDelay: '0.4s'
          }}>
            Vishal Sharma
          </h1>

          {/* Role */}
          <div className="animate-slide-up" style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '2rem',
            animationDelay: '0.6s'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600'
            }}>
              {roles[currentRole]}
            </span>
            <span style={{
              borderRight: '3px solid #00f5ff',
              marginLeft: '5px',
              animation: 'blink 1s infinite'
            }}></span>
          </div>

          {/* Description */}
          <p className="animate-slide-up" style={{
            fontSize: '1.2rem',
            color: '#a0a0ab',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
            animationDelay: '0.8s'
          }}>
            I'm passionate about developing innovative solutions with AI/ML, web development,
            and mobile applications. Currently pursuing my BTech at SRMSCET, Bareilly.
          </p>

          {/* Buttons */}
          <div className="animate-slide-up" style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animationDelay: '1s'
          }}>
            <button 
              className="neon-button"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 View Projects
            </button>
            <button 
              className="neon-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'linear-gradient(45deg, #8b5cf6, #ff0080)' }}
            >
              💬 Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
