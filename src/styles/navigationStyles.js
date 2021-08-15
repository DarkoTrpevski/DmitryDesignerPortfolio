import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  color: #000;
  z-index: 99999;
  overflow: hidden;
`
export const NavBefore = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #fff;
  color: #000;
  overflow: hidden;
`
export const NavWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: block;
  background: var(--bg-clr);
  border-right: 2px solid var(--gold-clr);
  color: #000;
`

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 101;
`

export const Columns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;
  }
`
export const Column = styled.div`
  display: flex;

  @media only screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }
  span.line {
    position: fixed;
    display: none;
    width: 1px;
    height: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(255, 255, 255, 0.03);
    @media only screen and (min-width: 768px){
      display: block;
    }
  }
  a {
    color: #ffffff55;
    transition: color 0.2s ease-in;
    h1 {
      margin: 1rem 0;
      font-size: 3rem;
      line-height: 1;
      @media only screen and (min-width: 768px){
        font-size: 4rem;
      }
      @media only screen and (min-width: 768px){
        font-size: 5rem;
      }
      .wrap-item {
        padding-left: 20px;
      }
    }
    &:hover {
      color: #fff;
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: #fff;
  }
  svg path {
    fill: #fff;
  }
`