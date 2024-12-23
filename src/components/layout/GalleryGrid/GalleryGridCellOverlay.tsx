import { motion } from 'motion/react';
import React, { useState } from 'react';
import GalleryGridCellRibbon from './GalleryGridCellRibbon';

const GalleryGridCellOverlay = ({ isLaptop }: { isLaptop: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  const overlayVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 0.3,
    },
  };
  return (
    <motion.div
      className="absolute inset-0 opacity-1 w-full h-full flex items-end justify-end p-1"
      // whileHover="hover"
      // whileInView={!isLaptop ? `hover` : ``}

      viewport={{ amount: 0.75 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="opacity-0 bg-paper-regular absolute inset-0 w-full h-full"
        variants={overlayVariants}
        animate={isHovered ? 'hover' : 'initial'}
      ></motion.div>
      <GalleryGridCellRibbon isLaptop={isLaptop} isHovered={isHovered} />
    </motion.div>
  );
};

export default GalleryGridCellOverlay;
