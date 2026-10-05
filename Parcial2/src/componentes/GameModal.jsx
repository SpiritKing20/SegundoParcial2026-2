import React, { useEffect } from 'react';

function GameModal({ game, onClose }) {
  if (!game) return null;

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          type="button"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <div className="modal-header-image">
          <img src={game.image} alt={game.title} className="modal-cover-img" />
          <div className="modal-image-overlay">
            <span className="modal-badge genre">{game.genre}</span>
            <span className="modal-badge rating">★ {game.rating}</span>
          </div>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{game.title}</h2>

          <div className="modal-info-grid">
            <div className="modal-info-item">
              <span className="modal-info-label">Desarrollador:</span>
              <span className="modal-info-value">{game.developer}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Fecha de Salida:</span>
              <span className="modal-info-value">{game.releaseDate}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Género:</span>
              <span className="modal-info-value">{game.genre}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Calificación:</span>
              <span className="modal-info-value">{game.rating} / 5.0</span>
            </div>
          </div>

          <div className="modal-description-box">
            <h4 className="modal-desc-heading">Descripción:</h4>
            <p className="modal-description-text">{game.description}</p>
          </div>

          <div className="modal-actions">
            <button className="btn-modal-close" type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameModal;
