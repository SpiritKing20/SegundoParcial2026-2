import React from 'react';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import GameCard from './componentes/GameCard';
import './style.css';

const indieGames = [
  {
    id: 1,
    title: 'Hollow Knight',
    developer: 'Team Cherry',
    genre: 'Metroidvania',
    rating: '4.9',
    image: './assets/hollow_knight.jpg',
    buttonText: 'Ver Detalles'
  },
  {
    id: 2,
    title: 'Celeste',
    developer: 'Maddy Makes Games',
    genre: 'Plataformas',
    rating: '4.8',
    image: './assets/celeste.jpg',
    buttonText: 'Jugar'
  },
  {
    id: 3,
    title: 'Hades',
    developer: 'Supergiant Games',
    genre: 'Roguelike',
    rating: '4.9',
    image: './assets/hades.jpg',
    buttonText: 'Ver Detalles'
  },
  {
    id: 4,
    title: 'Dead Cells',
    developer: 'Motion Twin',
    genre: 'Roguelite',
    rating: '4.8',
    image: './assets/dead_cells.jpg',
    buttonText: 'Jugar'
  },
  {
    id: 5,
    title: 'Stardew Valley',
    developer: 'ConcernedApe',
    genre: 'Simulación / RPG',
    rating: '4.9',
    image: './assets/stardew_valley.jpg',
    buttonText: 'Ver Detalles'
  },
  {
    id: 6,
    title: 'Cuphead',
    developer: 'Studio MDHR',
    genre: 'Run & Gun',
    rating: '4.7',
    image: './assets/cuphead.jpg',
    buttonText: 'Jugar'
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
