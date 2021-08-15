import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types"
import Bars from "./Bars/Bars";
import { Container, Flex } from "../../styles/globalStyles";
import { HeaderNav, Logo, Menu } from "../../styles/headerStyles";
import { ProfileNav } from "../../styles/heroSectionStyles";

const Header = ({ siteTitle, onClick, navState }) => {

  
  return (
    // <HeaderNav initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }} className="Header">
    <HeaderNav className="Header">
      <Container className="Container">
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">{siteTitle}</Link>
          </Logo>
          <ProfileNav className="ProfileNav">
            <a href="#!">Designer</a>
            <span></span>
            <a href="#!">Photographer</a>
          </ProfileNav>
          <Bars onClick={onClick} navState={navState} />
        </Flex>
      </Container>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;