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

  const rendersWhen = !isHamburgerMenuOpen && location.pathname !== '/';
  return (
    <>
      {/* {rendersWhen && (
        <div className="flex flex-col w-full items-center gap-2 z-40 absolute bottom-0 overflow-hidden">
          <div className="glassmorph self-end mr-2">
            <FooterSocialMediaIcons />
          </div>
          <FooterHorizontalRibbon duration={18} />
        </div>
      )} */}
      <div className="w-full min-h-48 text-paper-regular bg-accents-regular px-4 py-4 flex flex-col items-end justify-end box-border justify-self-end">
        <FooterSocialMediaIcons />
        <p className="text-xs">developed by Ygor Dimas.</p>
      </div>
    </>
  );
};

export default Footer;
