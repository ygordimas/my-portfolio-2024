import React from 'react';
import { Instagram, GithubCircle } from 'iconoir-react';
import { motion } from 'motion/react';
import FooterHorizontalRibbon from './FooterHorizontalRibbon';
import FooterSocialMediaIcons from './FooterSocialMediaIcons';
import { useGalleryContext } from '../../../services/GalleryContext';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const { isHamburgerMenuOpen } = useGalleryContext();

  const rendersWhen = !isHamburgerMenuOpen && location.pathname === '/';
  return (
    <>
      {rendersWhen && (
        <div className="flex flex-col w-full items-center gap-2 z-40 absolute bottom-0 overflow-hidden">
          <div className="glassmorph self-end mr-2">
            <FooterSocialMediaIcons />
            {/* <div className=" px-4 font-paragraph ">
            designed & developed by Ygor Dimas
          </div> */}
          </div>
          <FooterHorizontalRibbon duration={18} />
        </div>
      )}
    </>
  );
};

export default Footer;
