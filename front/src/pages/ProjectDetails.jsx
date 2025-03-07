import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/assets/db/${projectId}.json`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error loading project data:", err));
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <section className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </section>
  );
}

export default ProjectDetails;
