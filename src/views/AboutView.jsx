import React from 'react';
import { motion } from 'framer-motion';
import ConsultButton from '../components/ConsultButton.jsx';

const AboutView = ({ onNavigate, onContact }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', paddingBottom: '6rem' }}
    >
      {/* Hero-style Section */}
      <section style={{ position: 'relative', display: 'flex', alignItems: 'center', background: 'white', paddingTop: '100px' }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
          
          <div className="hero-content" style={{ zIndex: 10, padding: '2rem 0 4rem 0' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="responsive-title"
              style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}
            >
              Practical legal support built for SMEs
            </motion.h1>
            
            <div className="hero-body-content">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: 1.6 }}
              >
                Vanguard Legal exists to provide SMEs with clear, practical legal and compliance support that makes business sense.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: '1.15rem', color: 'var(--color-text)', lineHeight: 1.6 }}
              >
                We work closely with business owners to simplify complex legal requirements, manage risk and support confident decision-making as they grow.
              </motion.p>
            </div>
          </div>
          
          {/* Right Hero Image matching Home Hero Fade */}
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
              backgroundImage: 'url(/about.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderBottomLeftRadius: '100px'
            }}
          >
             {/* Fade into white left side to blend perfectly */}
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 30%)' }}></div>
          </motion.div>

        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flat-card"
              style={{ padding: '3rem' }}
            >
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Experience you can rely on</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.7 }}>
                With over a decade of experience advising businesses across multiple industries, we provide legal and compliance guidance that is practical, clear and commercially focused.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flat-card"
              style={{ padding: '3rem' }}
            >
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Our approach</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Practical, not theoretical', 'Proactive, not reactive', 'Clear and commercially focused'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                    <span style={{ color: 'var(--color-secondary)' }}>✔</span> {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 500, fontStyle: 'italic' }}>
                We focus on helping businesses get things right from the start — avoiding costly issues later.
              </p>
            </motion.div>
          </div>

          {/* Bottom Call to Action Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-cta-container"
            style={{ 
              marginTop: '5rem', 
              background: 'var(--color-primary)', 
              borderRadius: 'var(--radius-lg)', 
              position: 'relative',
              overflow: 'hidden',
              minHeight: '350px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)'
            }}
          >
            {/* Left side Image with Fade */}
            <div className="about-cta-image-container" style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              width: '50%', 
              height: '100%', 
              backgroundImage: 'url(/team.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              borderBottomRightRadius: '100px'
            }}>
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, var(--color-primary) 0%, rgba(15,23,42,0) 40%)' }}></div>
            </div>
            
            {/* Content properly shifted to the right half */}
            <div className="responsive-grid" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', width: '100%', gap: '4rem', padding: '4rem' }}>
               <div className="hide-on-mobile"></div> {/* Leaves left empty */}
               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                 <h3 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                   Work with a legal partner who understands your business
                 </h3>
                 <div className="hero-cta-group">
                   <ConsultButton onSelectContact={onContact} className="btn btn-teal">
                     Book a consultation
                   </ConsultButton>
                 </div>
               </div>
            </div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutView;
