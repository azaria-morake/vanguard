import React from 'react';
import { motion } from 'framer-motion';

const AboutView = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', padding: '6rem 0' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Practical legal support built for SMEs</h1>
        
        <div className="glass-panel" style={{ padding: '3rem', margin: '3rem 0', background: 'white' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Vanguard Legal exists to provide SMEs with clear, practical legal and compliance support that makes business sense.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', lineHeight: 1.8 }}>
            We work closely with business owners to simplify complex legal requirements, manage risk and support confident decision-making as they grow.
          </p>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Experience you can rely on</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.7 }}>
            With over a decade of experience advising businesses across multiple industries, we provide legal and compliance guidance that is practical, clear and commercially focused.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Our approach</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {['Practical, not theoretical', 'Proactive, not reactive', 'Clear and commercially focused'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--color-secondary)' }}>✔</span> {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontStyle: 'italic' }}>
            We focus on helping businesses get things right from the start — avoiding costly issues later.
          </p>
        </div>

        <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Work with a legal partner who understands your business</h3>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">Book a consultation</button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutView;
