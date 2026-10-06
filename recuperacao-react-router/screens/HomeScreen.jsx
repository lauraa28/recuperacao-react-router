import './HomeScreen.css';

export default function Home() {
  return (
    <main className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            PROJECT <br />
            <span>LOREM</span>
          </h1>
          <div className="hero-controls">
            <button className="arrow-btn">←</button>
            <button className="arrow-btn">→</button>
          </div>
          <div className="hero-pagination">
            <span className="current">01</span>
            <span>/</span>
            <span>02</span>
          </div>
        </div>
        <div className="hero-image-box">
          <img src="/hero-building.jpg" alt="Architecture Project" />
          <button className="btn-read-more hero-btn">
            VIEW PROJECT
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="about-section">
        <div className="about-images">
          <img className="about-img-1" src="/about-1.jpg" alt="About 1" />
          <img className="about-img-2" src="/about-2.jpg" alt="About 2" />
          <img className="about-img-3" src="/about-3.jpg" alt="About 3" />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="btn-read-more">
            READ MORE
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      {/* 3. MAIN FOCUS / MISSION STATEMENT */}
      <section className="focus-section">
        <h2 className="section-title">Main Focus / Mission Statement</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <span className="focus-number">1</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="focus-item">
            <span className="focus-number">2</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR PROJECTS */}
      <section className="home-projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="home-projects-grid">
          <div className="home-project-card featured">
            <img src="/project-sample.jpg" alt="Sample Project" />
            <div className="featured-overlay">
              <h3>Sample Project</h3>
              <button className="btn-read-more transparent">
                VIEW MORE
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="home-project-card">
            <img src="/project-2.jpg" alt="Project 2" />
          </div>
          <div className="home-project-card">
            <img src="/project-3.jpg" alt="Project 3" />
          </div>
          <div className="home-project-card">
            <img src="/project-4.jpg" alt="Project 4" />
          </div>
          <div className="home-project-card">
            <img src="/project-5.jpg" alt="Project 5" />
          </div>
        </div>
        <div className="projects-btn-container">
          <button className="btn-read-more dark-bg">
            ALL PROJECTS
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      {/* 5. CONTACT US */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number*" required />
            <input type="email" placeholder="E-mail*" required />
            <input type="text" placeholder="Interested in" />
            <textarea placeholder="Message*" rows="4" required></textarea>
            <button type="submit" className="btn-read-more dark-bg">
              SEND EMAIL
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>
          <div className="contact-image">
            <img src="/contact-person.jpg" alt="Contact" />
          </div>
        </div>
      </section>
    </main>
  );
}