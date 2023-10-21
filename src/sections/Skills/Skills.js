// src/sections/Skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        {/* Lista de habilidades. Nuevamente, esto se puede hacer manualmente o mapeando un array si tus datos están en uno. */}
        <div className="skill-item">
          <h3>Nombre de la Habilidad</h3>
          <p>Descripción o nivel de competencia...</p>
        </div>
        {/* Repite para otras habilidades */}
      </div>
    </section>
  );
}

export default Skills;
