import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"

export const BGImgContainer = styled.div`
  width: 100%;
  height: 495px;
  position: relative;
  cursor: pointer;
  z-index: 1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 640px){
    height: 400px;
  }

  @media only screen and (min-width: 768px){
    height: 300px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #181818;
  position: absolute;
  opacity: 0;
  z-index: 2;
  transition: all 0.5s ease-in;
  &:hover {
    transition: all 0.5s ease-in;
    opacity: 1;
  }
`

export const DarkOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.35);
  z-index: 2;
`
export const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  position: relative;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  padding: 4rem 2rem;
  z-index: 4;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    @media only screen and (min-width: 640px){
      width: 350px;
    }
    @media only screen and (min-width: 960px){
      margin-left: 0;
    }
    @media only screen and (min-width: 1250px){
      margin-right: 5%;
    }
  }
  p {
    @media only screen and (min-width: 640px){
      width: 350px;
    }
    @media only screen and (min-width: 960px){
      margin-left: 0;
    }
    @media only screen and (min-width: 1250px){
      margin-right: 5%;
    }
  }
  
  @media only screen and (min-width: 960px){
    align-items: flex-end;
    padding-top: 6rem;
  }
  
  @media only screen and (min-width: 1250px){
    padding: 3rem 0;
  }

  /* @media only screen and (min-width: 768px){
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
`
// import styled from 'styled-components';
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// export const BGImgContainer = styled.div`
//   width: 100%;
//   height: 495px;
//   position: relative;
//   cursor: pointer;
//   z-index: 1;

//   .gatsby-image-wrapper {
//     width: 100%;
//     height: 100%;
//   }

//   @media only screen and (min-width: 480px){
//     height: 420px;
//   }
//   @media only screen and (min-width: 768px){
//     font-size: clamp(2rem, 3vw + 1rem, 3rem);
//   }
//   @media only screen and (min-width: 992px){
//     height: 300px;
//   }

// `
// export const CardImage = styled(GatsbyImage)`
//   width: 100%;
//   height: 100%;
//   opacity: 1!important;
//   background-size: cover;
//   background: rgba(0,0,0,0.5);
//   background-size: cover;

// `

// export const ImageWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: #181818;
//   opacity: 1;
//   z-index: 2;
//   transition: all 0.5s ease-in;
//   &:hover {
//     transition: all 0.5s ease-in;
//     opacity: 0;
//   }
// `

// export const DarkOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   z-index: 3;

//   @media only screen and (min-width: 768px){
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 4;
//   }
// `
// export const TextWrapper = styled.div`
//   position: relative;
//   z-index: 4;

//   @media only screen and (min-width: 768px){
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//   }
// `