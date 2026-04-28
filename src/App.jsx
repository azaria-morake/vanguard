import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Components
import Hero from './components/Hero.jsx'
import AboutSection from './components/AboutSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import ConsultButton from './components/ConsultButton.jsx'
import WhatsAppModal from './components/WhatsAppModal.jsx'
import EmailModal from './components/EmailModal.jsx'

// Views
import AboutView from './views/AboutView.jsx'
import ServicesView from './views/ServicesView.jsx'
import ContactView from './views/ContactView.jsx'

function App() {
  const [activeView, setActiveView] = useState('home') // home, about, services, contact
  const [contactModal, setContactModal] = useState(null) // null, 'whatsapp', 'email'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredView, setHoveredView] = useState(null);

  const navigateTo = (view) => {
    setActiveView(view);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'white' }}>
      {/* Navigation matching prototype: Plain white top header with logo left, buttons right (We'll keep nav links subtly based on user request) */}
      <header
        className="flat-header"
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '1rem 0' }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            onClick={() => navigateTo('home')}
          >
            {/* Fake logo similar to prototype (V composed of lines) */}
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              V/<span style={{ color: 'var(--color-secondary)' }}>/</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary)', lineHeight: 1 }}>
              VANGUARD<br />LEGAL
            </div>
          </div>

          {/* Nav & Buttons */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hide-on-mobile">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => navigateTo(item.id)} 
                  onMouseEnter={() => setHoveredView(item.id)}
                  onMouseLeave={() => setHoveredView(null)}
                  style={{ 
                    position: 'relative',
                    color: activeView === item.id ? 'var(--color-primary)' : 'var(--color-text)', 
                    fontWeight: activeView === item.id ? 700 : 500, 
                    fontSize: '0.9rem',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s'
                  }}
                >
                  {item.label}
                  {(hoveredView === item.id || (hoveredView === null && activeView === item.id)) && (
                    <motion.div 
                      layoutId="nav-underline"
                      style={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        height: '2px', 
                        background: 'var(--color-primary)',
                        zIndex: 1
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>
            <div style={{ borderLeft: '1px solid var(--color-border)', height: '30px' }} className="hide-on-mobile"></div>
            <div style={{ display: 'flex', gap: '0.5rem' }} className="hide-on-mobile">
              <ConsultButton onSelectContact={setContactModal} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Book Consultation</ConsultButton>
              <button onClick={() => setContactModal('whatsapp')} className="btn btn-teal" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>WhatsApp Us</button>
            </div>
            
            {/* Hamburger for mobile */}
            <button 
              className="show-on-mobile" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ padding: '0.5rem', color: 'var(--color-primary)' }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ 
                background: 'white', 
                borderTop: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 0'
              }}
              className="show-on-mobile"
            >
              <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button onClick={() => navigateTo('home')} style={{ textAlign: 'left', padding: '0.75rem 0', borderBottom: '1px solid #f8f9fa', color: activeView === 'home' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 600 }}>Home</button>
                <button onClick={() => navigateTo('about')} style={{ textAlign: 'left', padding: '0.75rem 0', borderBottom: '1px solid #f8f9fa', color: activeView === 'about' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500 }}>About</button>
                <button onClick={() => navigateTo('services')} style={{ textAlign: 'left', padding: '0.75rem 0', borderBottom: '1px solid #f8f9fa', color: activeView === 'services' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500 }}>Services</button>
                <button onClick={() => navigateTo('contact')} style={{ textAlign: 'left', padding: '0.75rem 0', borderBottom: '1px solid #f8f9fa', color: activeView === 'contact' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500 }}>Contact</button>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                   <ConsultButton onSelectContact={(type) => { setContactModal(type); setIsMenuOpen(false); }} className="btn btn-primary" style={{ width: '100%' }}>Book Consultation</ConsultButton>
                   <button onClick={() => { setContactModal('whatsapp'); setIsMenuOpen(false); }} className="btn btn-teal" style={{ width: '100%' }}>WhatsApp Us</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onNavigate={navigateTo} onContact={setContactModal} />
              <AboutSection />
              <FeaturesSection />
              <Testimonials />
              <HowItWorks />
              <FinalCTA onNavigate={navigateTo} onContact={setContactModal} />
            </motion.div>
          )}

          {activeView === 'about' && <AboutView key="about" onNavigate={navigateTo} onContact={setContactModal} />}
          {activeView === 'services' && <ServicesView key="services" onNavigate={navigateTo} onContact={setContactModal} />}
          {activeView === 'contact' && <ContactView key="contact" onContact={setContactModal} />}
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} onContact={setContactModal} />

      <WhatsAppModal isOpen={contactModal === 'whatsapp'} onClose={() => setContactModal(null)} />
      <EmailModal isOpen={contactModal === 'email'} onClose={() => setContactModal(null)} />
    </div>
  )
}

export default App
