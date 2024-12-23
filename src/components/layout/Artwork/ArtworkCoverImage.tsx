import { motion } from 'motion/react';
import React from 'react';

const ArtworkCoverImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div
      className="grow overflow-hidden"
      initial={{
        opacity: 10,
        scale: 1,
      }}
      whileInView={{
        opacity: 100,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      transition={{ duration: 0.2, delay: 0.1, ease: 'linear' }}
    >
      <div className="w-full h-full flex">
        <img src={imageUrl} className="object-contain w-min h-full" alt="" />
      </div>
    </motion.div>
  );
};

export default ArtworkCoverImage;
