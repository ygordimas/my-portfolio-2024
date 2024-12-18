import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import { Menu, XmarkSquare, SparkSolid } from 'iconoir-react';
import { useModalContext } from '../../../services/ModalContext';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { transition } from 'three/webgpu';

type NavigationLinks = {
  tag: string;
  path: string;
}[];

const listOfLinks: NavigationLinks = [
  { tag: 'home', path: '/' },
  {
    tag: 'illustrations',
    path: '/gallery/illustrations',
  },
  {
    tag: 'visual art',
    path: '/gallery/abstracts',
  },
  {
    tag: 'game art',
    path: '/gallery/gameart',
  },
  {
    tag: 'contact',
    path: '/contact',
  },
];

const StylizedLink = ({ to, tag, activeTab, setActiveTab }) => {
  const activeTabTransition = {
    duration: 0.3,
    ease: [0.43, 0.99, 0.73, 1],
  };
  const toggleActive = activeTab === tag;
  return (
    <NavLink
      to={to}
      className={`relative text-sm font-secondary text-type-regular py-2 mix-blend-normal`}
      onClick={() => setActiveTab(tag)}
    >
      {toggleActive && (
        <motion.div
          layoutId="active-tag"
          className="absolute inset-0 bg-accents-light "
          transition={activeTabTransition}
        />
      )}
      <motion.span
        className={`z-10 relative ${activeTab === tag && 'font-secondary text-paper-light'}`}
        initial={{
          color: '#3d3d3d ',
        }}
        animate={toggleActive ? { color: '#fcfcfc  ' } : {}}
        transition={activeTabTransition}
      >
        {tag}
      </motion.span>
    </NavLink>
  );
};

const StylizedHamburgerLink = ({ to, tag }) => {
  const basicStyles = 'text-xl rounded p-4';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        !isActive
          ? `text-type-regular focus:text-accents-regular ${basicStyles}`
          : `text-paper-light focus:text-paper-light cursor-default pointer-events-none bg-accents-regular ${basicStyles}`
      }
    >
      {({ isActive }) => (
        <span className="flex gap-2">
          {isActive && <SparkSolid />}

          <p>{tag}</p>
        </span>
      )}
    </NavLink>
  );
};

const Header = () => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useModalContext();
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();
  const params = useParams();

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
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`fixed top-0 w-[calc(100%-32px)] h-min m-4 box-border z-10 flex justify-between bg-gray-50 font-bold px-10 py-2 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg border border-gray-200/25 shadow-[0_0px_4px_0_rgba(85,127,173,0.4)]`}
    >
      <Link
        to={`/`}
        className="text-accents-regular hover:text-accents-light flex flex-col"
      >
        <div className="font-primary text-4xl leading-none">Ygor Dimas</div>
        <div className="font-secondary text-xs tracking-wider text-type-light">
          3D Artist and Creative Developer
        </div>
      </Link>

      <ul className="xl:flex gap-4 items-center hidden ">
        {listOfLinks.map((link) => (
          <li>
            <StylizedLink
              to={link.path}
              tag={link.tag}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </li>
        ))}
      </ul>

      {/* HAMBURGUER MENU STARTS HERE*/}
      <div className="flex xl:hidden items-center relative z-20">
        <div className="z-40 relative" onClick={handleCloseHamburgerMenu}>
          {isHamburgerMenuOpen ? <XmarkSquare /> : <Menu />}
        </div>
        <AnimatePresence>
          {isHamburgerMenuOpen && (
            <motion.nav
              className="fixed w-screen h-screen bg-accents-light inset-0 z-10 overflow-hidden"
              variants={hamburgerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.ul className="flex w-full h-full flex-col justify-end items-end divide-y pb-10 pr-2">
                <AnimatePresence>
                  {listOfLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      onClick={handleCloseHamburgerMenu}
                      className="flex items-center justify-center py-4"
                      variants={hamburgerLinkVariants}
                    >
                      <StylizedHamburgerLink tag={link.tag} to={link.path} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      {/* HAMBURGUER MENU ENDS HERE*/}
    </motion.header>
  );
};

export default Header;
