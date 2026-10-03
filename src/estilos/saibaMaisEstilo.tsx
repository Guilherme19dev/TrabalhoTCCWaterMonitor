import React from "react";

interface Secao {
  titulo: string;
  texto: string;
  imagem?: string;
}

interface SaibaMaisProps {
  secoes?: Secao[];
}

const secoesPadrao: Secao[] = [
  {
    titulo: "Sobre o projeto",
    texto:
      "Este sistema foi desenvolvido para auxiliar no acompanhamento do consumo de água, permitindo visualizar informações e analisar alterações ao longo do tempo.",
  },
  {
    titulo: "Por que acompanhar o consumo?",
    texto:
      "O acompanhamento periódico pode ajudar o usuário a conhecer melhor seus hábitos de consumo e identificar mudanças que mereçam atenção.",
  },
  {
    titulo: "Análise por gráficos",
    texto:
      "Os gráficos apresentam os dados de consumo de forma visual, facilitando a comparação entre diferentes períodos.",
  },
];

export default function SaibaMais({
  secoes = secoesPadrao,
}: SaibaMaisProps) {
  return (
    <main className="main-content">
      <div className="page-container">
        <div className="plans-page-header">
          <h1>Saiba mais</h1>
          <p>Informações sobre o sistema e o acompanhamento do consumo.</p>
        </div>

        {secoes.map((secao, index) => (
          <section className="resource-card" key={`${secao.titulo}-${index}`}>
            {secao.imagem ? (
              <img
                className="resource-icon"
                src={secao.imagem}
                alt=""
              />
            ) : (
              <div className="resource-icon">
                <i
                  className={`fa-solid ${
                    index === 0
                      ? "fa-circle-info"
                      : index === 1
                      ? "fa-droplet"
                      : "fa-chart-line"
                  }`}
                  aria-hidden="true"
                />
              </div>
            )}

            <div className="resource-info">
              <h3>{secao.titulo}</h3>
              <p>{secao.texto}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
