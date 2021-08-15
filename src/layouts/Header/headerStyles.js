import styled from 'styled-components';

export const HeaderWrapper = styled.header`

`
export const BrandDescription = styled.p`
  position: fixed;
  z-index: 11;
  top: 100px;
  right: 40px;
  max-width: 200px;
  text-align: right;
  font-size: 1.4rem;
  color: #fff;
  opacity: 0.4;
  text-transform: uppercase;
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  font: {
    weight: 300;
    size: 1.4rem;
  }
  &:hover {
    opacity: 1;
  }
`