import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlignRight, X } from 'lucide-react'

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
  // Initialize from hash or default to home
  const [activeView, setActiveView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [contactModal, setContactModal] = useState(null) // null, 'whatsapp', 'email'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredView, setHoveredView] = useState(null);

  const navigateTo = (view) => {
    setActiveView(view);
    setIsMenuOpen(false);
    window.location.hash = view;
  };

  // Sync state with hash and handle back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== activeView) {
        setActiveView(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeView]);

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

      {/* Navigation */}
      <header
        className="flat-header"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          padding: '0.75rem 5%',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}
      >
        {/* Dynamic Logo using PNG Mask */}
        <div
          className="vlegal-logo-responsive"
          onClick={() => navigateTo('home')}
          style={{ backgroundColor: 'var(--color-primary)' }}
        />


        {/* Nav & Buttons Container */}
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
            <ConsultButton
              onSelectContact={setContactModal}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              Book Consultation
            </ConsultButton>
            <button
              onClick={() => setContactModal('whatsapp')}
              className="btn btn-teal"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              WhatsApp Us
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="show-on-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ padding: '0.5rem', color: 'var(--color-primary)', zIndex: 101 }}
          >
            {isMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay & Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 99
                }}
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: '75%',
                  background: 'white',
                  boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                  zIndex: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5rem 1.5rem 2rem 1.5rem',
                  overflowY: 'auto'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        color: activeView === item.id ? 'var(--color-primary)' : 'var(--color-text)',
                        fontWeight: activeView === item.id ? 700 : 500,
                        fontSize: '1.1rem',
                        background: activeView === item.id ? 'rgba(13, 148, 136, 0.05)' : 'transparent',
                        borderColor: activeView === item.id ? 'var(--color-secondary)' : 'var(--color-border)',
                        transition: 'all 0.2s'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                    <ConsultButton
                      onSelectContact={(type) => { setContactModal(type); setIsMenuOpen(false); }}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem' }}
                    >
                      Book Consultation
                    </ConsultButton>
                    <button
                      onClick={() => { setContactModal('whatsapp'); setIsMenuOpen(false); }}
                      className="btn btn-teal"
                      style={{ width: '100%', padding: '1rem' }}
                    >
                      WhatsApp Us
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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