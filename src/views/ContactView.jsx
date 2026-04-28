import React from 'react';
import { motion } from 'framer-motion';
import ConsultButton from '../components/ConsultButton.jsx';

const ContactView = ({ onContact }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hello! I'm ${name}.${email ? ` My email is ${email}.` : ''} I'm interested in: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/27123456789?text=${encodedText}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', paddingBottom: '6rem' }}
    >
      <section style={{ position: 'relative', display: 'flex', alignItems: 'center', background: 'white' }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center', padding: '6rem 0' }}>
          
          <div className="hero-content" style={{ zIndex: 10, width: '100%' }}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}
            >
              Let’s discuss your legal needs
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '3rem', maxWidth: '450px' }}
            >
              Tell us about your business and we’ll guide you on the best next steps.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flat-card" 
              style={{ padding: '2.5rem', width: '100%', maxWidth: '600px' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleWhatsAppSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Your name" 
                    required
                    style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-secondary)', outline: 'none' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="you@company.com" 
                    style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-secondary)', outline: 'none' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>How can we help?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8} 
                    placeholder="Briefly describe your needs..." 
                    required
                    style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-secondary)', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-teal" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send to WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-image-container"
            style={{ 
              height: '100%', 
              position: 'absolute', 
              right: 0, 
              top: 0, 
              width: '45%', 
              backgroundImage: 'url(/contact.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderBottomLeftRadius: '60px'
            }}
          >
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%)' }}></div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactView;
