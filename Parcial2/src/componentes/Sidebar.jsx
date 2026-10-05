import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item active">
            <span className="sidebar-icon">🧭</span>
            <span className="sidebar-text">Explorar</span>
          </li>
          <li className="sidebar-item">
            <span className="sidebar-icon">🏷️</span>
            <span className="sidebar-text">Géneros</span>
          </li>
          <li className="sidebar-item">
            <span className="sidebar-icon">⭐</span>
            <span className="sidebar-text">Mis Favoritos</span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-badge">Versión 1.0</div>
      </div>
    </aside>
  );
}

export default Sidebar;
