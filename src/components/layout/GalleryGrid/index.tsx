import React, { useEffect, useRef, useState } from 'react';
import { useModalContext } from '../../../services/ModalContext';
import { useParams, Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';
import { OneFingerSelectHandGesture, EyeSolid } from 'iconoir-react';
import { useInView } from 'motion/react';
import { useMediaQuery } from '@uidotdev/usehooks';

import { ProjectsProps } from '../../../utils/types/types';
import getProjectsList from '../../../utils/getProjectsList';
import formatTitle from '../../../utils/formatTitle';

type GalleryType = {
  projects: ProjectsProps[];
};

const GalleryGrid = ({ projects }: GalleryType) => {
  const {
    currentImageId,
    setCurrentImageId,
    setIsModalOpen,
    setCurrentGalleryName,
  } = useModalContext();
  const params = useParams();
  const galleryId = params.galleryId;
  const isLargeScreen = useMediaQuery('only screen and (min-width : 1280px)');

  const hoverVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 0.3,
    },
  };
  console.log(projects);
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 1024: 2, 1280: 3 }}
      className="px-2"
    >
      <Masonry gutter={'0.5rem'}>
        {projects.map(({ id, cover, coveralt, title }) => (
          <Link to={`/gallery/${galleryId!}/${formatTitle(title)}`}>
            <motion.div
              key={id}
              className="break-inside-avoid relative"
              onClick={() => {
                setCurrentImageId(id);
                setCurrentGalleryName(galleryId!);
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-1 w-full h-full flex items-end justify-end p-1"
                whileHover="hover"
                whileInView={!isLargeScreen ? `hover` : ``}
                viewport={{ amount: 0.75 }}
              >
                <motion.div
                  className="opacity-0 bg-paper-regular absolute inset-0 w-full h-full"
                  variants={overlayVariants}
                ></motion.div>
                <motion.span
                  className="z-10 flex w-32 h-32 items-end justify-end gap-1 lg:w-40 opacity-0 lg:h-40 text-paper-regular"
                  variants={hoverVariants}
                >
                  <p className="flex h-8 items-center justify-center bg-accents-regular font-secondary px-4">
                    View
                  </p>
                  <span className="bg-paper-regular">
                    <EyeSolid
                      className="text-accents-regular"
                      width="2rem"
                      height="2rem"
                    />
                  </span>
                </motion.span>
              </motion.div>
              <img
                src={cover}
                alt={coveralt}
                className="w-full object-cover touch-pan-y pointer-events-none"
              />
            </motion.div>
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryGrid;
