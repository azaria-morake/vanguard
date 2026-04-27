import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, Calendar, BarChart2 } from 'lucide-react';

const HelpCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.4, delay }}
    className="flat-card"
    style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
  >
    <div style={{ flexShrink: 0 }}>
      <Icon size={32} color="var(--color-secondary)" />
    </div>
    <div>
      <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>{desc}</p>
    </div>
  </motion.div>
);

const HowWeHelp = () => {
  const cards = [
    { icon: FileText, title: 'Contracts', desc: 'Clear, enforceable agreements that reduce disputes and risk.' },
    { icon: Gavel, title: 'Gavel', desc: 'Stay on top of legal obligations without complexity.' },
    { icon: Calendar, title: 'Calendar', desc: 'Practical guidance when you need it.' },
    { icon: BarChart2, title: 'Graph', desc: 'Helping you make decisions, not just interpret the law.' }
  ];

  return (
    <section className="section-padding" style={{ background: 'white', paddingTop: '1rem' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>How We Help</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', 
          gap: '1.5rem' 
        }}>
          {cards.map((card, idx) => (
            <HelpCard key={idx} {...card} delay={0.1 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
