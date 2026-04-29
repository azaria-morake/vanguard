import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = ({ onNavigate, onContact }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navGroups = [
    {
      title: 'Company',
      links: [
        { id: 'home', label: 'Home', type: 'nav' },
        { id: 'about', label: 'About Us', type: 'nav' },
        { id: 'services', label: 'Services', type: 'nav' },
      ]
    },
    {
      title: 'Support',
      links: [
        { id: 'contact', label: 'Contact Us', type: 'nav' },
        { id: 'whatsapp', label: 'WhatsApp Us', type: 'contact' },

      ]
    }
  ];

  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: '#94a3b8', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div className="responsive-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>

          <div style={{ maxWidth: '300px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => onNavigate('home')}
            >
              <div
                role="img"
                aria-label="Vanguard Legal Logo"
                style={{
                  height: '3rem',
                  width: '200px',
                  backgroundColor: '#94a3b8', // Light grey matching footer text
                  maskImage: 'url("/vlegal-transparent.png")',
                  WebkitMaskImage: 'url("/vlegal-transparent.png")',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center left',
                  // transform: 'scale(2.5)', // Compensate for source whitespace
                  transformOrigin: 'left center',
                  // marginLeft: '-1.5rem', // Pull left to compensate for whitespace
                  transition: 'opacity 0.2s',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              />
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
              Practical legal and compliance support for SMEs. Built for business owners across South Africa.
            </p>
          </div>

          <div className="responsive-grid" style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
            {navGroups.map((group, gIdx) => (
              <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                {group.links.map((link) => (
                  <button
                    key={link.id}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => link.type === 'nav' ? onNavigate(link.id) : link.type === 'contact' ? onContact(link.id) : null}
                    style={{
                      color: hoveredLink === link.id ? 'white' : 'inherit',
                      textAlign: 'left',
                      padding: '0.2rem 0',
                      transition: 'color 0.2s',
                      position: 'relative',
                      display: 'inline-block',
                      width: 'fit-content',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {link.label}
                    {hoveredLink === link.id && (
                      <motion.div
                        layoutId="footer-underline"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'white'
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{ width: '12px', height: '12px', background: 'var(--color-secondary)', borderRadius: '50%' }}></div>
            </button>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '0.8rem', opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} - Vanguard Legal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
