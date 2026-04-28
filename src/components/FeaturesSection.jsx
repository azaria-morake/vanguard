import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, Calendar, BarChart2 } from 'lucide-react';

const HelpCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
    style={{ 
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem', 
      alignItems: 'flex-start',
      aspectRatio: '1 / 1',
      justifyContent: 'center',
      background: 'white',
      border: '1px solid var(--color-secondary)',
      borderRadius: '16px' 
    }}
  >
    <div style={{ 
      background: 'rgba(13, 148, 136, 0.1)', 
      width: '60px',
      height: '60px',
      borderRadius: '50%', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
      flexShrink: 0
    }}>
      <Icon size={28} color="var(--color-secondary)" />
    </div>
    <div>
      <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{desc}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  const cards = [
    { icon: FileText, title: 'Contracts', desc: 'Clear, enforceable agreements that reduce disputes and risk.' },
    { icon: Gavel, title: 'Compliance', desc: 'Stay on top of legal obligations without complexity.' },
    { icon: Calendar, title: 'Advisory', desc: 'Practical guidance when you need it most.' },
    { icon: BarChart2, title: 'Strategy', desc: 'Helping you make decisions, not just interpret the law.' }
  ];

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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)', gap: '4rem', alignItems: 'stretch' }}>
          
          {/* Left Column: How We Help (Square Cards) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2.5rem' }}>How We Help</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem',
              alignContent: 'start',
              flexGrow: 1
            }}>
              {cards.map((card, idx) => (
                <HelpCard key={idx} {...card} delay={0.1 * idx} />
              ))}
            </div>
          </div>

          {/* Full Height Center Separator */}
          <div style={{ width: '1px', background: 'var(--color-secondary)', height: '100%', opacity: 0.5 }} className="hide-on-mobile"></div>

          {/* Right Column: Why Choose Us (Inside Bordered Card) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2.5rem' }}>Why SMEs Choose Us</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ 
                background: 'white',
                border: '1px solid var(--color-secondary)',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '2.5rem', lineHeight: 1.2 }}>
                Built for business owners
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {reasons.map((reason, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                  >
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', 
                      background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'var(--color-secondary)' }}>✔</span>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: 500 }}>{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
