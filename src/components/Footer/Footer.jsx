import React from 'react';
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext';
import { FooterContainer, WebInfo, LinkItem, LinkList, ListItem } from '../../styles/footerStyles';
import { Container } from '../../styles/globalStyles';
import { socialLinks } from '../../utils/socialLinks';



const Footer = () => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const mouseEntered = () => {
    console.log('mouse entered');
    onCursor('hovered');
  }
  const mouseLeft = () => {
    console.log('mouse left');
    onCursor('');
  }

  return (
    <FooterContainer className="Footer">
      <Container className="Container">
        <WebInfo className="Footer">
          <span>© 2021 Dmitry Kozachyshyn</span>
          <br />
          <span>All rights reserved.</span>
        </WebInfo>
        <LinkList>
          {socialLinks.map((link, idx) => (
            <ListItem key={idx}>
              <LinkItem onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} data-text={link.name} to={link.url}>{link.name}</LinkItem>
            </ListItem>
          ))}
        </LinkList>
      </Container>
    </FooterContainer>
  )
}

export default Footer;