import { Menu, XmarkSquare } from 'iconoir-react';
import React from 'react';

type HamburgerButtonType = {
  toggleHamburgerMenu: () => void;
  isHamburgerMenuOpen: boolean;
};

const HamburgerButton = ({
  toggleHamburgerMenu,
  isHamburgerMenuOpen,
}: HamburgerButtonType) => {
  return (
    <div className="relative z-50" onClick={toggleHamburgerMenu}>
      {isHamburgerMenuOpen ? <XmarkSquare /> : <Menu />}
    </div>
  );
};

export default HamburgerButton;
