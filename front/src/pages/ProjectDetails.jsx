// src/pages/ProjectDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MediaModal from "../components/MediaModal";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState({ src: "", type: "" });

  useEffect(() => {
    const loadProject = async () => {
      try {
        const files = import.meta.glob("/src/data/*.json", { eager: true });
        const projectData = files[`/src/data/${projectId}.json`];
        if (!projectData) throw new Error("Project not found");
        console.log("📂 Project data loaded:", projectData);
        setProject(projectData);
      } catch (err) {
        console.error("❌ Error loading project data:", err);
      }
    };
    loadProject();
  }, [projectId]);

  const openModal = (src, type) => {
    setCurrentMedia({ src, type });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!project) return <p>Loading...</p>;

  return (
    <main className="project-details-main">
      {/* Botón fijo en la esquina superior izquierda */}
      <Link to="/portfolio" className="back-to-portfolio-btn">
        ← Back to Portfolio
      </Link>

      {/* Contenedor principal de la sección */}
      <section className="section project-section">
        {/* Contenedor del título (centrado) */}
        <div className="project-title-container">
          <h1 className="project-title">"{project.title}"</h1>
        </div>

        {/* Contenedor de contenido en dos columnas */}
        <div className="project-content">
          <div className="project-left">
            <div
              className="turntable-card"
              onClick={() => openModal(project.media.turntable_video, "video")}
            >
              <video src={project.media.turntable_video} autoPlay loop muted></video>
            </div>
          </div>

          <div className="project-right">
            <h2 className="about-title">ABOUT THIS PROJECT:</h2>
            <div className="project-details">
              <p> - HISTORY: {project.about.history}</p>
              <p>{project.about.element_info}</p>
              <p> - COLLECTION: {project.about.collection}.</p>
              <p> - TECHNOLOGIES: {project.about.technologies.join(", ")}.</p>
            </div>
          </div>
        </div>

        {/* Galería */}
        <h2 className="gallery-title">GALLERY</h2>
        <div className="gallery">
          {project.media.gallery_images.map((imageObj, index) => (
            <div
              key={index}
              className={`gallery-item ${imageObj.aspect}`}
              onClick={() => openModal(imageObj.src, "image")}
            >
              <img src={imageObj.src} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}

          {project.media.gallery_videos.map((videoObj, index) => (
            <div
              key={`vid-${index}`}
              className={`gallery-item ${videoObj.aspect}`}
              onClick={() => openModal(videoObj.src, "video")}
            >
              <video src={videoObj.src} autoPlay loop muted></video>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de imágenes y videos */}
      <MediaModal
        isOpen={modalOpen}
        mediaSrc={currentMedia.src}
        mediaType={currentMedia.type}
        onClose={closeModal}
      />
    </main>
  );
}

export default ProjectDetails;
