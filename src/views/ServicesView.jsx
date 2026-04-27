import React from 'react';
import { motion } from 'framer-motion';

const ServiceCategory = ({ title, desc, includes }) => (
  <div className="glass-panel" style={{ padding: '2rem', background: 'white' }}>
    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>{desc}</p>
    <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Includes:</div>
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {includes.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesView = ({ onNavigate }) => {
  const services = [
    { title: "Contract Drafting & Review", desc: "Clear, enforceable agreements that protect your business and reduce risk", includes: ["Supplier agreements", "Client contracts", "NDAs", "Shareholder agreements", "Terms and conditions"] },
    { title: "Corporate & Compliance Support", desc: "Stay compliant and avoid penalties or governance issues", includes: ["CIPC compliance", "Beneficial ownership requirements", "Corporate governance", "Regulatory compliance", "Licensing and permits"] },
    { title: "Ongoing Legal Advisory", desc: "Consistent legal support as your business grows", includes: ["Day-to-day legal queries", "Contract reviews", "Risk guidance", "Strategic input", "Compliance support"] },
    { title: "Commercial Legal Support", desc: "Structure your business relationships properly", includes: ["Partnerships and agreements", "Business structuring", "Commercial negotiations", "Transaction support", "Advisory on business arrangements"] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh', padding: '6rem 0', background: 'var(--color-bg)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Legal support for every stage of your business</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>Clear, practical legal and compliance support designed for SMEs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {services.map((svc, i) => <ServiceCategory key={i} {...svc} />)}
        </div>

        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--color-primary)', color: 'white', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Clear and transparent pricing</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {["Fixed-fee services where possible", "Upfront pricing clarity", "No unnecessary hourly billing"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.9 }}>
                  <span style={{ color: 'var(--color-secondary-light)' }}>✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Not sure where to start?</div>
            <button onClick={() => onNavigate('contact')} className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>Book a consultation</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesView;
