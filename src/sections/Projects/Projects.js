// src/sections/Projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        {/* Aquí puedes listar tus proyectos. Puedes hacerlo manualmente o, si tus proyectos están en un array, puedes mapearlos. */}
        <div className="project-item">
          <h3>Nombre del Proyecto</h3>
          <p>Descripción del proyecto...</p>
          {/* Agrega más información o imágenes según sea necesario */}
        </div>
        {/* Repite para otros proyectos */}
      </div>
    </section>
  );
}

export default Projects;
