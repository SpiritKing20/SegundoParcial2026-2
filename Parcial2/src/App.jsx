import React, { useState } from 'react';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import GameCard from './componentes/GameCard';
import GameModal from './componentes/GameModal';
import './style.css';

// Importación de las imágenes locales desde src/img
import hollowKnightImg from './img/Hollow_Knight.jpg';
import celesteImg from './img/Celeste.jpg';
import hadesImg from './img/Hades.jpg';
import deadCellsImg from './img/Dead_Cells.jpg';
import stardewValleyImg from './img/Stardew_Valley.jpg';
import cupheadImg from './img/Cuphead.jpg';

const indieGames = [
  {
    id: 1,
    title: 'Hollow Knight',
    developer: 'Team Cherry',
    genre: 'Metroidvania',
    rating: '4.9',
    releaseDate: '24 de febrero de 2017',
    description: 'Forja tu propio camino en Hollow Knight. Una aventura de acción clásica en 2D a través de un vasto reino en ruinas habitado por insectos y héroes. Explora cavernas laberínticas, combate criaturas corrompidas y desvela antiguos misterios.',
    image: hollowKnightImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 2,
    title: 'Celeste',
    developer: 'Maddy Makes Games',
    genre: 'Plataformas',
    rating: '4.8',
    releaseDate: '25 de enero de 2018',
    description: 'Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje hacia la cima de la montaña Celeste. Un desafiante juego de plataformas con controles hiperprecisos, una conmovedora historia sobre la superación y más de 700 pantallas de retos.',
    image: celesteImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 3,
    title: 'Hades',
    developer: 'Supergiant Games',
    genre: 'Roguelike',
    rating: '4.9',
    releaseDate: '17 de septiembre de 2020',
    description: 'Desafía al dios de los muertos mientras combates y te abres paso fuera del Inframundo en este roguelike de acción rápida. Con la bendición de los dioses del Olimpo y un combate vertiginoso, cada intento de escape te acerca más a la verdad.',
    image: hadesImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 4,
    title: 'Dead Cells',
    developer: 'Motion Twin',
    genre: 'Roguelite',
    rating: '4.8',
    releaseDate: '7 de agosto de 2018',
    description: 'Dead Cells es un juego de plataformas de acción roguelite de estilo metroidvania. Explorarás un castillo misterioso y en constante cambio, combinando armas brutales con habilidades mágicas en un combate frenético sin puntos de guardado.',
    image: deadCellsImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 5,
    title: 'Stardew Valley',
    developer: 'ConcernedApe',
    genre: 'Simulación / RPG',
    rating: '4.9',
    releaseDate: '26 de febrero de 2016',
    description: 'Has heredado la vieja parcela agrícola de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y unas pocas monedas, aprenderás a vivir del campo, cultivar alimentos, criar animales y devolverle la vida al valle.',
    image: stardewValleyImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 6,
    title: 'Cuphead',
    developer: 'Studio MDHR',
    genre: 'Run & Gun',
    rating: '4.7',
    releaseDate: '29 de septiembre de 2017',
    description: 'Cuphead es un clásico juego de disparar y correr enfocado en intensas batallas contra jefes. Inspirado en los dibujos animados de los años 30, fue animado cuadro por cuadro a mano con acuarelas y cuenta con una enérgica banda sonora de jazz.',
    image: cupheadImg,
    buttonText: 'Ver Detalles'
  }
];

const availableGenres = [
  'Metroidvania',
  'Plataformas',
  'Roguelike',
  'Roguelite',
  'Simulación / RPG',
  'Run & Gun'
];

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeSection, setActiveSection] = useState('explorar');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Alternar favorito
  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Calcular lista de juegos a mostrar
  let displayedGames = [...indieGames];

  // Si se seleccionó un género específico
  if (selectedGenre) {
    displayedGames = displayedGames.filter((game) => game.genre === selectedGenre);
  }

  // Si se presionó "Mis Favoritos", mover los favoritos al principio del orden
  if (activeSection === 'favoritos') {
    displayedGames.sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
  }

  return (
    <div className="app-container">
      {/* Componente 1: Header */}
      <Header />

      {/* Componente 4: Dashboard (Contenedor Principal que agrupa Sidebar y Cuadrícula de GameCards) */}
      <div className="dashboard-container">
        {/* Componente 2: Sidebar con interacción de Géneros y Mis Favoritos */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={(section) => {
            setActiveSection(section);
            if (section !== 'generos') setSelectedGenre(null);
          }}
          genres={availableGenres}
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => {
            setSelectedGenre(genre);
            setActiveSection('generos');
          }}
          favoritesCount={favorites.length}
        />

        {/* Área Principal con Catálogo de Videojuegos */}
        <main className="catalog-content">
          <section className="catalog-header-section">
            <h2 className="catalog-heading">
              {activeSection === 'favoritos'
                ? '⭐ Mis Favoritos'
                : selectedGenre
                ? `Género: ${selectedGenre}`
                : 'Catálogo de Videojuegos Indie'}
            </h2>
            <p className="catalog-subheading">
              {activeSection === 'favoritos'
                ? favorites.length > 0
                  ? 'Tus videojuegos favoritos se encuentran ordenados al principio de la lista.'
                  : 'Aún no has marcado ningún favorito. Haz clic en el corazón (🤍) de cualquier juego para marcarlo.'
                : selectedGenre
                ? `Mostrando juegos de la categoría ${selectedGenre}.`
                : 'Descubre las mejores joyas independientes creadas por desarrolladores apasionados.'}
            </p>
          </section>

          {/* Cuadrícula (Grid) de Cards */}
          <section className="games-grid" aria-label="Lista de videojuegos">
            {displayedGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                developer={game.developer}
                image={game.image}
                genre={game.genre}
                rating={game.rating}
                buttonText={game.buttonText}
                isFavorite={favorites.includes(game.id)}
                onToggleFavorite={() => handleToggleFavorite(game.id)}
                onSelect={() => setSelectedGame(game)}
              />
            ))}
          </section>
        </main>
      </div>

      {/* Modal con información detallada del juego seleccionado */}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}

export default App;
