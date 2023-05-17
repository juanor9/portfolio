import * as React from 'react'
import Layout from '../../components/layout'
// import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectsPage = ({data}) => {
  return (
    <Layout>
      <h2>Projects</h2>
      <p>My cool posts will go in here</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.excerpt}</p>
            <a href={node.frontmatter.link} target="_blank"
                rel="noreferrer">Live</a>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}
export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      excerpt
      id
      frontmatter {
        date(formatString: "DD, MMMM, YYYY")
        link
        main_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        slug
        title
      }
    }
  }
}
`

export const Head = () => <title>Home Page</title>;

export default ProjectsPage