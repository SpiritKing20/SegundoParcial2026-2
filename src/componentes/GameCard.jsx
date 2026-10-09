import React from 'react';

function GameCard({
  title = 'Juego Indie',
  developer = 'Estudio Indie',
  image = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
  buttonText = 'Ver Detalles',
  isFavorite = false,
  onToggleFavorite,
  onSelect
}) {
  return (
    <article className={`game-card ${isFavorite ? 'is-favorite' : ''}`}>
      <div className="game-card-image-wrapper">
        <img
          src={image}
          alt={`Portada de ${title}`}
          className="game-card-image"
          loading="lazy"
        />

        {/* Botón de corazón para marcar favorito */}
        <button
          className={`btn-favorite ${isFavorite ? 'active' : ''}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleFavorite) onToggleFavorite();
          }}
          title={isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{title}</h3>
        <p className="game-card-developer">
          <span className="dev-label">Desarrollador:</span> {developer}
        </p>
        <div className="game-card-footer">
          <button className="btn-action" type="button" onClick={onSelect}>
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
