import { motion } from 'motion/react';

const ArtworkCoverImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div
      className="col-span-3 col-start-1 flex justify-center w-full h-full "
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
      <img src={imageUrl} className="object-contain w-min h-full" alt="" />
    </motion.div>
  );
};

export default ArtworkCoverImage;
