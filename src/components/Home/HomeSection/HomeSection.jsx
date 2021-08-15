import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import FadeIn from '../../FadeIn/FadeIn';
import Title from './Title';
import Image from './Image';


const IntroductionSection = styled(motion.div)`
  width: 100%;
  height: 595px;
  padding: 0 2rem;
  letter-spacing: 0.2rem;

  @media only screen and(min-width: 640px) {
    height: 470px;
  }
  @media only screen and(min-width: 960px) {
    height: 730px;
  }
  @media only screen and(min-width: 1480px) {
    height: 830px;
  }
`

const FlexRow = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AboutMe = styled(motion.div)`
  width: 450px;
  margin-top: 250px;
  /* font-size: 2rem; */
  h1 {
    text-align: start;
    font-size: ${props => props.fontSize};
  }
`
const TextSecondary = styled(motion.div)`
  width: 300px;
  align-self: flex-end;
  margin-right: 10%;
  p {
    text-align: start;
  }
`
const MainContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10rem 0;
  padding: 2rem 4rem;
  transition: all 0.5s ease;
`
const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
`
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  transition: all 0.5s ease;
`

const CardSection = styled.section`
  width: 100%;
  height: 100%;
`

const HomeSection = () => {

  const data = useStaticQuery(
    graphql`
    query {
      featuredProjects: allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              image1alt
              title
              Image01 {
                childImageSharp {
                  gatsbyImageData(
                    width: 2000,
                    quality: 50,
                    webpOptions: {quality: 70}
                    placeholder: BLURRED
                    transformOptions: {cropFocus: CENTER}
                  )
                }
              }
              para
            }
          }
        }
      }
    }
    `
  );

  const [rotationPosition, setRotation] = useState(new Array(data.featuredProjects.edges.length).fill(0));
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const newRotation = Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1);
    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  }
  console.log('Inside HomeSection, rotationPosition is: ', rotationPosition);
  console.log('Inside HomeSection, activeIndex is: ', activeIndex);

  return (
    <section className="HomeSection" style={{ height: "100%!important" }}>
      <Banner />
      <IntroductionSection className="IntroductionSection">
        <FlexRow className="FlexRow">
          <AboutMe fontSize="1rem" className="AboutMe">
            <FadeIn>
              <h1>My name is Jürgen.I'm based in Frankfurt, Germany, but I work with the whole world.</h1>
            </FadeIn>
          </AboutMe>
          <TextSecondary className="TextSecondary">
            <FadeIn>
              <p>Using the minimalism and aesthetics I help projects and businesses achieve their goals.</p>
            </FadeIn>
          </TextSecondary>
        </FlexRow>
      </IntroductionSection>
      <IntroductionSection>
        <FlexRow className="FlexRow">
          <AboutMe className="AboutMe">
            <FadeIn>
              <h1>In minimalism functionality always comes first. Every detail works for the final result.</h1>
            </FadeIn>
          </AboutMe>
          <TextSecondary fontSize="1rem" className="TextSecondary">
            <FadeIn>
              <p>All unnecessary is removed. All that remains is the focus on what's important to your brand.</p>
            </FadeIn>
          </TextSecondary>
        </FlexRow>
      </IntroductionSection>
      {/* {data.featuredProjects.edges.map((node, idx) => {
        return (
          <Card key={idx} {...node} />
        )
      })} */}
      <MainContainer>
        <TitleContainer className="TitleContainer">
          {data.featuredProjects.edges.map((node, idx) => {
            return (
              <Title key={idx} {...node} index={idx} setRotation={handleSetRotation} setIndex={setActiveIndex} />
            )
          })}
        </TitleContainer>
        <ImageContainer className="ImageContainer">
          {data.featuredProjects.edges.map((node, idx) => {
            return (
              <Image key={idx} {...node} active={activeIndex === idx} rotationPosition={rotationPosition[idx]} />
            )
          })}
        </ImageContainer>
      </MainContainer>
    </section>
  )
}

export default HomeSection;