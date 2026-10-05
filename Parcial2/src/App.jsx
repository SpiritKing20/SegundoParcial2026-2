import React from 'react';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import GameCard from './componentes/GameCard';
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
    image: hollowKnightImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 2,
    title: 'Celeste',
    developer: 'Maddy Makes Games',
    genre: 'Plataformas',
    rating: '4.8',
    image: celesteImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 3,
    title: 'Hades',
    developer: 'Supergiant Games',
    genre: 'Roguelike',
    rating: '4.9',
    image: hadesImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 4,
    title: 'Dead Cells',
    developer: 'Motion Twin',
    genre: 'Roguelite',
    rating: '4.8',
    image: deadCellsImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 5,
    title: 'Stardew Valley',
    developer: 'ConcernedApe',
    genre: 'Simulación / RPG',
    rating: '4.9',
    image: stardewValleyImg,
    buttonText: 'Ver Detalles'
  },
  {
    id: 6,
    title: 'Cuphead',
    developer: 'Studio MDHR',
    genre: 'Run & Gun',
    rating: '4.7',
    image: cupheadImg,
    buttonText: 'Ver Detalles'
  }
];

function App() {
  return (
    <div className="app-container">
      {/* Componente 1: Header */}
      <Header />

      {/* Componente 4: Dashboard (Contenedor Principal que agrupa Sidebar y Cuadrícula de GameCards) */}
      <div className="dashboard-container">
        {/* Componente 2: Sidebar */}
        <Sidebar />

        {/* Área Principal con Catálogo de Videojuegos */}
        <main className="catalog-content">
          <section className="catalog-header-section">
            <h2 className="catalog-heading">Catálogo de Videojuegos Indie</h2>
            <p className="catalog-subheading">
              Descubre las mejores joyas independientes creadas por desarrolladores apasionados.
            </p>
          </section>

          {/* Cuadrícula (Grid) de Cards */}
          <section className="games-grid" aria-label="Lista de videojuegos">
            {indieGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                developer={game.developer}
                image={game.image}
                genre={game.genre}
                rating={game.rating}
                buttonText={game.buttonText}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
