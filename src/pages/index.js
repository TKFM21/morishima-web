import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {
  
return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.top.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <span className="description">
        一泊一組限定、一棟貸切りの宿です。<br></br>
        家具・家電など一式が揃っていますので、ご自由にお使いいただけます。<br></br>
        宿泊だけでなく、お打合せや教室などの時間単位でのご利用も可能です。<br></br>
        柔軟に対応いたしますので、お気軽にお問合せください！
      </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>WE'RE CRAZY ABOUT COFFEE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[36.299465, 138.243906]} // Your Coordinates
        zoom={10} // Zoom Level
        markerText={"一棟貸しの宿 もりしま"} // Icon text
      />
    }
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
`;

export const pageQuery = graphql`
  query {
    top: file(relativePath: { eq: "top-morishima.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "logo-morishima.png" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
