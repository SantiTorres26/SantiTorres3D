// front/src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import Carousel from '../components/Carousel';

//importacion dinamica para el carousel
const images = import.meta.glob('../assets/img/carousel/*.jpg', { eager: true });
const videos = import.meta.glob('../assets/img/carousel/*.mp4', { eager: true });

// Convertimos los archivos en un array de objetos con información para el carousel
const imagesArray = Object.keys(images).map((path) => ({
  type: 'image',
  src: images[path].default,
  alt: path.split('/').pop().replace(/\.[^/.]+$/, '')
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
import collRoom from '../assets/img/collections/Room.jpg';


import icon1 from '../assets/img/3d_modeling.svg';
import icon2 from '../assets/img/animations.svg';
import icon3 from '../assets/img/web_development.svg';

const Home = () => {
  // Refs para animaciones
  const subRefs = useRef([]);
  const serviceRefs = useRef([]);
  const collectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    // Subtitles
    subRefs.current.forEach(el => el && observer.observe(el));
    // Service items
    serviceRefs.current.forEach(el => el && observer.observe(el));
    // Collection items
    collectionRefs.current.forEach(el => el && observer.observe(el));
  }, []);

  return (
    <main>
      {/* HOME Section */}
      <section className="section home-section">
        {/* Carousel con medios cargados dinámicamente */}
        <Carousel mediaItems={fixedMediaItems} />

        {/* Main Header Container (superpuesto al carousel) */}
        <div className="header-container">
          {/* 1) Añadimos 'glitch neon' SOLO al título */}
          <h1 className="main-header glitch neon">
            WELCOME TO SANTI TORRES 3D
          </h1>

          {/* 2) Subtítulos con fade */}
          <h2
            ref={el => subRefs.current[0] = el}
            className="sub-header fade"
          >
            Santiago Andrés Torres portfolio
          </h2>
          <h3
            ref={el => subRefs.current[1] = el}
            className="sub-sub-header fade"
          >
            Digital 3D Design & Animation
          </h3>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="services-container">
          {[{
            icon: icon1,
            title: '3D Modeling',
            text: 'I transform ideas into detailed and realistic 3D models. Specializing in abstract designs, game assets, character and weapon creation, and product presentations, I strive to deliver high-quality visualizations for various applications. My work ensures that every detail is meticulously crafted to meet the highest standards.'
          }, {
            icon: icon2,
            title: 'Animations',
            text: 'I bring static models to life with fluid and dynamic animations. Specializing in geometry nodes for motion graphics, simulations and visual effects, I create immersive experiences that captivate audiences. My animations are designed to add depth and realism to any project, from films to interactive media.'
          }, {
            icon: icon3,
            title: 'Web Development',
            text: 'I develop responsive and interactive websites with a focus on user experience and functionality. Proficient in front-end technologies and frameworks, I build web applications that are not only visually appealing but also user-friendly. My work ensures that every website I create is optimized for performance and accessibility.'
          }].map((svc, i) => (
            <div
              key={i}
              ref={el => serviceRefs.current[i] = el}
              className="service-item fade-up"
            >
              <img src={svc.icon} alt={`${svc.title} Icon`} className="service-icon" />
              <h2 className="service-title">{svc.title}</h2>
              <p className="service-description">{svc.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="section collections-section">
        <h1 className="collections-title">COLLECTIONS</h1>
        <div className="collections-container">
          {[{
            media: <video src={collLineasPuntos} autoPlay loop muted />,
            title: 'MOTION GRAPHICS',
            desc: 'The MOTION GRAPHICS collection showcases a series of infinite loops and complex visual simulations that blend 2D and 3D elements into seamless, hypnotic animations. Employing advanced geometry nodes, particle systems, and physics-based simulations, each piece demonstrates how motion can convey emotion, rhythm, and brand identity in a concise cycle. Whether designed for live visual performances, promotional videos, or music clips, these loops emphasize clarity of concept and technical prowess, balancing abstract forms with fluid transitions. By mastering both procedural and keyframe techniques, this collection underlines the role of motion graphics as a versatile storytelling tool, adaptable to branding, entertainment, and digital art contexts. The loops are optimized for real-time playback, ensuring smooth performance across platforms, and each animation is crafted to maintain viewer engagement through dynamic motion and evolving visuals.',
            dir: 'left'
          }, {
            media: <img src={collSpaceFinal} alt="OUTER SPACE" className="collection-image" />,
            title: 'OUTER SPACE',
            desc: 'The OUTER SPACE collection transports viewers to otherworldly realms, featuring detailed models of planets, suns, galaxies, and abstract cosmic constructs. Renders oscillate between photorealism—evoking the grandeur of Interstellar-inspired vistas—and stylized science-fiction surrealism that plays with color, scale, and geometry. These works serve both personal passion projects and client briefs, lending an immersive “spacey” aura to backgrounds, VR experiences, or editorial pieces. Anchored in astrophysical accuracy yet unafraid to explore the unknown, the collection reflects a deep fascination with the universe’s mysteries and the visual impact of celestial phenomena. Each render incorporates volumetric lighting and subtle post-processing effects to enhance depth, while carefully layered textures evoke cosmic dust and stellar glow, bringing the vastness of space into compelling digital art.',
            dir: 'right'
          }, {
            media: <video src={collTurntable} autoPlay loop muted />,
            title: 'DROIDS',
            desc: 'In the DROIDS collection, you’ll find an array of robotic designs spanning astromechanical repair units, protocol androids, combat drones, and futuristic transport bots. Drawing inspiration from Star Wars lore and hard-surface modeling best practices, each model balances functional detail—like servomotor joints and sensor arrays—with a clean, sci-fi aesthetic. Whether faithfully replicating iconic designs or reinventing them through personal reinterpretation, these droids embody narrative potential, hinting at backstories and roles within imagined universes. The collection highlights mastery of topology, edge flow, and PBR texturing to bring mechanical characters to life. High-resolution normal maps and realistic metal shaders give each droid a convincing presence, and carefully designed rigging points anticipate future animation, making these models highly adaptable for film, games, and interactive media.',
            dir: 'left'
          }, {
            media: <video src={collInExtrusion} autoPlay loop muted />,
            title: 'HEX',
            desc: 'The HEX collection explores the beauty of modular, hexagonal patterns across abstract structures and digital sculptures. By tessellating hex-based forms into organic and architectural assemblies, these renders push the boundaries of procedural design and material experimentation. Created as NFT-ready pieces and concept proofs, each work tests different shaders—metallic, translucent, or emissive—and showcases how simple geometric modules can yield infinitely varied compositions. This series underscores the creative potential of modular art, where repetition and variation coalesce into visually striking and technically sound designs. Each composition is accompanied by exploration of material parameters—reflectivity, roughness, and subsurface scattering—demonstrating how sunlight and artificial lighting interact with hexagonal facets to produce dynamic patterns of light and shadow.',
            dir: 'right'
          }, {
            media: <img src={collRenderFinal} alt="CHARACTERS" className="collection-image" />,
            title: 'CHARACTERS',
            desc: 'The CHARACTERS collection represents a foray into high-fidelity sculpting, with models ranging from hyper-realistic portraits to stylized low-poly figures. Although still an area of ongoing skill development, each piece demonstrates a commitment to anatomical accuracy, detailed PBR texturing, and compelling silhouette design. Crafted for personal showcases and portfolio presentations, these characters embody the pipeline’s initial stages—from digital clay sculpt to realistic shader work—laying the groundwork for future rigging and animation endeavors. Ultimately, this collection captures the artist’s evolution toward AAA-quality character creation. Multichannel texture maps—including albedo, normal, roughness, and ambient occlusion—combine to produce lifelike skin and fabric details, while carefully sculpted facial features hint at personality and backstory, elevating these models beyond mere technical exercises.',
            dir: 'left'
          }, {
            media: <img src={collLukeDarthVader} alt="WEAPONS" className="collection-image" />,
            title: 'WEAPONS',
            desc: 'The WEAPONS collection assembles models of futuristic armaments and classical designs, from energy rifles and plasma pistols to medieval-inspired blades reimagined in sci-fi style. Hard-surface techniques merge with advanced sculpting to deliver both sleek, industrial forms and ornate detailing, accentuated by worn metal textures and subtle weathering. Conceived for first-person shooter demos, promotional visuals, and concept art, each weapon explores ergonomics, balance, and visual storytelling—suggesting a world in which they might be wielded. This body of work emphasizes functional realism while celebrating the creative flair of speculative armaments. Custom procedural grunge maps and layered decals add authenticity, while optimized polycounts ensure compatibility with game engines, making these weapons ready for seamless integration into interactive projects.',
            dir: 'right'
          }, {
            media: <video src={collTurntableOphanim} autoPlay loop muted />,
            title: 'FLYERS',
            desc: 'The FLYERS collection features static posters, animated shorts, and event mockups crafted for promotional campaigns and social media outreach. Blending client-driven color palettes with a minimalist-meets-techno aesthetic, these designs leverage typography, motion, and composition to capture attention quickly. From looped teaser clips to high-resolution prints, each flyer adapts to its medium—be it Instagram, physical banners, or web banners—while maintaining a cohesive brand language. This collection embodies the intersection of graphic design and 3D visualization, where form meets function in service of marketing and storytelling. Integrated motion graphics emphasize key messages, and layered 3D elements create a sense of depth that elevates traditional flyers into immersive brand experiences tailored for maximum engagement.',
            dir: 'left'
          }, {
            media: <img src={collRoom} alt="LOW - POLY" className="collection-image" />,
            title: 'LOW - POLY',
            desc: 'The LOW – POLY collection is a curated set of compact 3D scenes and assets modeled with deliberately minimal polygon counts, designed as hands-on exercises for artists to master foundational workflows in their 3D software. Each piece—ranging from simple props like chairs and lamps to small urban vignettes—demonstrates how to build compelling forms by manipulating basic geometry, optimizing topology, and applying rudimentary lighting and materials. Working within these low-poly constraints encourages rapid iteration, teaches the relationship between model complexity and real-time performance, and reinforces best practices for clean mesh construction. By tackling projects at this smaller scale, users develop confidence in essential skills—vertex and edge editing, UV unwrapping, and scene composition—laying the groundwork for more ambitious, high-fidelity creations. Ultimately, this collection embodies the vital first steps every 3D artist takes: learning to think in polygons, to innovate within limits, and to establish a solid technical and creative foundation before embarking on larger, more complex endeavors.',
            dir: 'right'
          }].map((col, i) => (
            <div
              key={i}
              ref={el => collectionRefs.current[i] = el}
              className={`collection-item ${col.dir === 'right' ? 'reverse fade-right' : 'fade-left'}`}
            >
              <div className="collection-card">{col.media}</div>
              <div className="collection-info">
                <h2 className="collection-title">{col.title}</h2>
                <p className="collection-description">{col.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
