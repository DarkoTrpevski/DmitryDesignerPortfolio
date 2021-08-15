import React from 'react';
import styled from 'styled-components';

const TitleItem = styled.div`
  padding: 4rem 1rem;
  user-select: none;
  h1 {
    font-size: 5rem;
  }
`


const Title = ({ node, index, setRotation, setIndex }) => {

  const onMouseEnter = () => {
    setRotation(index);
  }
  const onMouseLeave = () => {
    setRotation(0)
    setIndex(-1)
  }

  return (
    <TitleItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <h1>{node.frontmatter.title}</h1>
    </TitleItem>
  )
}

export default Title;