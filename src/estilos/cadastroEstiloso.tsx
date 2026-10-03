import React, { FormEvent, useState } from "react";

interface CadastroProps {
  onSubmit?: (dados: {
    nome: string;
    email: string;
    senha: string;
  }) => void;
}

export default function Cadastro({ onSubmit }: CadastroProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.({ nome, email, senha });
  }

  return (
    <main className="main-content">
      <div className="auth-container">
        <section className="auth-box">
          <div className="auth-logo">
            <i className="fa-solid fa-droplet" aria-hidden="true" />
            <h2>Criar conta</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cadastro-nome">Nome</label>
              <input
                id="cadastro-nome"
                className="form-control"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cadastro-email">E-mail</label>
              <input
                id="cadastro-email"
                className="form-control"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cadastro-senha">Senha</label>
              <input
                id="cadastro-senha"
                className="form-control"
                type="password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              <i className="fa-solid fa-user-plus" aria-hidden="true" />
              Criar conta
            </button>
          </form>

          <div className="auth-footer">
            Já possui uma conta? <a href="/login">Entrar</a>
          </div>
        </section>
      </div>
    </main>
  );
}
