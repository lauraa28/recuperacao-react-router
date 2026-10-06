import { useParams, Link } from 'react-router-dom';
import { projetos } from '../src/data/projetosData';

export default function DetalheProjeto() {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <div className="page">
        <h2>Projeto não encontrado!</h2>
        <p>O projeto solicitado não existe no nosso catálogo.</p>
        <Link to="/projetos" className="btn">Voltar para Projetos</Link>
      </div>
    );
  }

  return (
    <div className="page detalhe-projeto-page">
      <Link to="/projetos" className="back-link">← Voltar para a lista de projetos</Link>
      
      <header className="projeto-header">
        <span className="badge">{projeto.categoria}</span>
        <h1>{projeto.nome}</h1>
      </header>

      <div className="projeto-banner">
        <img src={projeto.imagem} alt={projeto.nome} />
      </div>

      <div className="projeto-details">
        <div className="details-info">
          <h3>Sobre o Projeto</h3>
          <p>{projeto.descricao}</p>
        </div>
      </div>
    </div>
  );
}