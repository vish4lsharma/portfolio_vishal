import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    try {
      emailjs.init('lpYRTZrExxOWDnmVO')
      
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      const result = await emailjs.send(
        'service_27g5dog',
        'template_q3k664k',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vishalsharma08555252@gmail.com',
          time: timestamp
        },
        'lpYRTZrExxOWDnmVO'
      )

      console.log('✅ Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('❌ EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'vishalsharma08555252@gmail.com',
      href: 'mailto:vishalsharma08555252@gmail.com',
      gradient: 'linear-gradient(45deg, #00f5ff, #8b5cf6)'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 6398692585',
      href: 'tel:+916398692585',
      gradient: 'linear-gradient(45deg, #8b5cf6, #ff0080)'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/vish4lsharma',
      href: 'https://github.com/vish4lsharma',
      gradient: 'linear-gradient(45deg, #ff0080, #00f5ff)'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishalsharma',
      href: 'https://linkedin.com/in/vishalsharma',
      gradient: 'linear-gradient(45deg, #00f5ff, #ff0080)'
    }
  ]

  return (
    <section id="contact" className="section" style={{
      background: 'linear-gradient(135deg, #111118 0%, #1a1a26 100%)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-slide-up">Get In Touch</h2>
        
        <div className="grid-2" style={{ gap: '4rem' }}>
          {/* Contact Info */}
          <div className="animate-slide-left">
            <div className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}>
              <h3 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #00f5ff, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Let's Connect! 🚀
              </h3>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#a0a0ab',
                textAlign: 'center',
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}>
                Ready to turn ideas into reality? Let's create something amazing together!
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'rgba(0, 245, 255, 0.05)',
                      border: '1px solid rgba(0, 245, 255, 0.2)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.borderColor = '#00f5ff'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: info.gradient,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }} className="animate-glow">
                      {info.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '0.5rem'
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        background: info.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <form onSubmit={handleSubmit} className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(255, 0, 128, 0.05))',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #8b5cf6, #ff0080)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Send Message
              </h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="animate-scale-in" style={{
                  background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2))',
                  color: '#00f5ff',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  border: '1px solid #00f5ff'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <strong>Message sent successfully!</strong>
                  <br />
                  I'll get back to you within 24-48 hours.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="animate-scale-in" style={{
                  background: 'linear-gradient(45deg, rgba(255, 0, 128, 0.2), rgba(139, 92, 246, 0.2))',
                  color: '#ff0080',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  border: '1px solid #ff0080'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❌</div>
                  <strong>Failed to send message.</strong>
                  <br />
                  Please try again or contact me directly.
                </div>
              )}

              <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(0, 245, 255, 0.05)',
                      border: '1px solid rgba(0, 245, 255, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00f5ff'
                      e.target.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 245, 255, 0.3)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(0, 245, 255, 0.05)',
                      border: '1px solid rgba(0, 245, 255, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00f5ff'
                      e.target.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 245, 255, 0.3)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(0, 245, 255, 0.05)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f5ff'
                    e.target.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 245, 255, 0.3)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(0, 245, 255, 0.05)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f5ff'
                    e.target.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 245, 255, 0.3)'
                    e.target.style.boxShadow = 'none'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="neon-button"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.2rem',
                  background: isLoading 
                    ? 'linear-gradient(45deg, #666, #888)' 
                    : 'linear-gradient(45deg, #8b5cf6, #ff0080)',
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    🚀 Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </section>
  )
}

export default Contact
