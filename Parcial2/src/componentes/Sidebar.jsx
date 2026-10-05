import React, { useState } from 'react';

function Sidebar({
  activeSection = 'explorar',
  onSelectSection,
  genres = [],
  selectedGenre = null,
  onSelectGenre,
  favoritesCount = 0
}) {
  const [genresOpen, setGenresOpen] = useState(false);

  const handleGenerosClick = () => {
    setGenresOpen(!genresOpen);
    if (onSelectSection) onSelectSection('generos');
  };

  const handleExplorarClick = () => {
    if (onSelectSection) onSelectSection('explorar');
    if (onSelectGenre) onSelectGenre(null);
  };

  const handleFavoritosClick = () => {
    if (onSelectSection) onSelectSection('favoritos');
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {/* Opción 1: Explorar */}
          <li
            className={`sidebar-item ${activeSection === 'explorar' ? 'active' : ''}`}
            onClick={handleExplorarClick}
          >
            <span className="sidebar-text">Explorar</span>
          </li>

          {/* Opción 2: Géneros (desplegable) */}
          <li
            className={`sidebar-item has-submenu ${activeSection === 'generos' ? 'active' : ''}`}
            onClick={handleGenerosClick}
          >
            <span className="sidebar-text">Géneros</span>
            <span className={`submenu-arrow ${genresOpen || activeSection === 'generos' ? 'open' : ''}`}>
              ▼
            </span>
          </li>

          {/* Sublista de géneros indies cuando se presiona Géneros */}
          {(genresOpen || activeSection === 'generos') && (
            <ul className="sidebar-subgenres-list">
              <li
                className={`sidebar-subgenre-item ${selectedGenre === null ? 'selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectGenre) onSelectGenre(null);
                }}
              >
                • Todos los géneros
              </li>
              {genres.map((genre) => (
                <li
                  key={genre}
                  className={`sidebar-subgenre-item ${selectedGenre === genre ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectGenre) onSelectGenre(genre);
                  }}
                >
                  • {genre}
                </li>
              ))}
            </ul>
          )}

          {/* Opción 3: Mis Favoritos */}
          <li
            className={`sidebar-item ${activeSection === 'favoritos' ? 'active' : ''}`}
            onClick={handleFavoritosClick}
          >
            <span className="sidebar-text">Mis Favoritos</span>
            {favoritesCount > 0 && (
              <span className="favorites-badge">{favoritesCount}</span>
            )}
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-badge">IndiePlay v1.0</div>
      </div>
    </aside>
  );
}

export default Sidebar;
