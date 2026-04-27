import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="section-padding" style={{ background: 'white', paddingTop: '6rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.5rem', fontWeight: 500 }}
          >
            About
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}
          >
            Practical legal expertise for growing businesses
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}
          >
            Practical legal expertise for growing businesses. Vanguard Legal provides clear, business-focused legal and compliance support to SMEs. With over a decade of experience advising businesses across a range of industries, we help clients simplify complex legal requirements, manage risk and make informed decisions as they grow.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
