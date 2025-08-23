import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0, 245, 255, 0.2)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <nav className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 20px'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          fontFamily: 'JetBrains Mono, monospace',
          background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer'
        }} onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
          &lt;VS/&gt;
        </div>

        {/* Desktop Navigation */}
        <ul style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: '500',
                position: 'relative',
                padding: '10px 15px',
                borderRadius: '25px',
                transition: 'all 0.3s ease'
              }} onMouseOver={(e) => {
                e.target.style.color = '#00f5ff'
                e.target.style.background = 'rgba(0, 245, 255, 0.1)'
              }} onMouseOut={(e) => {
                e.target.style.color = '#ffffff'
                e.target.style.background = 'transparent'
              }}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
            border: 'none',
            borderRadius: '8px',
            padding: '10px',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && window.innerWidth <= 768 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
            padding: '2rem 0'
          }}>
            {navItems.map((item, index) => (
              <a key={index} href={item.href} style={{
                display: 'block',
                padding: '1rem 2rem',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMobileMenuOpen(false)}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 245, 255, 0.1)'
                e.target.style.color = '#00f5ff'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#ffffff'
              }}>
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
