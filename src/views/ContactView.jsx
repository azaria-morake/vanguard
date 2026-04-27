import React from 'react';
import { motion } from 'framer-motion';

const ContactView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', padding: '6rem 0', background: 'var(--color-bg)' }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Let’s discuss your legal needs</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>
            Tell us about your business and we’ll guide you on the best next steps.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 500, color: 'var(--color-primary)' }}>Name</label>
              <input type="text" placeholder="Your name" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 500, color: 'var(--color-primary)' }}>Email</label>
              <input type="email" placeholder="you@company.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 500, color: 'var(--color-primary)' }}>How can we help?</label>
              <textarea rows={4} placeholder="Briefly describe your needs..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Book a Consultation</button>
          </form>

          <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--color-text)' }}>— OR —</div>

          <button className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactView;
