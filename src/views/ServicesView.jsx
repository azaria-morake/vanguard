import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ConsultButton from '../components/ConsultButton.jsx';

const ServiceCategory = ({ title, desc, includes, delay, isMobile }) => (
  <motion.div
    // Neutralize entrance animations on mobile for a clean swipe
    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: isMobile ? 0 : delay }}
    className="flat-card"
    style={{
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      width: isMobile ? '95%' : 'auto',
      margin: isMobile ? '0 auto' : '0', // Forces separation in the wrapper
      boxSizing: 'border-box',
      flex: 'none',
      minHeight: isMobile ? '380px' : 'auto' // Gives breathing room for the bottom list
    }}
  >
    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{desc}</p>
    <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Includes:</div>
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
      {includes.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)', flexShrink: 0 }}></div>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesView = ({ onNavigate, onContact }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    { title: "Contract Drafting & Review", desc: "Clear, enforceable agreements that protect your business and reduce risk", includes: ["Supplier agreements", "Client contracts", "NDAs", "Shareholder agreements", "Terms and conditions"] },
    { title: "Corporate & Compliance Support", desc: "Stay compliant and avoid penalties or governance issues", includes: ["CIPC compliance", "Beneficial ownership requirements", "Corporate governance", "Regulatory compliance", "Licensing and permits"] },
    { title: "Ongoing Legal Advisory", desc: "Consistent legal support as your business grows", includes: ["Day-to-day legal queries", "Contract reviews", "Risk guidance", "Strategic input", "Compliance support"] },
    { title: "Commercial Legal Support", desc: "Structure your business relationships properly", includes: ["Partnerships and agreements", "Business structuring", "Commercial negotiations", "Transaction support", "Advisory on business arrangements"] }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);

    if (newIndex !== activeIdx) {
      setActiveIdx(newIndex);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh' }}
    >
      <section className="hero-section-fix" style={{ position: 'relative', display: 'flex', background: 'var(--color-primary-dark)', overflow: 'hidden' }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', minHeight: '40vh', padding: '0 0 4rem 0' }}>
          <div className="hero-content" style={{ zIndex: 10, textAlign: 'left', color: 'white', paddingTop: '2rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: '3rem', marginBottom: '1rem', marginTop: '0rem', color: 'white' }}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-image-container"
            style={{
              position: 'absolute', right: 0, top: 0, height: '100%', width: '45%',
              backgroundImage: 'url(/services.png)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderBottomLeftRadius: '60px'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-primary-dark) 0%, rgba(15,23,42,0) 25%)' }}></div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-bg)', paddingBottom: 0 }}>
        <div className="container">

          {/* --- DESKTOP LAYOUT --- */}
          <div className="hide-on-mobile responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {services.map((svc, i) => <ServiceCategory key={i} {...svc} delay={0.1 * i} />)}
          </div>

          {/* --- MOBILE LAYOUT --- */}
          <div className="mobile-only-layout" style={{ width: '100%', marginBottom: '5rem' }}>
            <div ref={scrollRef} onScroll={handleScroll} className="mobile-features-carousel">
              {services.map((svc, i) => (
                <div key={i} className="mobile-square-card-wrapper">
                  <ServiceCategory {...svc} isMobile={true} delay={0} />
                </div>
              ))}
            </div>

            <div className="mobile-carousel-dots">
              {services.map((_, idx) => (
                <div
                  key={idx}
                  className={`mobile-dot ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => {
                    if (scrollRef.current) {
                      const target = scrollRef.current.children[idx];
                      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Full-width CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-cta-container"
          style={{
            marginTop: '0', // Removed large top margin to sit closer to the grid/carousel
            background: 'var(--color-primary)',
            position: 'relative',
            overflow: 'visible',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Background Clipping Container */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {/* Left side Image - Fixed width on desktop to prevent overlap */}
            <div className="about-cta-image-container hide-on-mobile" style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '40%',
              height: '100%',
              backgroundImage: 'url(/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'left center'
            }}>
              {/* Strong gradient to fade into dark background */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0) 60%, var(--color-primary) 100%)' }}></div>
            </div>

            {/* Mobile Image - Full width top background */}
            <div className="about-cta-image-container show-on-mobile" style={{
              position: 'relative',
              width: '100%',
              height: '250px',
              backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.25)), url(/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-primary) 0%, rgba(15,23,42,0) 50%)' }}></div>
            </div>
          </div>

          {/* Content properly aligned to the grid container */}
          <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem' }}>
              <div className="hide-on-mobile"></div> {/* Leaves left empty */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '4rem var(--spacing-6)' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Clear and transparent pricing
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {["Fixed-fee services where possible", "Upfront pricing clarity", "No unnecessary hourly billing"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1', fontSize: '1.15rem' }}>
                      <div style={{ background: 'var(--color-secondary)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem', flexShrink: 0 }}>
                        ✔
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#cbd5e1' }}>Not sure where to start? We'll guide you.</div>
                <div className="hero-cta-group">
                  <ConsultButton onSelectContact={onContact} className="btn btn-teal" direction="up" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                    Book a consultation
                  </ConsultButton>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>
    </motion.div>
  );
};

export default ServicesView;