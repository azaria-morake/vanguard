import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  const navigateTo = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <button onClick={() => navigateTo('home')} style={{ color: activeView === 'home' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 600, fontSize: '0.9rem' }}>Home</button>
              <button onClick={() => navigateTo('about')} style={{ color: activeView === 'about' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500, fontSize: '0.9rem' }}>About</button>
              <button onClick={() => navigateTo('services')} style={{ color: activeView === 'services' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500, fontSize: '0.9rem' }}>Services</button>
              <button onClick={() => navigateTo('contact')} style={{ color: activeView === 'contact' ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: 500, fontSize: '0.9rem' }}>Contact</button>
            </nav>
            <div style={{ borderLeft: '1px solid var(--color-border)', height: '30px' }} className="hide-on-mobile"></div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <ConsultButton onSelectContact={setContactModal} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Book Consultation</ConsultButton>
              <button onClick={() => setContactModal('whatsapp')} className="btn btn-teal" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>WhatsApp Us</button>
            </div>
          </div>
        </div>
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
