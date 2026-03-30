const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Real-time Data Pipeline',
      description: 'An enterprise-level data pipeline built with Python and Apache Kafka to process streaming data into a central data warehouse for immediate analytics. Features decoupled microservices and fault-tolerant ingestion.',
      techStack: ['Python', 'Kafka', 'SQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
      link: 'https://github.com/felipekureski'
    },
    {
      id: 2,
      title: 'Financial Analytics API',
      description: 'A robust .NET / C# backend API serving complex financial queries. Implements deep caching mechanisms, RESTful standards, and entity framework optimization handling thousands of concurrent requests.',
      techStack: ['C#', '.NET Core', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=400',
      link: 'https://github.com/felipekureski'
    },
    {
      id: 3,
      title: 'Automated ETL Framework',
      description: 'A custom Python ETL framework that extracts data from multiple disjointed REST APIs, transforms it using Pandas, and loads it into a consolidated reporting database with automated error logging.',
      techStack: ['Python', 'Pandas', 'Airflow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
      link: 'https://github.com/felipekureski'
    }
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2.5rem',
      marginTop: '2rem'
    },
    cardWrapper: {
      textDecoration: 'none',
      display: 'block',
      perspective: '1000px'
    },
    card: {
      background: 'var(--bg-secondary)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    imageContainer: {
      width: '100%',
      height: '220px',
      overflow: 'hidden',
      position: 'relative'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease'
    },
    imageOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)',
      opacity: 0.8
    },
    content: {
      padding: '2rem',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      marginBottom: '1rem'
    },
    description: {
      color: 'var(--text-secondary)',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      flexGrow: 1
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    techTag: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: 'var(--accent-blue-light)',
      padding: '0.4rem 0.8rem',
      borderRadius: '4px',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.5px'
    }
  };

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      
      <style>
        {`
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.1) !important;
            border-color: rgba(0, 229, 255, 0.3) !important;
          }
          .project-card:hover .project-img {
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={styles.grid}>
        {projectsData.map(project => (
          <a key={project.id} href={project.link} target="_blank" rel="noreferrer" style={styles.cardWrapper}>
            <div style={styles.card} className="project-card">
              <div style={styles.imageContainer}>
                <img src={project.image} alt={project.title} style={styles.image} className="project-img" />
                <div style={styles.imageOverlay}></div>
              </div>
              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.techList}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
