import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';


const BannerContainer = styled.div`
  width: 100%;
  height: 100%!important;
`
const FlexContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  font-size: 10rem;
  font-weight: 300;
  line-height: 1;
  h1, h2, h3 {
    line-height: 1;
    font-weight: 300;
    word-break: break-all;
    font-size: clamp(2.4rem, 4vw + 1rem, 10rem);
    @media only screen and (min-width: 1200px){
      font-size: 11rem;
    }
    span {
      line-height: 1.2;
    }
  }
`

const TextWrapper = styled(motion.div)`
  padding: 1rem;
  @media only screen and (min-width: 480px){
    padding: 2rem;
  }
`


const Banner = () => {

  const line1 = "Digital Photographer";
  const sentence = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { delay: 2, staggerChildren: 0.085 } } };
  const letter = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  const nameVariant = {
    hidden: { opacity: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.1 } },
    visible: { opacity: 1, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.1 } },
  }

  return (
    <BannerContainer className="BannerContainer">
      <FlexContainer style={{ zIndex: "2" }}>

        <TextWrapper>
          <motion.h1 initial="hidden" animate="visible" variants={nameVariant}>Jürgen Reichel</motion.h1>
          <motion.h3 className="load-screen-message" variants={sentence} initial="hidden" animate="visible">
            {line1.split("").map((char, idx) => (
              <motion.span key={char + "-" + idx} variants={letter}>{char}</motion.span>
            ))}
          </motion.h3>
        </TextWrapper>
      </FlexContainer>
    </BannerContainer>
  );
};

export default Banner;