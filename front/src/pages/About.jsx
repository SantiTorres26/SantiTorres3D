// About.jsx
import React from 'react';

const About = () => {
  return (
    <main>
      {/* About Me Section */}
      <section className="section about-section">
        <h1>ABOUT ME</h1>
        <div className="about-content">
          {/* Left Section */}
          <div className="about-left">
            <h2>¿Who am I?</h2>
            <p>
              <h3>Hi! I'm Santiago Andrés Torres.</h3>
              I’m a passionate 3D enthusiast and a Web Development student based in Argentina, with a high focus on front-end
              skills. My journey in the digital world has always been driven by a love for creativity and
              problem-solving.
            </p>
            <p>
              <h3>Creating the Digital World.</h3>
              Whether it's crafting immersive worlds, designing unique characters, developing fluid animations, or
              building dynamic web pages, I thrive on turning ideas into digital reality. I’m constantly exploring
              new techniques and technologies to push my creative boundaries.
            </p>
            <p>
              <h3>"Always Learning, Always Growing".</h3>
              I pride myself on being a lifelong learner in the tech industry. Currently, I’m sharpening my skills
              as a web developer while also continuing to grow as a 3D artist. I’m actively looking for
              opportunities to collaborate in creative teams, work on challenging projects, and gain invaluable
              industry experience.
              In my spare time, I work on NFT collections and digital art, always looking for new ways to merge
              creativity with technology.
            </p>
            <p>
              <h3>My Vision:</h3>
              My goal is to blend creativity and technical expertise to produce innovative, high-quality results
              that not only inspire but also engage users. I’m driven by the desire to craft experiences that are
              both visually stunning and functionally exceptional.
            </p>
            <p>
              <h3>Professional Experience:</h3>
              As a freelance 3D modeler and animator, I’ve had the opportunity to work on a variety of projects,
              including music visualizers, personal artistic creations, and more. Additionally, as a web developer, I’m
              building responsive, creative, and functional web pages that provide an exceptional user experience.
            </p>
          </div>
          {/* Right Section */}
          <div className="about-right">
            <h2>3D & Design Technologies:</h2>
            <ul>
              <li>Blender</li>
              <li>Autodesk Maya</li>
              <li>ZBrush</li>
              <li>Substance Painter</li>
              <li>Houdini</li>
              <li>Keyshot</li>
              <li>Arnold Renderer</li>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Illustrator</li>
            </ul>
            <h2>Web Development Technologies:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>React</li>
              <li>Node.Js</li>
              <li>TailwindCss</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
