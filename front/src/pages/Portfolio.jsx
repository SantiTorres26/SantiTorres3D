import React from 'react';
import { Link } from 'react-router-dom';

// Importa las imágenes
import hollowRingImage from '../assets/img/Space_FINAL.jpg';
import extrudeImage from '../assets/img/VIOLETA01.jpg';
import ophanimImage from '../assets/img/Encendidos_T1.jpg';
import ringsImage from '../assets/img/ANILLOS_ORO_toma 2.jpg';
import inExtrusionImage from '../assets/img/InExtrusionGold2.jpg';
import hexColorsImage from '../assets/img/RedLight1.jpg';
import r2d2Image from '../assets/img/R2D2/R2D2_CARD.jpg';
import dcp03Image from '../assets/img/RENDER_FINAL_t5.jpg';
import d0Image from '../assets/img/D-0 toma 2.jpg';
import mandalorianImage from '../assets/img/Mando_Dark.jpg';
import theSunImage from '../assets/img/SunRender02.jpg';
import voronoiImage from '../assets/img/Bracelet Negros 01.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <h1>PORTFOLIO</h1>
      <div className="portfolio-grid">
        <div className="project-card">
          <Link to="/portfolio/hollowring">
            <img src={hollowRingImage} alt="Hollow Ring" />
            <h3>Hollow Ring</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/extrude">
            <img src={extrudeImage} alt="Extrude" />
            <h3>Extrude</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/ophanim">
            <img src={ophanimImage} alt="Ophanim" />
            <h3>Ophanim</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/rings">
            <img src={ringsImage} alt="Rings" />
            <h3>Rings</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/inextrusion">
            <img src={inExtrusionImage} alt="InExtrusion" />
            <h3>InExtrusion</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/hexcolors">
            <img src={hexColorsImage} alt="HexColors" />
            <h3>HexColors</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/r2d2">
            <img src={r2d2Image} alt="R2D2" />
            <h3>R2D2</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/dcp03">
            <img src={dcp03Image} alt="DCP-03" />
            <h3>DCP-03</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/d0">
            <img src={d0Image} alt="D-0" />
            <h3>D-0</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/mandalorian">
            <img src={mandalorianImage} alt="Mandalorian" />
            <h3>Mandalorian</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/thesun">
            <img src={theSunImage} alt="The Sun" />
            <h3>The Sun</h3>
          </Link>
        </div>
        <div className="project-card">
          <Link to="/portfolio/voronoi">
            <img src={voronoiImage} alt="Voronooi Bracelet" />
            <h3>Voronooi Bracelet</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
