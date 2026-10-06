import './Projetos.css';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Sample Project',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      image: '/project-1.jpg'
    },
    {
      id: 2,
      title: 'Sample Project 2',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      image: '/project-2.jpg'
    },
    {
      id: 3,
      title: 'Sample Project 3',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      image: '/project-3.jpg'
    }
  ];

  return (
    <main className="page-container">
      <h1 className="page-title">
        Our <span>Projects</span>
      </h1>

      <div className="projects-feed">
        {projectsList.map((project) => (
          <article key={project.id} className="project-card-item">
            <div className="card-image-box">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-info-box">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <button className="btn-read-more">
                VIEW MORE
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="pagination-controls">
        <div className="pages">
          <span className="current-page">01</span>
          <span>/</span>
          <span>05</span>
        </div>
        <button className="arrow-btn">←</button>
        <button className="arrow-btn">→</button>
      </div>
    </main>
  );
}