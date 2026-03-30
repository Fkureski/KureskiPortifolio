const Hero = () => {
  const styles = {
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '3rem',
    },
    backgroundGlow: {
      position: 'absolute',
      top: '-20%',
      left: '-10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
      filter: 'blur(50px)',
      zIndex: -1,
      animation: 'pulseGlow 8s infinite alternate'
    },
    content: {
      flex: '1 1 500px',
      zIndex: 1,
    },
    imageWrapper: {
      flex: '1 1 300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    profileImage: {
      width: '100%',
      maxWidth: '380px',
      aspectRatio: '1/1',
      objectFit: 'cover',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 229, 255, 0.15)',
      transform: 'rotate(2deg)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    },
    greeting: {
      fontSize: '1.5rem',
      color: 'var(--accent-blue-light)',
      fontWeight: '600',
      marginBottom: '1rem',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    },
    title: {
      fontSize: '4.5rem',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
      color: 'var(--text-primary)'
    },
    gradientText: {
      background: 'linear-gradient(90deg, var(--accent-blue-light), var(--accent-blue-dark))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: 'var(--text-secondary)',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      maxWidth: '600px'
    },
    highlight: {
      color: 'var(--text-primary)',
      fontWeight: '600'
    },
    ctaWrap: {
      display: 'flex',
      gap: '1.5rem'
    },
    ctaPrimary: {
      padding: '1rem 2.5rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#fff',
      background: 'linear-gradient(45deg, var(--accent-blue), var(--accent-blue-dark))',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    ctaSecondary: {
      padding: '1rem 2.5rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'var(--text-primary)',
      background: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background 0.3s ease, border-color 0.3s ease'
    }
  };

  return (
    <section id="home" className="section container" style={styles.heroSection}>
      <div style={styles.backgroundGlow}></div>
      <style>
        {`
          @keyframes pulseGlow {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.3); opacity: 1; }
          }
          .cta-btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6) !important;
          }
          .cta-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.05) !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
          }
          .hero-img-wrap:hover .hero-img {
            transform: rotate(0deg) scale(1.02) !important;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 229, 255, 0.3) !important;
          }
        `}
      </style>
      
      <div style={styles.imageWrapper} className="animate-fade-in hero-img-wrap">
        <img 
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600&h=600" 
          alt="Felipe Profile Placeholder" 
          style={styles.profileImage} 
          className="hero-img"
        />
      </div>

      <div style={styles.content} className="animate-fade-in">
        <h3 style={styles.greeting}>Hi, I'm Felipe</h3>
        <h1 style={styles.title}>
          I engineer robust <br />
          <span style={styles.gradientText}>Data Solutions</span> &<br />
          Back-end Systems
        </h1>
        <p style={styles.subtitle}>
          I'm a specialized <span style={styles.highlight}>Data Engineer</span> and <span style={styles.highlight}>Python Developer</span>, 
          with strong capabilities in <span style={styles.highlight}>C# / .NET</span>. I design scalable architectures, 
          build reliable data pipelines, and craft efficient APIs that drive business decisions.
        </p>
        <div style={styles.ctaWrap}>
          <a href="#projects" style={styles.ctaPrimary} className="cta-btn-primary">View My Work</a>
          <a href="#contact" style={styles.ctaSecondary} className="cta-btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
