import { EyeSolid } from 'iconoir-react';
import { motion } from 'motion/react';
import React from 'react';

const GalleryGridCellRibbon = ({
  isLaptop,
  isHovered,
}: {
  isLaptop: boolean;
  isHovered: boolean;
}) => {
  const hoverVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <motion.span
      className="z-10 flex w-32 h-32 items-end justify-end gap-1 lg:w-40 opacity-0 lg:h-40 text-paper-regular"
      whileInView={!isLaptop ? `hover` : ``}
      viewport={{ amount: 0.8 }}
      variants={hoverVariants}
      animate={isHovered ? 'hover' : 'animate'}
    >
      <p className="flex h-8 items-center justify-center bg-accents-regular font-secondary px-4">
        View
      </p>
      <span className="bg-paper-regular">
        <EyeSolid className="text-accents-regular" width="2rem" height="2rem" />
      </span>
    </motion.span>
  );
};

export default GalleryGridCellRibbon;
