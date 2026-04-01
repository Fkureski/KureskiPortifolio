import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = ['home', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveTab(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      width: '100%',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      zIndex: 1000,
      transition: 'all 0.4s ease-in-out',
      ...(scrolled ? {
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      } : {
        background: 'transparent'
      })
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
    span: {
      color: 'var(--accent-blue-light)'
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    link: {
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      position: 'relative',
      paddingBottom: '0.25rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    navItemIndicator: {
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '0%',
      height: '3px',
      backgroundColor: 'var(--accent-blue-light)',
      transition: 'width 0.3s ease-in-out',
      borderRadius: '2px',
      boxShadow: '0 0 10px var(--accent-blue-light)'
    }
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav style={styles.navbar}>
      <a href="#home" style={styles.logo}>
        <span style={{ color: 'var(--text-primary)' }}>Felipe </span>
        <span style={styles.span}>Kureski</span>
      </a>
      <ul style={styles.navLinks}>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              style={{
                ...styles.link,
                color: activeTab === item.id ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => {
                const indicator = e.currentTarget.querySelector('.indicator');
                if (indicator) indicator.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                const indicator = e.currentTarget.querySelector('.indicator');
                if (indicator && activeTab !== item.id) indicator.style.width = '0%';
              }}
            >
              {item.label}
              <div
                className="indicator"
                style={{
                  ...styles.navItemIndicator,
                  width: activeTab === item.id ? '100%' : '0%'
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
