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
import GalleryGridCellImage from './GalleryGridCellImage';
import GalleryGridCellRibbon from './GalleryGridCellRibbon';
import GalleryGridCellOverlay from './GalleryGridCellOverlay';
import GalleryGridCell from './GalleryGridCell';

type GalleryType = {
  projects: ProjectsProps[];
};

const GalleryGrid = ({ projects }: GalleryType) => {
  const params = useParams();
  const galleryId = params.galleryId!;

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

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1024: 2, 1280: 3 }}>
      <Masonry gutter={'0.5rem'}>
        {projects.map(({ id, cover, coveralt, title }) => (
          <GalleryGridCell
            key={id}
            id={id}
            cover={cover}
            coveralt={coveralt}
            title={title}
            galleryId={galleryId}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryGrid;
