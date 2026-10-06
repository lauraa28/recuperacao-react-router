import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ARQ&CO</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}