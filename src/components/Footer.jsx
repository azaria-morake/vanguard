import React from 'react';

const Footer = ({ onNavigate, onContact }) => {
  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: '#94a3b8', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
                V/<span style={{ color: 'var(--color-secondary)' }}>/</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', lineHeight: 1 }}>
                VANGUARD<br/>LEGAL
              </div>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
              Practical legal and compliance support for SMEs. Built for business owners across South Africa.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <button onClick={() => onNavigate('home')} style={{ color: 'inherit', textAlign: 'left', padding: 0 }}>Home</button>
              <button onClick={() => onNavigate('about')} style={{ color: 'inherit', textAlign: 'left', padding: 0 }}>About Us</button>
              <button onClick={() => onNavigate('contact')} style={{ color: 'inherit', textAlign: 'left', padding: 0 }}>Contact Us</button>
              <button onClick={() => onContact('whatsapp')} style={{ color: 'inherit', textAlign: 'left', padding: 0 }}>WhatsApp Us</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <span style={{ cursor: 'pointer' }}>Login</span>
              <button onClick={() => onNavigate('contact')} style={{ color: 'inherit', textAlign: 'left', padding: 0 }}>Contact</button>
              <span style={{ cursor: 'pointer' }}>Fonts</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '15px', height: '15px', background: 'var(--color-secondary)', borderRadius: '50%' }}></div> {/* Generic logo replacement */}
            </div>
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
