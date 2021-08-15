import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import aboutBg from '../../images/about-poster.jpg';


const BgImageContainer = styled(BgImage)`
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
`;
const OpacityContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #181818;
  opacity: 0;
`;

const CustomBgImage = ({ posterHeight }) => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "about-poster.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 75,
              webpOptions: {quality: 100}
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
    `
  );

  const scrollRefOpacity = useRef(null);
  const { width, height } = useWindowSize();

  const handleScroll = () => {
    scrollRefOpacity.current.style.opacity = Math.round(window.pageYOffset) / (height / 2);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, [])

  const pluginImage = getImage(backgroundImage123);

  return (
    <BgImageContainer id="BgImageContainer" posterHeight={posterHeight} image={pluginImage}>
      <OpacityContainer id="opacityHandler" ref={scrollRefOpacity}></OpacityContainer>
    </BgImageContainer>
  )
}
export default CustomBgImage;