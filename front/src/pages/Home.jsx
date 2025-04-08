// Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';

//importacion dinamica para el carousel
const images = import.meta.glob('../assets/img/carousel/*.jpg', { eager: true });
const videos = import.meta.glob('../assets/img/carousel/*.mp4', { eager: true });

// Convertimos los archivos en un array de objetos con información para el carousel
const imagesArray = Object.keys(images).map((path) => ({
  type: 'image',
  src: images[path].default,         // La propiedad .default es necesaria para acceder a la URL del recurso
  alt: path.split('/').pop().replace(/\.[^/.]+$/, '') // Genera un texto alternativo a partir del nombre del archivo
}));

const videosArray = Object.keys(videos).map((path) => ({
  type: 'video',
  src: videos[path].default
}));

// Combinamos ambos arrays para formar el conjunto total de medios del carousel 
const mediaItems = [...videosArray, ...imagesArray];
const fixedMediaItems = mediaItems.slice(0, 6);

//importacion estatica para collections y service icons
import collSpaceFinal from '../assets/img/collections/Space_FINAL.jpg';
import collLineasPuntos from '../assets/img/collections/LineasPuntos.mp4';
import collTurntable from '../assets/img/collections/TURNTABLE.mp4';
import collInExtrusion from '../assets/img/collections/INEXTRUSION_Turntable.mp4';
import collLukeDarthVader from '../assets/img/collections/LukeDarthVader.jpeg';
import collRenderFinal from '../assets/img/collections/RENDER_FINAL.jpg';
import collTurntableOphanim from '../assets/img/collections/TurntableOphanim.mp4';

import icon1 from '../assets/img/3d_modeling.svg';
import icon2 from '../assets/img/animations.svg';
import icon3 from '../assets/img/web_development.svg';

const Home = () => {
  return (
    <main>
      {/* HOME Section */}
      <section className="section home-section">
        {/* Carousel con medios cargados dinámicamente */}
        <Carousel mediaItems={fixedMediaItems} />
        {/* Main Header Container (superpuesto al carousel) */}
        <div className="header-container">
          <h1 className="main-header">WELCOME TO SANTI TORRES 3D</h1>
          <h2 className="sub-header">Santiago Andrés Torres portfolio</h2>
          <h3 className="sub-sub-header">Digital 3D Design & Animation</h3>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="services-container">
          <div className="service-item">
            <img src={icon1} alt="3D Modeling Icon" className="service-icon" />
            <h2 className="service-title">3D Modeling</h2>
            <p className="service-description">
              I transform ideas into detailed and realistic 3D models. Specializing in abstract designs, game assets, character and weapon creation, and product presentations, I strive to deliver high-quality visualizations for various applications. My work ensures that every detail is meticulously crafted to meet the highest standards.
            </p>
          </div>
          <div className="service-item">
            <img src={icon2} alt="Animations Icon" className="service-icon" />
            <h2 className="service-title">Animations</h2>
            <p className="service-description">
              I bring static models to life with fluid and dynamic animations. Specializing in geometry nodes for motion graphics, simulations and visual effects, I create immersive experiences that captivate audiences. My animations are designed to add depth and realism to any project, from films to interactive media.
            </p>
          </div>
          <div className="service-item">
            <img src={icon3} alt="Web Development Icon" className="service-icon" />
            <h2 className="service-title">Web Development</h2>
            <p className="service-description">
              I develop responsive and interactive websites with a focus on user experience and functionality. Proficient in front-end technologies and frameworks, I build web applications that are not only visually appealing but also user-friendly. My work ensures that every website I create is optimized for performance and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="section collections-section">
        <h1 className='collections-title'>COLLECTIONS</h1>
        <div className="collections-container">
          <div className="collection-item">
            <div className="collection-card">
              <video src={collLineasPuntos} autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">MOTION GRAPHICS</h2>
              <p className="collection-description">
                Description for Collection 1. This collection features a variety of intricate designs and creative works.
              </p>
            </div>
          </div>
          <div className="collection-item reverse">
            <div className="collection-card">
              <img src={collSpaceFinal} alt="OUTER SPACE" className="collection-image" />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">OUTER SPACE</h2>
              <p className="collection-description">
                Description for Collection 2. This collection includes unique and detailed 3D models.
              </p>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-card">
              <video src={collTurntable} autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">DROIDS</h2>
              <p className="collection-description">
                Description for Collection 3. This collection showcases a range of animations and visual effects.
              </p>
            </div>
          </div>
          <div className="collection-item reverse">
            <div className="collection-card">
              <video src={collInExtrusion} autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">HEX</h2>
              <p className="collection-description">
                Description for Collection 4. This collection includes unique and detailed 3D models.
              </p>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-card">
              <img src={collRenderFinal} alt="CHARACTERS" className="collection-image" />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">CHARACTERS</h2>
              <p className="collection-description">
                Description for Collection 5. This collection includes unique and detailed 3D models.
              </p>
            </div>
          </div>
          <div className="collection-item reverse">
            <div className="collection-card">
              <img src={collLukeDarthVader} alt="WEAPONS" className="collection-image" />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">WEAPONS</h2>
              <p className="collection-description">
                Description for Collection 6. This collection includes unique and detailed 3D models.
              </p>
            </div>
          </div>
          <div className="collection-item">
            <div className="collection-card">
              <video src={collTurntableOphanim} autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">FLYERS</h2>
              <p className="collection-description">
                Description for Collection 7. This collection includes unique and detailed 3D models.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
