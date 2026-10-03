import React, { ReactNode } from "react";

interface GraficosProps {
  titulo?: string;
  informacao?: string;
  children?: ReactNode;
}

export default function Graficos({
  titulo = "Análise de consumo",
  informacao = "Acompanhe seu consumo de água e observe alterações ao longo do tempo.",
  children,
}: GraficosProps) {
  return (
    <main className="main-content">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">{titulo}</h1>
        </div>

        <section className="card">
          <div className="product-image-box">
            {children ?? (
              <div className="resource-icon" aria-label="Gráfico">
                <i className="fa-solid fa-chart-line" aria-hidden="true" />
              </div>
            )}
          </div>
        </section>

        <section className="hero">
          <h1>Seu consumo de água</h1>
          <p>{informacao}</p>
        </section>
      </div>
    </main>
  );
}
