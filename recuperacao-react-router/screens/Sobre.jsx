export default function Sobre() {
    return (
      <div className="page sobre-page">
        <header className="page-header">
          <h1>Sobre a ARQ&CO</h1>
          <p>Criando espaços atemporais que conectam pessoas e ambientes.</p>
        </header>
  
        <div className="sobre-content">
          <div className="sobre-text">
            <h2>Nossa Filosofia</h2>
            <p>
              Acreditamos que a arquitetura vai além da estética: ela molda como vivemos,
              trabalhamos e nos relacionamos. Cada projeto é abordado com rigor técnico,
              sensibilidade ao ambiente e respeito aos desejos de nossos clientes.
            </p>
            <p>
              Nosso estúdio combina tecnologias avançadas de modelagem 3D com materiais sustentáveis e
              atemporais, garantindo eficiência e longevidade a cada edificação.
            </p>
          </div>
  
          <div className="sobre-stats">
            <div className="stat-card">
              <h3>+50</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat-card">
              <h3>12</h3>
              <p>Prêmios de Design</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    );
  }