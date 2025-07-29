import React from "react";
import ProjectCard from "../ui/ProjectCard/ProjectCard";
import "./ProjectsHome.scss";

interface ProjectsFields {
  createdAt: string;
  documentId: string;
  main_image: {
    url: string;
  };
  name: string;
  short_description: string;
  tags: string[];
  role: string;
  github_repo: string;
  live_demo: string;
}

interface ProjectsHomeProps {
  projects: ProjectsFields[];
}

const ProjectsHome: React.FC<ProjectsHomeProps> = ({ projects }) => {
  console.log("🚀 ~ ProjectsHome ~ projects:", projects)
  return (
    <article className="projects-home">
      <h3 className="projects-home__title">Proyectos</h3>

      <div className="projects-home__container" role="list">
        {projects.map((project) => (
          <ProjectCard
            role="listitem"
            key={project.documentId}
            name={project.name}
            documentId={project.documentId}
            createdAt={project.createdAt}
            image={project.main_image.url}
            text={project.short_description}
            tags={project.tags}
            github_repo={project.github_repo}
            live_demo ={project.live_demo}
          />
        ))}
      </div>

    </article>
  );
};

export default ProjectsHome;