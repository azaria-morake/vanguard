import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const ConsultButton = ({ onSelectContact, children, className, style }) => {
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

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={containerRef}>
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '0.5rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
              padding: '0.5rem',
              display: 'flex',
              gap: '0.5rem',
              zIndex: 100
            }}
          >
            <button 
              onClick={() => { setIsOpen(false); onSelectContact('whatsapp'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '8px',
                background: '#25D366',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              title="WhatsApp"
            >
              <MessageCircle size={24} />
            </button>
            <button 
              onClick={() => { setIsOpen(false); onSelectContact('email'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '8px',
                background: '#EA4335',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              title="Email"
            >
              <Mail size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConsultButton;
