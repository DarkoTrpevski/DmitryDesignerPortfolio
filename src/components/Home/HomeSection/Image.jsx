import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.5s ease;
  z-index: -1;
`

const Image = ({ node, index, active, rotationPosition }) => {

  const pluginImage = getImage(node.frontmatter.Image01);
  return (
    <CardImage className={active ? "CardImage active" : "CardImage"} image={pluginImage} alt={node.frontmatter.image1alt}
    style={{
      zIndex: active ? 999 : 1,
      transform: active ? `scale(0.95) rotate(${rotationPosition}deg)` : `scale(1) rotate(${rotationPosition}deg)`
    }}
    >

    </CardImage>
  )
}

export default Image;