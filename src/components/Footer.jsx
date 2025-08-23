import React from 'react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: '💻', href: 'https://github.com/vish4lsharma', label: 'GitHub' },
    { icon: '💼', href: 'https://linkedin.com/in/vishalsharma', label: 'LinkedIn' },
    { icon: '📧', href: 'mailto:vishalsharma08555252@gmail.com', label: 'Email' }
  ]

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 100%)',
      borderTop: '1px solid rgba(0, 245, 255, 0.2)',
      padding: '3rem 0 1rem 0'
    }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontFamily: 'JetBrains Mono, monospace',
              background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              &lt;VS/&gt;
            </h3>
            <p style={{
              color: '#a0a0ab',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Computer Science Engineer | Full Stack Developer | AI Enthusiast
            </p>
            <p style={{
              color: '#6b7280',
              fontSize: '0.9rem'
            }}>
              SRMSCET, Bareilly | AKTU, Lucknow
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #8b5cf6, #ff0080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.8rem' }}>
                  <a href={link.href} style={{
                    color: '#a0a0ab',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    paddingLeft: '20px'
                  }} onMouseOver={(e) => {
                    e.target.style.color = '#00f5ff'
                    e.target.style.paddingLeft = '25px'
                  }} onMouseOut={(e) => {
                    e.target.style.color = '#a0a0ab'
                    e.target.style.paddingLeft = '20px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: '#8b5cf6'
                    }}>▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #ff0080, #00f5ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600'
            }}>
              Connect With Me
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(45deg, #00f5ff, #8b5cf6, #ff0080)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.1)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 245, 255, 0.4)'
                }} onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.boxShadow = 'none'
                }}>
                  {social.icon}
                </a>
              ))}
            </div>
            <p style={{
              color: '#6b7280',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.9rem'
          }}>
            © 2025 Vishal Sharma. All Rights Reserved. | Made with ❤️ and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
