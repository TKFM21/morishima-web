import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';


const Instagram = () => {
  const data = useStaticQuery(graphql`
  query {
    allInstaNode(
      limit:6,
      sort: {
        fields: [timestamp]
        order: [DESC]
      }
    ) {
      edges {
        node {
          id
          mediaType
          preview
          original
          timestamp
          localFile {
            childImageSharp {
              fixed(width: 280, height: 280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  `)
  const instaPosts = data.allInstaNode.edges;
  return (
    <div className="insta">
      <h2>INSTAGRAM</h2>
      <span>@yado.morishima</span>
      <ul className="insta-posts">
          {instaPosts.map(({ node }) => {
            return (
              <li key={node.id} className="insta-post">
                <Img fixed={node.localFile.childImageSharp.fixed} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Instagram;