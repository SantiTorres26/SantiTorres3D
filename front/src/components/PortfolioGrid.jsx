// src/components/PortfolioGrid.jsx
import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard"; // Asegúrate de que la importación es correcta

const PortfolioGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      // Cargamos todos los archivos JSON desde /src/data/
      const files = import.meta.glob("/src/data/*.json", { eager: true });
      const loadedProjects = [];

      // Recorremos cada archivo JSON y extraemos los datos
      for (const path in files) {
        const module = files[path];
        const id = path.split("/").pop().replace(".json", "");
        // Agregamos cada proyecto, incluyendo la prioridad (si no existe, le asignamos un valor alto para que quede al final)
        loadedProjects.push({
          id,
          title: module.title,
          image: module.media.gallery_images[0].src,
          priority: module.priority || 999
        });
      }

      // Ordenamos los proyectos por prioridad (los números más bajos primero)
      loadedProjects.sort((a, b) => a.priority - b.priority);
      console.log("Proyectos cargados y ordenados:", loadedProjects);
      setProjects(loadedProjects);
    };

    loadProjects();
  }, []);

  return (
    <div className="portfolio-grid">
      {projects.map(({ id, title, image }) => (
        <PortfolioCard key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
