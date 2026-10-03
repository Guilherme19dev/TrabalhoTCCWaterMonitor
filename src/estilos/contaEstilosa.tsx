import React from "react";

interface ContaProps {
  nome: string;
  email: string;
  telefone?: string;
  foto?: string;
  onEditar?: () => void;
  onSair?: () => void;
}

export default function Conta({
  nome,
  email,
  telefone,
  foto,
  onEditar,
  onSair,
}: ContaProps) {
  return (
    <main className="main-content">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Minha conta</h1>
        </div>

        <section className="account-welcome">
          <div className="account-photo">
            {foto ? (
              <img src={foto} alt={`Foto de ${nome}`} />
            ) : (
              <i className="fa-solid fa-user" aria-hidden="true" />
            )}
          </div>

          <div className="account-welcome-text">
            <span className="welcome-label">Bem-vindo(a)</span>
            <div className="user-name">{nome}</div>
          </div>

          <div className="account-logo-mini">
            <i className="fa-solid fa-droplet" aria-hidden="true" />
          </div>
        </section>

        <section className="account-grid">
          <article className="account-card">
            <h3>
              <i className="fa-solid fa-user" aria-hidden="true" />
              Dados pessoais
            </h3>

            <div className="info-row">
              <span className="label">Nome</span>
              <span className="value">{nome}</span>
            </div>

            <div className="info-row">
              <span className="label">E-mail</span>
              <span className="value">{email}</span>
            </div>

            {telefone && (
              <div className="info-row">
                <span className="label">Telefone</span>
                <span className="value">{telefone}</span>
              </div>
            )}
          </article>

          <article className="account-card">
            <h3>
              <i className="fa-solid fa-gear" aria-hidden="true" />
              Configurações
            </h3>

            <div className="settings-actions">
              {onEditar && (
                <button className="btn btn-primary" onClick={onEditar}>
                  <i className="fa-solid fa-pen" aria-hidden="true" />
                  Editar dados
                </button>
              )}

              {onSair && (
                <button className="btn btn-danger" onClick={onSair}>
                  <i className="fa-solid fa-right-from-bracket" aria-hidden="true" />
                  Sair
                </button>
              )}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
