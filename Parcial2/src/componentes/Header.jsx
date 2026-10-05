import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="brand-icon">🎮</span>
        <h1 className="header-title">IndiePlay - Catálogo</h1>
      </div>
      <div className="header-actions">
        <button className="btn-login" type="button">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
}

export default Header;
