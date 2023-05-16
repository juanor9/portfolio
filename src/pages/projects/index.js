import * as React from 'react'
import Layout from '../../components/layout'
// import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

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
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        slug
        title
      }
    }
  }
}
`

export const Head = () => <title>Home Page</title>;

export default ProjectsPage