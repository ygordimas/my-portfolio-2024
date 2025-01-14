import React from 'react';
import { Menu, XmarkSquare, SparkSolid } from 'iconoir-react';
import { AnimatePresence, motion } from 'motion/react';
import { useGalleryContext } from '../../../services/GalleryContext';
import listOfLinks from '../../../utils/listOfLinks';
import HamburgerLink from './HamburgerLink';
import { useMediaQuery } from '@uidotdev/usehooks';

const HamburgerMenu = () => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGalleryContext();
  const isLaptop = useMediaQuery('only screen and (min-width : 1280px)');

  const handleCloseHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  };

  const hamburgerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.2,
        staggerDirection: -1,
        delayChildren: 0.1,
        ease: [0.43, 0.99, 0.73, 1],
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.2,
        staggerDirection: -1,
        ease: [0.43, 0.99, 0.73, 1],
      },
    },
  };

  const hamburgerLinkVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
        ease: [0.43, 0.99, 0.73, 1],
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.15,
        ease: [0.43, 0.99, 0.73, 1],
      },
    },
  };
  return (
    <>
      {!isLaptop && (
        <AnimatePresence>
          {isHamburgerMenuOpen && (
            <motion.nav
              className="fixed flex flex-col w-full h-full items-end bg-accents-light top-0 left-0 z-10 overflow-hidden pr-2"
              variants={hamburgerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => {
                setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
              }}
            >
              <div className="mt-7 text-paper-dark">tap anywhere to close</div>
              <motion.ul className="flex w-full h-full flex-col justify-end items-end divide-y pb-10 ">
                <AnimatePresence>
                  {listOfLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      onClick={handleCloseHamburgerMenu}
                      className="flex items-center justify-center py-4"
                      variants={hamburgerLinkVariants}
                    >
                      <HamburgerLink tag={link.tag} to={link.path} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default HamburgerMenu;
