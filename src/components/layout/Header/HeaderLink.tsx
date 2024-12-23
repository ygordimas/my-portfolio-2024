import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type HeaderLinkProps = {
  to: string;
  tag: string;
  path: string;
  activeTab: string;
  setActiveTab: (tag: string) => void;
};

const HeaderLink = ({
  to,
  tag,
  path,
  activeTab,
  setActiveTab,
}: HeaderLinkProps) => {
  const [toggleActive, setToggleActive] = useState(false);
  const location = useLocation();
  const activeTabTransition = {
    duration: 0.3,
    ease: [0.43, 0.99, 0.73, 1],
  };

  useEffect(() => {
    if (path === location.pathname) {
      setToggleActive(true);
    } else {
      setToggleActive(false);
    }
  }, [location.pathname]);

  return (
    <NavLink
      to={to}
      className={`relative text-base uppercase font-paragraph tracking-tight text-type-regular py-1 px-1  mix-blend-normal`}
      onClick={() => setActiveTab(tag)}
    >
      {toggleActive && (
        <motion.div
          layoutId="active-tag"
          className="absolute inset-0 bg-accents-light rounded"
          transition={activeTabTransition}
        />
      )}
      <motion.span
        className={`z-10 relative ${activeTab === tag && 'font-paragraph text-paper-light'}`}
        initial={{
          color: '#232323 ',
        }}
        animate={toggleActive ? { color: '#fcfcfc  ' } : {}}
        transition={activeTabTransition}
      >
        {tag}
      </motion.span>
    </NavLink>
  );
};

export default HeaderLink;
