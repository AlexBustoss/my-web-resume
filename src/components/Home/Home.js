// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Alejandro Bustos</h1>
          <p>Estudiante de Ingeniería en Ciencias de la Computación</p>
          <p>Desarrollador de Software y Técnico Electrónico</p>
          <div className="buttons">
            <a href="#about" className="cta">Sobre mí</a>
            <a href="#contact" className="cta">Contáctame</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
