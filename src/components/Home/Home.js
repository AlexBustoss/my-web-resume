

// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
      <div className="hero-image"> {/* La imagen se añadirá via CSS */}
          {/* Contenido opcional dentro de la imagen, como un título o botón */}
        </div>
        {/* Contenido existente de la sección hero, como la imagen */}
      </section>
      
      <section className="intro-section">
            <div className="intro-content">
                <h1 className="intro-name">Alejandro Bustos</h1>
                <h2 className="intro-title">Estudiante de Pregrado en Ciencias de la Computación</h2>
                <p className="intro-description">Actualmente estoy cursando mi quinto semestre en ciencias de la computación, caracterizado por una personalidad extrovertida y una habilidad innata para la comunicación y el trabajo en equipo. Me encanta sumergirme en proyectos innovadores que tienen un impacto sustancial en la comunidad.</p>
                <a href="#projects" className="cta-button">Ver Mis Proyectos</a>
            </div>
        </section>



        <section className="skills-section">
            <h2>Habilidades Principales</h2>
            <div className="skills-container">


            {/* Python */}
            <div className="skill-card python"> {/* La clase 'python' se utiliza para aplicar estilos específicos en el CSS */}
                <div className="skill-content"> {/* Contenedor para el contenido de la tarjeta */}
                    <div className="skill-name">Python</div>
                    <div className="skill-level">Intermedio</div>
                </div>
            </div>
            
            {/* JavaScript */}
            <div className="skill-card">
                <img src="path-to-your-javascript-icon.png" alt="JavaScript" className="skill-icon" />
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">Intermedio</div>
            </div>
            {/* React Native */}
            <div className="skill-card">
                <img src="path-to-your-react-native-icon.png" alt="React Native" className="skill-icon" />
                <div className="skill-name">React Native</div>
                <div className="skill-level">Intermedio</div>
            </div>
            {/* HTML/CSS */}
            <div className="skill-card">
                <img src="path-to-your-html-css-icon.png" alt="HTML/CSS" className="skill-icon" />
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-level">Intermedio</div>
            </div>
            {/* Java */}
            <div className="skill-card">
                <img src="path-to-your-java-icon.png" alt="Java" className="skill-icon" />
                <div className="skill-name">Java</div>
                <div className="skill-level">Básico</div>
            </div>
            {/* SQL */}
            <div className="skill-card">
                <img src="path-to-your-sql-icon.png" alt="SQL" className="skill-icon" />
                <div className="skill-name">SQL</div>
                <div className="skill-level">Básico</div>
            </div>
            </div>
        </section>


      <section className="education-section">
        <h2>Educación</h2>
        <p>Ingeniería en Ciencias de la Computación, Tecnológico de Monterrey, agosto 2021 - hasta la fecha</p>
      </section>

      <section className="project-section">
        <h2>Proyecto Destacado</h2>
        <p>MIPE (Aplicación móvil WPA para emprendedoras desfavorecidas)</p>
      </section>

      <section className="awards-section">
        <h2>Reconocimientos</h2>
        <p>Mención Honorable, Premio Estatal de la Juventud de Chihuahua, Categoría Ingenio Emprendedor, enero 2023</p>
        <p>Premios al Mérito Académico de la Escuela de Ingeniería, Reconocimiento al Proyecto Destacado, abril 2023</p>
      </section>

      <section className="contact-section">
        <h2>Contacto</h2>
        <p>Email: A01568802@tec.mx</p>
        <p>Otros enlaces de contacto / redes sociales</p>
      </section>
    </div>
  );
}

export default Home;
