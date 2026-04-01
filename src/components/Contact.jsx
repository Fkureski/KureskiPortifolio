import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg('');

    emailjs.sendForm('service_qxifjvf', 'template_5gtvns3', form.current, 'fQA4QHKnorF3sab9p')
      .then((result) => {
        setIsSending(false);
        setStatusMsg('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        setIsSending(false);
        setStatusMsg('Failed to send the message. Please try again.');
        console.log(error.text);
      });
  };

  const styles = {
    section: {
      padding: '5rem 0',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: '900px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)',
      padding: '4rem',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    },
    '@media (max-width: 768px)': {
      container: {
        gridTemplateColumns: '1fr',
        gap: '2rem',
        padding: '2rem'
      }
    },
    glow: {
      position: 'absolute',
      width: '100%',
      height: '4px',
      top: 0,
      left: 0,
      background: 'linear-gradient(90deg, transparent, var(--accent-blue-light), transparent)'
    },
    leftCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      color: 'var(--text-primary)'
    },
    subtitle: {
      fontSize: '1.2rem',
      fontWeight: '500',
      color: 'var(--text-primary)',
      marginBottom: '1.5rem'
    },
    text: {
      color: 'var(--text-secondary)',
      fontSize: '1rem',
      lineHeight: '1.7',
      marginBottom: '2rem'
    },
    contactInfo: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      color: 'var(--text-secondary)'
    },
    icon: {
      width: '20px',
      height: '20px',
      color: 'var(--text-primary)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textAlign: 'left'
    },
    label: {
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '0.8rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: 'var(--text-primary)',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '0.8rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: 'var(--text-primary)',
      fontSize: '1rem',
      outline: 'none',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    submitBtn: {
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0a0f1a',
      background: 'var(--accent-blue-light)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      alignSelf: 'flex-start'
    },
    footerContainer: {
      marginTop: '5rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '2rem',
      width: '100%',
      textAlign: 'center'
    },
    status: {
      marginTop: '1rem',
      fontSize: '0.9rem',
      color: statusMsg.includes('success') ? '#4ade80' : '#f87171'
    }
  };

  return (
    <section id="contact" style={styles.section} className="container">
      <style>
        {`
          .contact-input:focus {
            border-color: var(--accent-blue-light) !important;
          }
          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
            background: #fff !important;
          }
          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          @media (max-width: 768px) {
            .contact-inner-content {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
              padding: 2rem !important;
            }
          }
        `}
      </style>

      <div style={styles.container} className="contact-inner-content">
        <div style={styles.glow}></div>

        <div style={styles.leftCol}>
          <h2 style={styles.title}>Get in Touch</h2>
          <p style={styles.subtitle}>I'd like to hear from you!</p>
          <p style={styles.text}>
            If you have any inquiries or just want to say hi, please use the contact form! Whether it's a new opportunity, a question about data engineering, or a quick chat, I'm just a click away.
          </p>

          <div style={styles.contactInfo}>
            <div style={styles.infoRow}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>felipekureski@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="user_email"
                required
                style={styles.input}
                className="contact-input"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                required
                style={styles.textarea}
                className="contact-input"
              />
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              className="submit-btn"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
            {statusMsg && <div style={styles.status}>{statusMsg}</div>}
          </form>
        </div>
      </div>

      <div style={styles.footerContainer}>
        <p>Built by Felipe Kureski. Designed for recruiters and data professionals.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>© {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Contact;
