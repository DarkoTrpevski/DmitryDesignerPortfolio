import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 4rem;
  left: 0;
  background: transparent;
  z-index: 999999;

  @media(min-width: 768px) {
    top: 8rem;
  }
`
export const Logo = styled.div`
  user-select: none;
  cursor: none!important;
  opacity: .4;
  transition: opacity 0.2s cubic-bezier(0.51, 0.07, 0.47, 0.91);
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: #fff;
    cursor: none!important;
  }
  span {
    height: 16px;
    width: 16px;
    background: #ea291e;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
  &:hover {
    opacity: 1;
  }
`