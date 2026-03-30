const Contact = () => {
  const styles = {
    section: {
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    container: {
      maxWidth: '600px',
      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)',
      padding: '4rem 2rem',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    },
    glow: {
      position: 'absolute',
      width: '100%',
      height: '4px',
      top: 0,
      left: 0,
      background: 'linear-gradient(90deg, transparent, var(--accent-blue-light), transparent)'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      color: 'var(--text-primary)'
    },
    text: {
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      marginBottom: '2.5rem'
    },
    emailBtnWrap: {
      display: 'inline-block'
    },
    emailBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '1.2rem 3rem',
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a0f1a',
      background: 'var(--accent-blue-light)',
      border: 'none',
      borderRadius: '50px',
      textDecoration: 'none',
      boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    icon: {
      width: '24px',
      height: '24px'
    },
    footerContainer: {
      marginTop: '5rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '2rem',
      width: '100%',
      textAlign: 'center'
    }
  };

  return (
    <section id="contact" style={styles.section} className="container">
      <style>
        {`
          .email-cta:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 0 30px rgba(0, 229, 255, 0.7) !important;
            background: #fff !important;
          }
        `}
      </style>
      
      <div style={styles.container}>
        <div style={styles.glow}></div>
        <h2 style={styles.title}>Let's Work Together</h2>
        <p style={styles.text}>
          Looking for a robust data pipeline architecture or a solid backend developer to scale your systems? 
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div style={styles.emailBtnWrap}>
          <a href="mailto:felipekureski@gmail.com" style={styles.emailBtn} className="email-cta">
            <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </a>
        </div>
      </div>
      
      <div style={styles.footerContainer}>
        <p>Built by Felipe Kureski. Designed for recruiters and data professionals.</p>
        <p style={{marginTop: '0.5rem', opacity: 0.6}}>© {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Contact;
