import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/globalContext";
import { socialLinks } from "../utils/socialLinks";
import "../sass/main.scss";
// import Header from "../components/Header/Header";
import Header from "./Header/Header";
import ContactButton from "./ContactButton/ContactButton";



const LayoutContainer = styled.div`
  width: 100%;
  height: 100%!important;
`
const SocialList = styled.ul`
  display: none;
  position: fixed;
  bottom: 250px;
  right: -200px;
  padding: 10px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform-origin: 50% 51%;
  -webkit-transform-origin: 50% 51%;
  z-index: 99999;

  @media(min-width: 1120px) {
    display: block;
  }

  /* @media(min-width: 1680px) {
    right: -10vw;
  }
  @media(min-width: 1680px) {
    right: -10vw;
  }
  @media(min-width: 2220px) {
    right: -5vw;
  } */
`
const SocialListItem = styled.li`
  padding: 2rem;
  opacity: 1;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  transition: opacity 0.5s cubic-bezier(0.2, 0, 0.38, 0.9);
  &:hover {
    opacity: 0.2;
  }
`
const SocialLinkItem = styled.a`
  display: inline-block;
  vertical-align: top;
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  line-height: 1;
  color: #fff;

`
const MainContent = styled.main`
  height: 100%!important;
`

const Layout = ({ children }) => {

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })


  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [navState, setNavState] = useState({ clicked: false });

  const handleMenu = () => {
    if (navState.clicked === true) setNavState({ clicked: !navState.clicked })
    if (navState.clicked === false) setNavState({ clicked: !navState.clicked })
  }

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }



  return (
    <LayoutContainer className="Layout">
      <div className="frame frame-top"></div>
      <div className="frame frame-right"></div>
      <div className="frame frame-bottom"></div>
      <div className="frame frame-left"></div>

      <CustomCursor/>


      {/* <Header navState={navState} onClick={handleMenu} siteTitle={data.site.siteMetadata?.title} /> */}
      <Header />
      <ContactButton />
      <Navigation navState={navState} />
      <MainContent className="MainContent">
        {children}
      </MainContent>
      <SocialList>
        {socialLinks.map((link) => (
          <SocialListItem key={link.id} onMouseEnter={() => onCursor('big-hovered')} onMouseLeave={() => onCursor('')}>
            <SocialLinkItem href={link.url} target="_blank">
              {link.name}
            </SocialLinkItem>
          </SocialListItem>
        ))}


      </SocialList>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;