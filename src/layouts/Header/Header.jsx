import React from 'react';
import Menu from '../Menu/Menu';
import { BrandDescription, HeaderWrapper } from './headerStyles';

const Header = ({  }) => {
  return (
    <HeaderWrapper>
      <BrandDescription>
        Designer
        <br />
        Photographer
      </BrandDescription>
      <Menu />
    </HeaderWrapper>
  )
}

export default Header;