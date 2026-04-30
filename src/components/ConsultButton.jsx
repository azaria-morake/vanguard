import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const ConsultButton = ({ onSelectContact, children, className, style, direction = 'down' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isUp = direction === 'up';

  return (
    <div 
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        zIndex: isOpen ? 100 : 1
      }} 
      ref={containerRef}
    >
      <button 
        className={className || "btn btn-teal"} 
        style={style}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children || "Book a Consultation"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isUp ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isUp ? -10 : 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: isUp ? 'auto' : '100%',
              bottom: isUp ? '100%' : 'auto',
              left: 0,
              right: 0,
              marginTop: isUp ? '0' : '0.75rem',
              marginBottom: isUp ? '0.75rem' : '0',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-secondary)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 100,
              overflow: 'hidden'
            }}
          >
            <button 
              onClick={() => { setIsOpen(false); onSelectContact('whatsapp'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                textAlign: 'left'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(13,148,136,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center' }}>
                <MessageCircle size={20} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>WhatsApp</span>
            </button>

            {/* Themed Separator Line */}
            <div style={{ height: '1px', background: 'var(--color-secondary)', opacity: 0.2, margin: '0.25rem 0.5rem' }}></div>

            <button 
              onClick={() => { setIsOpen(false); onSelectContact('email'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                textAlign: 'left'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(13,148,136,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center' }}>
                <Mail size={20} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConsultButton;
