import React from 'react';

// Importar las imágenes y videos
import video1 from '../assets/img/ANILLOS_ORO_movimiento.mp4';
import video2 from '../assets/img/2024.08.20-18.10.39.mp4';
import video3 from '../assets/img/PRUEBA_02.mp4';
import img1 from '../assets/img/Space_FINAL.jpg';
import img2 from '../assets/img/RENDER_FINAL_t5.jpg';
import img3 from '../assets/img/InExtrusionGold2.jpg';
import icon1 from '../assets/img/3d_modeling.svg';
import icon2 from '../assets/img/animations.svg';
import icon3 from '../assets/img/web_development.svg';

const Home = () => {
  return (
    <main>
      {/* HOME Section */}
      <section className="section home-section">
        <div className="carousel">
          <div className="carousel-inner">
            {/* Video 1 */}
            <div className="carousel-item active">
              <video src={video1} autoPlay loop muted></video>
            </div>
            {/* Video 2 */}
            <div className="carousel-item">
              <video src={video2} autoPlay loop muted></video>
            </div>
            {/* Video 3 */}
            <div className="carousel-item">
              <video src={video3} autoPlay loop muted></video>
            </div>
            {/* Image 1 */}
            <div className="carousel-item">
              <img src={img1} alt="Space FINAL" />
            </div>
            {/* Image 2 */}
            <div className="carousel-item">
              <img src={img2} alt="RENDER FINAL" />
            </div>
            {/* Image 3 */}
            <div className="carousel-item">
              <img src={img3} alt="InExtrusion Gold" />
            </div>
          </div>
          {/* Carousel Controls */}
          <button className="carousel-control prev" aria-label="Previous">&#10094;</button>
          <button className="carousel-control next" aria-label="Next">&#10095;</button>
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
          </div>
          {/* Main Header Container */}
          <div className="header-container">
            <h1 className="main-header">WELCOME TO SANTI TORRES 3D</h1>
            <h2 className="sub-header">Santiago Andrés Torres portfolio</h2>
            <h3 className="sub-sub-header">Digital 3D Design & Animation</h3>
          </div>
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
              I bring static models to life with fluid and dynamic animations. Specializing in geometry nodes for motion graphics and visual effects, I create immersive experiences that captivate audiences. My animations are designed to add depth and realism to any project, from films to interactive media.
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
        <h1>Collections:</h1>
        <div className="collections-container">
          {/* Collection 1 */}
          <div className="collection-item">
            <div className="collection-card">
              <video src={video2} alt="Collection 1" autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">MOTION GRAPHICS</h2>
              <p className="collection-description">Description for Collection 1. This collection features a variety of intricate designs and creative works.</p>
            </div>
          </div>
          {/* Collection 2 */}
          <div className="collection-item reverse">
            <div className="collection-card">
              <video src={video3} alt="Collection 2" autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">OUTER SPACE</h2>
              <p className="collection-description">Description for Collection 2. This collection includes unique and detailed 3D models.</p>
            </div>
          </div>
          {/* Collection 3 */}
          <div className="collection-item">
            <div className="collection-card">
              <img src={img2} alt="Collection 3" className="collection-image" />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">DROIDS</h2>
              <p className="collection-description">Description for Collection 3. This collection showcases a range of animations and visual effects.</p>
            </div>
          </div>
          {/* Collection 4 */}
          <div className="collection-item reverse">
            <div className="collection-card">
              <video src={video1} alt="Collection 4" autoPlay loop muted></video>
            </div>
            <div className="collection-info">
              <h2 className="collection-title">HEX</h2>
              <p className="collection-description">Description for Collection 4. This collection includes unique and detailed 3D models.</p>
            </div>
          </div>
          {/* Collection 5 */}
          <div className="collection-item">
            <div className="collection-card">
              <img src={img1} alt="Collection 5" className="collection-image" />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">CHARACTERS</h2>
              <p className="collection-description">Description for Collection 5. This collection includes unique and detailed 3D models.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
