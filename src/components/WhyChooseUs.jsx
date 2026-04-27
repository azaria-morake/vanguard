import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    'Fixed-fee pricing — no unexpected costs',
    'Clear, practical advice without jargon',
    'Fast turnaround times',
    'Direct access to experienced legal support',
    'Solutions aligned with how SMEs actually operate'
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div>
            <div style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Why SMEs Choose Us</div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '2rem', lineHeight: 1.2 }}
            >
              Built for business owners
            </motion.h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
                >
                  <span style={{ color: 'var(--color-secondary)' }}>✔</span>
                  <span style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
          >
            <img src="/team.png" alt="Team working" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-lg)' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
