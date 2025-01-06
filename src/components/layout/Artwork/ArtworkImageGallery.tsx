import { motion } from 'motion/react';

const ArtworkImageGallery = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  return (
    <motion.div
      className="col-span-3 col-start-1 flex flex-col gap-1 justify-center items-center w-full h-full "
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
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.src}
            className=" h-auto max-h-screen"
            alt=""
          />
        );
      })}
    </motion.div>
  );
};

export default ArtworkImageGallery;
