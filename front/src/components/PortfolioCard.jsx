import { Link } from "react-router-dom";

const PortfolioCard = ({ id, title, image }) => {
  return (
    <Link to={`/portfolio/${id}`} className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <h3 className="portfolio-title">{title}</h3>
    </Link>
  );
};

export default PortfolioCard;
