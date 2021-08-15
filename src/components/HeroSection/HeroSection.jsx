import React, { useContext } from 'react';
import { AppWrapper, ContainerWrapper, ContentProfileNav, Footer, Header, HeroContent, HeroHeadLine, HeroImage, HeroImageReveal, HeroSectionWrapper, HeroWrap, imageReveal, ProfileNav, RotateSuggestor, Social, titleAnimation } from '../../styles/heroSectionStyles';
import img1 from '../../images/rolla1.jpg'

const HeroSection = () => {


  return (
    <AppWrapper className="AppWrapper">
      <ContainerWrapper className="ContainerWrapper">
        <HeroSectionWrapper className="HeroSectionWrapper">
          <HeroWrap className="HeroWrap">
            <HeroContent className="HeroContent">
              <div className="left">
                <ContentProfileNav className="ContentProfileNav">
                  <a href="#!">Designer</a>
                  <span></span>
                  <a href="#!">Photographer</a>
                </ContentProfileNav>
                <HeroHeadLine>
                  <span>I'm a passionate self-taught </span>
                  <span>
                    <Social variants={titleAnimation} initial="hidden" animate="show">
                      <span><em>digital designer </em>&<em> photographer </em></span>
                    </Social>
                    based in Poland.</span>
                </HeroHeadLine>
              </div>
            </HeroContent>
          </HeroWrap>
          <HeroImage className="HeroImage">
            <HeroImageReveal variants={imageReveal} initial="default" animate="revealed" />
            <img src={img1} alt="HeroImage" />
          </HeroImage>
          <RotateSuggestor className="ScrollImg"></RotateSuggestor>
        </HeroSectionWrapper>
      </ContainerWrapper>
    </AppWrapper>
  )
}

export default HeroSection;