import React from 'react'
import aboutPoster from '../../../images/about-poster.jpg'
import CustomBgImage from '../../CustomBgImage/CustomBgImage';
import styled from 'styled-components';
import FadeIn from '../../FadeIn/FadeIn';
import { motion } from 'framer-motion';
// import './AboutSection.scss';


const AboutContainer = styled.section`
  min-height: 100vh;
	height: 100%!important;
	padding: 5rem 0.5rem;
  display: flex;
`
const Masthead = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .gradient {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;
    width: 100%;
    height: 30%;
    min-height: 300px;
    max-height: 300px;
    background: linear-gradient(180deg, rgba(29,30,34, 0.055) 40%, rgba(24,24,24,1) 80%);
  }
`
const Introduction = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  z-index: 100;
  h1 {
    margin-top: 20%;
    font-size: 6rem;
    font-weight: bold;
  }
`
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

const Form = styled.form`
  flex: 1;
  height: 100%;
  border: 1px solid red;
`

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid red;
  outline: none;
`

const AboutSection = () => {


  return (
    <AboutContainer className="AboutContainer">
      <div className="container">
        <Masthead className="Masthead">
          <CustomBgImage background="yellow" />
          <div className="gradient" />
        </Masthead>

        <Introduction className="Introduction">
          <h1>About</h1>
        </Introduction>
        <div className="magazines">
          <p>
            Now i live in Austria working
            full time freelance as a
            Web Developer. In my spare time I like to
            take pictures with my Fuji X100F.
            I enjoy building interactive,
            effect heavy javascript
            applications with an eye
            on animated content.
            If you fancy a chat feel free to contact me:
            info@fabianirsara.com
          </p>
          <p>
            I enjoy building interactive,
            effect heavy javascript
            applications with an eye
            on animated content.
          </p>
          <p>
            If you fancy a chat feel free to contact me:
            info@fabianirsara.com
          </p>
        </div>

        <IntroductionSection className="IntroductionSection">
          <FlexRow className="FlexRow">
            <AboutMe fontSize="1rem" className="AboutMe">
              <FadeIn>
                <h1>I really like the atmospheric and aesthetic things in everyday life, but most of all, I appreciate this in my work.</h1>
              </FadeIn>
            </AboutMe>
            <TextSecondary className="TextSecondary">
              <FadeIn>
                <p>I am attentive to all the small details of the design, I appreciate the simplicity and I love working with typography and the grid.</p>
              </FadeIn>
            </TextSecondary>
          </FlexRow>
        </IntroductionSection>
        <IntroductionSection className="FormIntroductionSection">
          <FlexRow>
            <AboutMe>
              <h1>Let's get acquainted! Tell us about your project or ask the question.</h1>
            </AboutMe>
            <Form>
              <Input type="text" />
            </Form>
          </FlexRow>
        </IntroductionSection>
      </div>
    </AboutContainer>
  )
}

export default AboutSection;