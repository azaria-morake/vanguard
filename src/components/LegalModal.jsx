import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = React.useRef(null);

  const toggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      // Small delay to allow height animation to start and layout to shift
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  return (
    <div ref={contentRef} style={{ borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <button
        onClick={toggle}
        style={{
          width: '100%',
          padding: '1.25rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--color-secondary)', flexShrink: 0 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{ padding: '0 0 1.5rem 0', color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LegalModal = ({ isOpen, onClose, type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'PRIVACY POLICY' : 'TERMS AND CONDITIONS OF USE';
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '0.5rem' : '1rem'
        }}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(2, 6, 23, 0.4)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              background: 'white',
              borderRadius: isMobile ? '24px' : '32px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden' // Keep the corners clean
            }}
          >
            {/* Header */}
            <div style={{
              padding: isMobile ? '1.25rem 1.5rem' : '1.5rem 2.5rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'white',
              zIndex: 10,
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1.5rem', flex: 1, minWidth: 0 }}>
                <div
                  className="vlegal-logo-responsive"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    height: isMobile ? '1.2rem' : '1.8rem',
                    width: isMobile ? '80px' : '120px',
                    marginLeft: 0,
                    cursor: 'default',
                    flexShrink: 0
                  }}
                />
                <div style={{ height: '24px', width: '1px', background: 'var(--color-border)', flexShrink: 0 }} />
                <h2 style={{ 
                  fontSize: isMobile ? '0.6rem' : '1rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.02em', 
                  color: 'var(--color-primary)',
                  whiteSpace: 'normal',
                  lineHeight: 1.1,
                  flex: 1,
                  minWidth: 0
                }}>
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--color-bg)',
                  color: 'var(--color-primary)',
                  transition: 'all 0.2s',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0,
                  padding: 0
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'var(--color-bg)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div 
              className="legal-content-scroll"
              style={{
                padding: isMobile ? '1.5rem' : '2.5rem 2.5rem 2.5rem 2.5rem',
                overflowY: 'auto',
                flex: 1,
                marginRight: '2px' // Minimal inset
              }}
            >
              {isPrivacy ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500, color: 'var(--color-primary)' }}>
                    This Privacy Policy is part of the Website Terms and Conditions of Use. By using this Website, you agree to comply with the terms outlined here. If you disagree with any part of this Privacy Policy, you must immediately discontinue your use of the Website.
                  </p>
                  
                  <Accordion title="Definitions">
                    <p>In this document, the following terms are defined as:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <li><strong>Personal Information</strong> as per the definition in the Protection of Personal Information Act (POPI).</li>
                      <li><strong>POPI</strong> refers to the Protection of Personal Information Act No. 4 of 2013.</li>
                      <li><strong>Process</strong> means the collection, organization, storage, alteration, retrieval, reference, distribution, or deletion of Personal Information, as defined under POPI.</li>
                      <li><strong>Us, we, or our</strong> refers to Vanguard Legal Solutions (Pty) Ltd, a company registered under the laws of the Republic of South Africa.</li>
                      <li><strong>Website</strong> refers to the online platform located at www.vanguardlegal.co.za.</li>
                      <li><strong>You or the user</strong> refers to anyone who accesses or uses this Website for any purpose.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="Status and Amendments">
                    <p>We understand the importance of protecting your privacy. This Privacy Policy outlines how we handle your information on this Website.</p>
                    <p style={{ marginTop: '0.5rem' }}>This Privacy Policy is integrated into our Website Terms and Conditions. If you disagree with any part of this policy, you must stop using the Website immediately.</p>
                    <p style={{ marginTop: '0.5rem' }}>We reserve the right to modify this Privacy Policy at any time without prior notice. It is your responsibility to stay informed about any changes. You can refer to the latest revision date at the top of this document. Your continued use of the Website after changes are made constitutes your acceptance of the updated Privacy Policy.</p>
                  </Accordion>

                  <Accordion title="Collection and Processing of Personal Information">
                    <p>When you submit Personal Information through the Website, the following principles apply:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <li>We will only collect Personal Information for a purpose directly related to its intended use. The specific purpose for which the information is collected will be clear at the time of request.</li>
                      <li>We will only process Personal Information in a manner that is relevant and not excessive for the purpose it was collected.</li>
                      <li>Personal Information will only be used for the intended purpose, unless you give us consent to use it for a different purpose or as permitted by POPI or other applicable laws.</li>
                      <li>We will not disclose your Personal Information to third parties without your written consent, unless required by law.</li>
                      <li>Any Personal Information that is no longer needed for its original purpose will be deleted or destroyed.</li>
                      <li>You may access and update your Personal Information stored by us at any time by contacting us at contact@vanguardlegal.co.za.</li>
                      <li>In accordance with POPI, we may compile statistical profiles based on collected Personal Information. These profiles will not include any personally identifiable details.</li>
                      <li>We may use your Personal Information to provide customer service or to inform you about services that may be of interest. If you do not wish to receive marketing communications, you may unsubscribe by following the instructions provided in our emails.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="Collection of Anonymous Data">
                    <p>We may collect anonymous data about the usage of this Website through standard technologies that do not identify individual users but help us gather statistical data.</p>
                    <p style={{ marginTop: '0.5rem' }}>We may use temporary or session cookies to track user activity on the Website and record visits to other websites. Other websites may also use these cookies to track your browsing behavior.</p>
                    <p style={{ marginTop: '0.5rem' }}>Cookies alone do not personally identify users, but they may be used to generate aggregated statistics or to assess the performance of the Website.</p>
                    <p style={{ marginTop: '0.5rem' }}>The following types of data may be collected when cookies are enabled:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <li>Browser type;</li>
                      <li>IP address;</li>
                      <li>Time and date of visits;</li>
                      <li>URLs of visited internal pages;</li>
                      <li>Referring websites or search engines.</li>
                    </ul>
                    <p style={{ marginTop: '0.5rem' }}>You can configure your browser to block cookies, but doing so may limit your ability to access certain features of the Website.</p>
                  </Accordion>

                  <Accordion title="Security">
                    <p>We will take all reasonable and necessary technical and organizational measures to protect the information you submit to or collect from this Website, including protection from loss, misuse, unauthorized access, alteration, or destruction.</p>
                    <p style={{ marginTop: '0.5rem' }}>If we become aware of a security breach affecting your Personal Information, we will make reasonable efforts to notify you.</p>
                  </Accordion>

                  <Accordion title="Links to Other Websites">
                    <p>We have no control over the privacy practices of third-party websites linked from this Website. We strongly encourage you to review the privacy policies of any third-party websites you visit.</p>
                  </Accordion>

                  <Accordion title="Queries">
                    <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at contact@vanguardlegal.co.za.</p>
                  </Accordion>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-primary)' }}>
                    Accessing and using this Website is governed by the terms and conditions outlined below. By utilizing this Website, you agree to comply with all the terms and conditions of use, as well as any privacy or other policies that may be referenced elsewhere on the site. If you do not agree with any of these terms, you must stop using this Website immediately.
                  </p>

                  <Accordion title="Definitions and Interpretation">
                    <ul style={{ paddingLeft: '1.5rem' }}>
                      <li><strong>“We”, “us”, or “our”</strong> refers to Vanguard Legal Solutions (Pty) Ltd, a company incorporated under the laws of the Republic of South Africa.</li>
                      <li><strong>“You” or “the user”</strong> refers to any individual who accesses this Website for any purpose.</li>
                      <li><strong>“Website”</strong> refers to the online platform located at www.vanguardlegal.co.za.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="Use of the Website">
                    <p>By accessing and using this Website, you agree to comply with these terms and conditions. Your agreement is considered to be effective from the moment you first visit the Website.</p>
                    <p style={{ marginTop: '0.5rem' }}>If you do not agree with these terms and conditions, you must immediately stop using the Website.</p>
                    <p style={{ marginTop: '0.5rem' }}>These terms and conditions include our Privacy Policy, which is incorporated by reference.</p>
                    <p style={{ marginTop: '0.5rem' }}>We reserve the right to modify these terms and conditions without prior notice. You are responsible for staying informed about any updates, which are indicated by the revision date at the top of this document. Continuing to use the Website after such changes constitutes your acceptance of the revised terms.</p>
                  </Accordion>

                  <Accordion title="Content">
                    <p>All information provided on this Website is offered “as is” without any guarantees, either express or implied, unless required by law.</p>
                    <p style={{ marginTop: '0.5rem' }}>The content and information available here serve as a summary of relevant legal matters and are intended as general guidance. This is not to be considered as legal advice. It is recommended that you verify the information independently.</p>
                    <p style={{ marginTop: '0.5rem' }}>You should not act based on the information on this Website without confirming its accuracy and seeking professional advice if necessary.</p>
                    <p style={{ marginTop: '0.5rem' }}>The content of the Website does not create a business relationship between us and the user. Using the Website does not establish an attorney-client relationship.</p>
                    <p style={{ marginTop: '0.5rem' }}>You use this Website and its content at your own risk, and we make no guarantees regarding the accuracy of the information provided.</p>
                    <p style={{ marginTop: '0.5rem' }}>We do not guarantee the uninterrupted operation of the Website, nor that it will be free from errors or viruses. You assume all responsibility for any damage or loss of data that may result from using this Website.</p>
                  </Accordion>

                  <Accordion title="Third-Party Websites">
                    <p>This Website may contain links to third-party sites. We are not responsible for the content of those sites and do not endorse or approve any information provided on them.</p>
                    <p style={{ marginTop: '0.5rem' }}>We are not liable for any issues arising from the use of third-party websites linked to this Website, whether or not those links were authorized. The inclusion of a link does not imply our endorsement or affiliation with the third party.</p>
                  </Accordion>

                  <Accordion title="Intellectual Property">
                    <p>Unless stated otherwise, all intellectual property rights in the Website’s content, including text, graphics, audio, video, and software, are owned by us. Accessing the Website does not transfer any ownership rights to you.</p>
                    <p style={{ marginTop: '0.5rem' }}>You are permitted to view, download, and print content from the Website for personal use or professional purposes related to legal practice, provided you do not alter the content. You must acknowledge the source as www.vanguardlegal.co.za. We may revoke this permission at any time.</p>
                    <p style={{ marginTop: '0.5rem' }}>Commercial use of the Website’s content is prohibited. You may not reproduce, redistribute, or integrate any material from the Website into other products or websites without explicit permission.</p>
                  </Accordion>

                  <Accordion title="Linking, Framing, and Crawling">
                    <p>You must obtain our written consent before linking to any page of the Website, other than the homepage. If permitted, you must ensure that users are informed of these terms and conditions. Requests for permission can be sent to contact@vanguardlegal.co.za.</p>
                    <p style={{ marginTop: '0.5rem' }}>We reserve the right to withdraw permission to link to the Website at any time.</p>
                    <p style={{ marginTop: '0.5rem' }}>Framing of the Website or its content requires prior written consent. Requests can be made via contact@vanguardlegal.co.za.</p>
                    <p style={{ marginTop: '0.5rem' }}>Except for legitimate search engine purposes, you may not use web crawlers or similar technologies to extract content from the Website without our prior consent.</p>
                  </Accordion>

                  <Accordion title="Security">
                    <p>We will take legal action against anyone who attempts to deliver harmful code to the Website or gain unauthorized access to it.</p>
                    <p style={{ marginTop: '0.5rem' }}>While we implement reasonable security measures, we cannot guarantee that the Website will be free from malicious use or destructive code, and we are not liable for any resulting damage.</p>
                  </Accordion>

                  <Accordion title="Personal Information">
                    <p>Further details on how we handle your personal information can be found in our Privacy Policy.</p>
                  </Accordion>

                  <Accordion title="Disclaimer and Indemnity">
                    <p>We disclaim all liability for any loss or damage—whether direct, indirect, or consequential—resulting from the use or inability to use the Website, including errors or outdated information, even if such loss was foreseeable. This includes, but is not limited to, loss of profits or goodwill.</p>
                    <p style={{ marginTop: '0.5rem' }}>You agree to indemnify and hold us harmless from any legal claims, including attorney’s fees and related costs, arising from your use of the Website.</p>
                  </Accordion>

                  <Accordion title="Jurisdiction">
                    <p>These terms and conditions are governed by the laws of the Republic of South Africa. Any disputes arising from the use of this Website shall be subject to the exclusive jurisdiction of the South African courts.</p>
                  </Accordion>

                  <Accordion title="General">
                    <p>These terms and conditions represent the full agreement between us and the user regarding the use of this Website.</p>
                    <p style={{ marginTop: '0.5rem' }}>If any provision is found to be invalid, the remaining provisions will still be in full effect.</p>
                    <p style={{ marginTop: '0.5rem' }}>A failure to exercise any right under these terms does not waive that right unless explicitly stated in writing.</p>
                    <p style={{ marginTop: '0.5rem' }}>Hyperlinks within these terms to other documents, while part of these terms, will not affect their validity even if some links are non-functional.</p>
                  </Accordion>
                </div>
              )}
            </div>

            {/* Footer gradient fade */}
            <div style={{
              height: '40px',
              background: 'linear-gradient(to top, white, transparent)',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              pointerEvents: 'none',
              zIndex: 3
            }} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
