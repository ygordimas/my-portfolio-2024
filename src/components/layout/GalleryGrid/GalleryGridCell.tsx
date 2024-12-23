import React from 'react';
import { Link } from 'react-router-dom';
import formatTitle from '../../../utils/formatTitle';
import { motion } from 'motion/react';
import { useModalContext } from '../../../services/ModalContext';
import { useMediaQuery } from '@uidotdev/usehooks';
import { EyeSolid } from 'iconoir-react';
import GalleryGridCellOverlay from './GalleryGridCellOverlay';
import GalleryGridCellImage from './GalleryGridCellImage';

type CellType = {
  id: string;
  cover: string;
  coveralt: string;
  title: string;
  galleryId: string;
};

const GalleryGridCell = ({
  id,
  cover,
  coveralt,
  title,
  galleryId,
}: CellType) => {
  const { setCurrentImageId, setCurrentGalleryName } = useModalContext();
  const isLaptop = useMediaQuery('only screen and (min-width : 1280px)');

  const overlayVariants = {
    hover: {
      opacity: isLaptop ? 0.3 : 0,
    },
  };

  const hoverVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <Link to={`/gallery/${galleryId!}/${formatTitle(title)}`}>
      <motion.div
        className="relative"
        onClick={() => {
          setCurrentImageId(id);
          setCurrentGalleryName(galleryId!);
        }}
      >
        <GalleryGridCellOverlay isLaptop={isLaptop} />
        <GalleryGridCellImage cover={cover} coveralt={coveralt} />
      </motion.div>
    </Link>
  );
};

export default GalleryGridCell;
