import React from "react";

interface CardProps {
  titulo: string;
  conteudo: string;
  gasto?: string | number;
  classe?: "cor1" | "cor2" | "cor3";
  acao?: () => void;
  textoBotao?: string;
}

export default function Card({
  titulo,
  conteudo,
  gasto,
  classe = "cor1",
  acao,
  textoBotao = "Ver detalhes",
}: CardProps) {
  return (
    <article className={`card ${classe}`}>
      <div className="titulo">
        <h3 className="textoGeral tituloCartao">{titulo}</h3>
      </div>

      <div className="conteudo">
        <p className="textoGeral conteudoCartao">{conteudo}</p>
      </div>

      {gasto !== undefined && (
        <div className="gasto">
          <strong className="textoGeral gastoCartao">
            {gasto}
          </strong>

          {acao && (
            <button className="btn btn-sm btn-outline" onClick={acao}>
              {textoBotao}
            </button>
          )}
        </div>
      )}
    </article>
  );
}
