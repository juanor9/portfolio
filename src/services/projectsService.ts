import { graphql, useStaticQuery } from 'gatsby';

// Definimos la "forma" exacta de los datos que vienen de GraphQL
interface IProjectNode {
  id: string;
  name: string;
  short_description: string;
  long_description: {
    data: {
      long_description: string;
    };
  };
  tags: {
    // 👇 Usamos el campo que descubriste
    strapi_json_value: string[];
  };
}

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProject {
        nodes {
          name
          short_description
          tags {
            strapi_json_value
          }
          publishedAt
          createdAt
          documentId
          main_image {
            url
          }
          github_repo {
            URL
          }
          live_demo {
            URL
          }
        }
      }
    }
  `);

  // Transformamos los datos para que sean más fáciles de usar
  return data.allStrapiProject.nodes.map((project: IProjectNode) => ({
    ...project,
    // Extraemos el array de tags desde la nueva estructura
    tags: project.tags.strapi_json_value,
  }));
};
