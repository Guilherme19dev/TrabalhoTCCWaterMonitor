import React from "react";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
}

interface MenuProps {
  aberto?: boolean;
  onFechar?: () => void;
  itens?: MenuItem[];
}

const itensPadrao: MenuItem[] = [
  { label: "Início", href: "/", icon: "fa-house" },
  { label: "Minha conta", href: "/conta", icon: "fa-user" },
  { label: "Gráficos", href: "/graficos", icon: "fa-chart-line" },
  { label: "Saiba mais", href: "/saiba-mais", icon: "fa-circle-info" },
];

export default function Menu({
  aberto = false,
  onFechar,
  itens = itensPadrao,
}: MenuProps) {
  return (
    <>
      <aside className={`sidebar ${aberto ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <i className="fa-solid fa-droplet" aria-hidden="true" />
            Água em Dia
          </div>

          <button
            className="sidebar-close"
            type="button"
            onClick={onFechar}
            aria-label="Fechar menu"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav">
          {itens.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${item.active ? "active" : ""}`}
            >
              {item.icon && (
                <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href="/login" className="sidebar-link">
            <i className="fa-solid fa-right-from-bracket" aria-hidden="true" />
            <span>Sair</span>
          </a>
        </div>
      </aside>

      <div
        className={`sidebar-overlay ${aberto ? "active" : ""}`}
        onClick={onFechar}
        aria-hidden="true"
      />
    </>
  );
}
