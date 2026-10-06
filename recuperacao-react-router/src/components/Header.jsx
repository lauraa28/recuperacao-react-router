import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>DIGITAL PROJECT</h2>
      </div>
      <nav className="nav-links">
        <Link to="/">MAIN</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/certifications">CERTIFICATIONS</Link>
        <Link to="/contacts">CONTACTS</Link>
      </nav>
    </header>
  );
}