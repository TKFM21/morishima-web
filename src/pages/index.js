import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Instagram from "../components/instagram"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img fluid={data.top.childImageSharp.fluid} className="hero-image" />
      </section>
      <section className="container">
        <span className="description">
          一泊一組限定
          <br />
          一棟貸切りの宿
        </span>
        <div className="gallery-grid">
          <Img
            fluid={data.bbq.childImageSharp.fluid}
            className="gallery-img1"
          />
          <Img
            fluid={data.exterior.childImageSharp.fluid}
            className="gallery-img2"
          />
          <Img
            fluid={data.living.childImageSharp.fluid}
            className="gallery-img3"
          />
        </div>
        <div className="about-grid">
          <h2>快適なご滞在をサポート</h2>
          <p>
            家具・家電など一式が揃っていますので、ご自由にお使いいただけます。
            <br></br>
            宿泊だけでなく、お打合せや教室などの時間単位でのご利用も可能です。
            <br></br>
            柔軟に対応いたしますので、お気軽にお問合せください！！
          </p>
        </div>
      </section>
      <div className="parallax"></div>
      <section className="container">
        <Instagram />
      </section>
      {typeof window !== "undefined" && (
        <LeafletMap
          position={[36.299465, 138.243906]} // Your Coordinates
          zoom={10} // Zoom Level
          markerText={"一棟貸しの宿 もりしま"} // Icon text.
        />
      )}
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    top: file(relativePath: { eq: "top-morishima.jpg" }) {
      ...fluidImage
    }
    living: file(relativePath: { eq: "living.jpg" }) {
      ...fluidImage
    }
    bbq: file(relativePath: { eq: "bbq.jpg" }) {
      ...fluidImage
    }
    exterior: file(relativePath: { eq: "exterior.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
