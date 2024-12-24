import { motion } from 'motion/react';
import React from 'react';

const FooterHorizontalRibbon = ({ duration = 16 }) => {
  const listOfAttributions = [
    '3D Modeling',
    '3D Rendering',
    'Environment Art',
    'Props Art',
    'Game Assets',
    'Game Textures',
    'Lowpoly Assets',
    'Stylized Assets',
    'Abstract Art',
    'Animations',
    'Product Rendering',
    'Web Development',
    'AR/VR',
  ];
  return (
    <div className="w-full flex bg-accents-light py-2.5 font-paragraph text-xl text-paper-light tracking-widest">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex flex-shrink-0"
      >
        {listOfAttributions.map((attribution, index) => {
          return (
            <div className="pr-20" key={index}>
              {attribution}
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex flex-shrink-0"
      >
        {listOfAttributions.map((attribution, index) => {
          return (
            <div className="pr-20" key={index}>
              {attribution}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FooterHorizontalRibbon;
