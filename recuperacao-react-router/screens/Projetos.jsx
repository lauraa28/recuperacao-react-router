import { Link } from 'react-router-dom';
import { projetos } from '../src/data/projetosData';

export default function Projetos() {
  return (
    <div className="page">
      <h1>Nossos Projetos</h1>
      <p>Explore o nosso portfólio de arquitetura e design.</p>

      <div className="grid-projetos">
        {projetos.map((projeto) => (
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
    </div>
  );
}