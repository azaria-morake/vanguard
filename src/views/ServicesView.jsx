import React from 'react';
import { motion } from 'framer-motion';
import ConsultButton from '../components/ConsultButton.jsx';

const ServiceCategory = ({ title, desc, includes, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flat-card" 
    style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
  >
    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{desc}</p>
    <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Includes:</div>
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
      {includes.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesView = ({ onNavigate, onContact }) => {
  const services = [
    { title: "Contract Drafting & Review", desc: "Clear, enforceable agreements that protect your business and reduce risk", includes: ["Supplier agreements", "Client contracts", "NDAs", "Shareholder agreements", "Terms and conditions"] },
    { title: "Corporate & Compliance Support", desc: "Stay compliant and avoid penalties or governance issues", includes: ["CIPC compliance", "Beneficial ownership requirements", "Corporate governance", "Regulatory compliance", "Licensing and permits"] },
    { title: "Ongoing Legal Advisory", desc: "Consistent legal support as your business grows", includes: ["Day-to-day legal queries", "Contract reviews", "Risk guidance", "Strategic input", "Compliance support"] },
    { title: "Commercial Legal Support", desc: "Structure your business relationships properly", includes: ["Partnerships and agreements", "Business structuring", "Commercial negotiations", "Transaction support", "Advisory on business arrangements"] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', paddingBottom: '6rem' }}
    >
      <div style={{ 
        height: '40vh', minHeight: '300px', 
        backgroundImage: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.85)), url(/services.png)', 
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="container" style={{ textAlign: 'center', color: 'white' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}
          >
            Legal support for every stage of your business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.25rem', opacity: 0.9 }}
          >
            Clear, practical legal and compliance support designed for SMEs.
          </motion.p>
        </div>
      </div>

      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {services.map((svc, i) => <ServiceCategory key={i} {...svc} delay={0.1 * i} />)}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '5rem', 
              background: 'var(--color-primary)', 
              borderRadius: 'var(--radius-lg)', 
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)'
            }}
          >
            {/* Left side Image with Fade */}
            <div style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              width: '50%', 
              height: '100%', 
              backgroundImage: 'url(/contact.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              borderBottomRightRadius: '100px'
            }}>
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, var(--color-primary) 0%, rgba(15,23,42,0) 40%)' }}></div>
            </div>
            
            {/* Content properly shifted to the right half */}
            <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', width: '100%', gap: '4rem', padding: '4rem' }}>
               <div></div> {/* Leaves left empty */}
               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                 <h3 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                   Clear and transparent pricing
                 </h3>
                 <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {["Fixed-fee services where possible", "Upfront pricing clarity", "No unnecessary hourly billing"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1', fontSize: '1.1rem' }}>
                      <div style={{ background: 'var(--color-secondary)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem', flexShrink: 0 }}>
                        ✔
                      </div>
                      {item}
                    </li>
                  ))}
                 </ul>
                 <div style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#cbd5e1' }}>Not sure where to start? We'll guide you.</div>
                 <ConsultButton onSelectContact={onContact} className="btn btn-teal">
                   Book a consultation
                 </ConsultButton>
               </div>
            </div>

          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default ServicesView;
