import React from "react";
import "./ProjectCard.scss";
import Tag from "../Tag/Tag";
import { Link } from "gatsby";

export interface ProjectCardProps {
  name: string;
  documentId: string;
  createdAt: string;
  image: string;
  text: string;
  tags: string[];
  role: string;
  github_repo?: string;
  live_demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  createdAt,
  documentId,
  image,
  text,
  tags,
  role,
  github_repo,
  live_demo }) => {

  const imageUrl = `https://portfolio-back-production-3eee.up.railway.app${image}`
  return (
    <div className="project-card" id={documentId} role={role}>
      <div className="project-card__content">
        <h4 className="project-card__title">{name}</h4>
        <picture>
          <img src={imageUrl} alt={name} />
        </picture>
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} _isLink={false} text={tag} />
          ))}
        </ul>
        <p>{text}</p>
      </div>

      <div className="project-card__actions">
        <div role="group" className="project-card__buttons">
          <Link to={`/projects/${documentId}`} className="primary-button fullwidth">Ver proyecto</Link>
          {github_repo
            ? <Link to={github_repo} className="primary-button">Github</Link>
            : null}
          {live_demo
            ? <Link to={live_demo} className="primary-button">Live Demo</Link>
            : null}
        </div>
        <small className="project-card__date">Creado: {new Date(createdAt).toLocaleDateString("es-CO")}</small>
      </div>

    </div>)
};

export default ProjectCard;
