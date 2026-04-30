import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, ChevronDown } from 'lucide-react';

const EmailModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [provider, setProvider] = useState('gmail');
  const [showDropdown, setShowDropdown] = useState(false);

  const providers = [
    { id: 'gmail', label: 'Gmail' },
    { id: 'yahoo', label: 'Yahoo Mail' },
    { id: 'outlook', label: 'Outlook' },
    { id: 'default', label: 'Default Client' }
  ];

  const handleContinue = () => {
    const to = "contact@vanguardlegal.co.za";
    const subject = encodeURIComponent("Consultation Inquiry");
    const body = encodeURIComponent(message || "I would like to consult about legal services.");

    let url = "";
    if (provider === 'gmail') {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    } else if (provider === 'yahoo') {
      url = `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`;
    } else if (provider === 'outlook') {
      url = `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
    } else {
      url = `mailto:${to}?subject=${subject}&body=${body}`;
    }

    window.open(url, provider === 'default' ? '_self' : '_blank');
    onClose();
  };

  const selectedLabel = providers.find(p => p.id === provider)?.label;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
        }}>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              position: 'relative', width: '100%', maxWidth: '450px', background: 'var(--color-primary)', color: 'white',
              borderRadius: '24px', padding: '2rem 2.5rem 2.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}
          >
            <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
              <Mail size={20} color="var(--color-secondary)" />
            </div>

            <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase', opacity: 0.9, color: 'var(--color-secondary)' }}>
              Connect
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', lineHeight: 1.2, fontWeight: 500, fontFamily: 'serif' }}>
              REACH OUT VIA EMAIL
            </h2>

            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', outline: 'none' }}
              >
                <span style={{ fontSize: '1rem' }}>{selectedLabel}</span>
                <ChevronDown size={20} />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '0.5rem', background: 'white', borderRadius: '12px', overflow: 'hidden', zIndex: 10, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                  >
                    {providers.map(p => (
                      <div
                        key={p.id}
                        onClick={() => { setProvider(p.id); setShowDropdown(false); }}
                        style={{ padding: '0.8rem 1rem', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 500, borderBottom: '1px solid #eee' }}
                      >
                        {p.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your general inquiry here..."
              style={{
                width: '100%', height: '160px', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none', resize: 'none', marginBottom: '1.5rem',
                fontSize: '1rem'
              }}
            />

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleContinue}
                style={{ flex: 1, background: 'var(--color-secondary)', color: 'white', fontWeight: 600, border: 'none', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'filter 0.2s' }}
                onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseOut={e => e.currentTarget.style.filter = 'brightness(1)'}
              >
                CONTINUE TO EMAIL ↗
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(message)}
                style={{ width: '56px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
                title="Copy Message"
              >
                <Copy size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
