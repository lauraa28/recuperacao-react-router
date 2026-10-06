import { useState } from 'react';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="page contato-page">
      <header className="page-header">
        <h1>Fale Conosco</h1>
        <p>Inicie seu projeto conosco. Entre em contato para agendar uma reunião.</p>
      </header>

      <div className="contato-container">
        <div className="contato-info">
          <h2>Nosso Escritório</h2>
          <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP</p>
          <p><strong>Telefone:</strong> (11) 99999-8888</p>
          <p><strong>E-mail:</strong> contato@arqco.com.br</p>
          <p><strong>Horário:</strong> Seg a Sex, das 09h às 18h</p>
        </div>

        <div className="contato-form">
          {enviado ? (
            <div className="feedback-sucesso">
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado pelo contato. Retornaremos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" placeholder="seuemail@exemplo.com" required />
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea placeholder="Conte-nos um pouco sobre seu projeto..." required></textarea>
              </div>
              <button type="submit" className="btn">Enviar Mensagem</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}