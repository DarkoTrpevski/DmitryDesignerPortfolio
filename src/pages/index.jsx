import * as React from "react";
import { AnimatePresence } from 'framer-motion';
import { graphql } from "gatsby"
import Layout from "../layouts/Layout";
import Seo from "../components/seo";
import HeroSection from "../components/HeroSection/HeroSection";


// Dmitry Kozachyshyn is a young Ukrainian furniture designer who has ten years experience in designing and producing classic style furniture.
// After getting enough experience in classic furniture he began his own artistic way in designing modern style furniture.
// It took few years to form his own style. The unique feature of his style is not only creating geometric shapes but giving to it more deeper ideas,
// such as play of light and shadows and shaping spatial illusions. In his creative work,
// he tries to present furniture as an art object that you encounter in everyday life and which has a utilitarian function.

const IndexPage = ({ data }) => {
  console.log('Inside IndexPage, data is: ', data);
  return (
    <AnimatePresence>
      <Layout>
        {/* <Seo title="Home" /> */}
        <HeroSection data={data}/>
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage;
export const pageQuery = graphql`
  query {
    famousPeopleInformation: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image1alt
            title
            Image01 {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  transformOptions: {cropFocus: CENTER}
                  aspectRatio: 0.7
                )
              }
            }
          }
        }
      }
    }
  }
`