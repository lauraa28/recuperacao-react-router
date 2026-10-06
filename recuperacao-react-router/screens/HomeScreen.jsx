import { Link } from 'react-router-dom';
import { projetos } from '../src/data/projetosData';

const projetosDestaque = projetos.slice(0, 3);

export default function Home() {
  

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">Escritório de Arquitetura & Interior Design</p>
          <h1>Design Inovador & Arquitetura Sustentável</h1>
          <p className="description">
            Transformamos visões arrojadas em realidades arquitetônicas refinadas,
            equilibrando estética, funcionalidade e ambiente.
          </p>
          <div className="hero-buttons">
            <Link to="/projetos" className="btn">Ver Nossos Projetos</Link>
            <Link to="/contato" className="btn btn-outline">Fale Conosco</Link>
          </div>
        </div>
      </section>

      {/* Seção Resumo Sobre */}
      <section className="home-about">
        <div className="about-text">
          <h2>Mais de 10 anos projetando o futuro</h2>
          <p>
            Criamos projetos que desafiam o comum. Cada linha, textura e abertura de luz
            é concebida para proporcionar conforto e sofisticação aos nossos clientes.
          </p>
          <Link to="/sobre" className="link-arrow">Conheça nossa história →</Link>
        </div>
      </section>

      <section className="home-projects">
        <h2>Projetos em Destaque</h2>
        <div className="grid-projetos">
          {projetosDestaque.map((projeto) => (
            <div key={projeto.id} className="card-projeto">
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="card-projeto-info">
                <h3>{projeto.nome}</h3>
                <p>{projeto.categoria}</p>
                <Link to={`/projetos/${projeto.id}`}>Ver Detalhes →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}