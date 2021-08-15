import React from 'react';
import MenuButton from './MenuButton/MenuButton';
import MenuContent from './MenuContent/MenuContent';
import { MenuWrapper } from './menuStyles';

const Menu = () => {
  return (
    <MenuWrapper className="MenuWrapper">
      <MenuButton className="MenuButton" />
      {/* <MenuContent /> */}
    </MenuWrapper>
  )
}

export default Menu;