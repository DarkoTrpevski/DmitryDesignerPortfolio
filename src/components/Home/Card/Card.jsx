import React from 'react'
import { BGImgContainer, CardImage, ImageWrapper, DarkOverlay, TextWrapper } from '../../../styles/home/cardStyles';
import { getImage } from "gatsby-plugin-image"



const Card = ({ node }) => {

  const pluginImage = getImage(node.frontmatter.Image01);

  return (
    <BGImgContainer className="BGImgContainer" image={pluginImage}>
      <ImageWrapper className="ImageWrapper" >
        <CardImage className="CardImage" image={pluginImage} alt={node.frontmatter.image1alt} />
        <DarkOverlay className="DarkOverlay" />
      </ImageWrapper>
      <TextWrapper className="TextWrapper">
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.para}</p>
        </TextWrapper>
    </BGImgContainer>
  )
}

export default Card;