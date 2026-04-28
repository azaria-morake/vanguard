import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ num, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', flex: 1, zIndex: 10 }}
  >
    <div style={{ 
      width: '50px', height: '50px', borderRadius: '50%', 
      background: 'var(--color-primary)', color: 'white', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.25rem', fontWeight: 600,
      border: '4px solid white'
    }}>
      {num}
    </div>
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', maxWidth: '180px', lineHeight: 1.4 }}>
      {title}
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>How It Works</h2>
        </div>
        
        <div className="how-steps-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Connecting Line */}
          <div style={{ 
            position: 'absolute', top: '25px', left: '15%', right: '15%', height: '1px', 
            background: 'var(--color-border)', zIndex: 0
          }} className="hide-on-mobile"></div>

          <Step num="1" title="Book a consultation" delay={0.1} />
          <Step num="2" title="Receive a clear plan with scope and pricing" delay={0.2} />
          <Step num="3" title="We handle the legal side while you focus on your business" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
