import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import { Menu, XmarkSquare, SparkSolid } from 'iconoir-react';
import { useModalContext } from '../../../services/ModalContext';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import listOfLinks from '../../../utils/listOfLinks';
import Head from './Head';
import HamburgerButton from './HamburgerButton';
import HeaderLinks from './HeaderLinks';
import { useMediaQuery } from '@uidotdev/usehooks';

const Header = () => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useModalContext();
  const [activeTab, setActiveTab] = useState('');
  const isLaptop = useMediaQuery('only screen and (min-width : 1280px)');
  const showHamburgerMenu = isHamburgerMenuOpen && !isLaptop;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`fixed mt-2 top-0 w-full text-type-dark h-min z-10 flex justify-between items-center`}
      >
        <div className="w-[calc(100%-32px)] glassmorph flex px-4 justify-between items-center mx-auto">
          <Head />

          {isLaptop && <HeaderLinks />}
          {!isLaptop && (
            <HamburgerButton
              toggleHamburgerMenu={() =>
                setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
              }
              isHamburgerMenuOpen={isHamburgerMenuOpen}
            />
          )}
        </div>
        {showHamburgerMenu && <HamburgerMenu />}
      </motion.header>
    </>
  );
};

export default Header;
