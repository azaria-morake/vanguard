import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flat-card"
    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white' }}
  >
    <div style={{ color: 'var(--color-secondary)', fontSize: '2rem', fontWeight: 800, lineHeight: 1, marginBottom: '-10px' }}>"</div>
    <p style={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
      {quote}
    </p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Placeholder Avatar */}
        <div style={{ width: '100%', height: '100%', background: 'var(--color-border)' }}></div>
      </div>
      <div>
        <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>{author}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text)' }}>{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    { quote: "Vanguard Legal helped us restructure a key agreement and avoid what could have become a serious dispute. The process was clear, efficient and practical.", author: "Founder", role: "SME in logistics" },
    { quote: "We needed urgent help reviewing a supplier contract. The turnaround was quick and the advice highlighted risks we hadn't considered.", author: "Director", role: "Retail business" },
    { quote: "Clear, practical advice without the legal jargon. It's like having a legal partner who understands how businesses actually work.", author: "SME owner", role: "Consulting sector" }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>Testimonials</h2>
        
        <div className="responsive-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} delay={0.1 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
