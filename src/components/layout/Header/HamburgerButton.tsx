import { Menu, XmarkSquare } from 'iconoir-react';
import React from 'react';

const HamburgerButton = ({ toggleHamburgerMenu, isHamburgerMenuOpen }) => {
  return (
    <div className="relative z-50" onClick={toggleHamburgerMenu}>
      {isHamburgerMenuOpen ? <XmarkSquare /> : <Menu />}
    </div>
  );
};

export default HamburgerButton;
