import React from 'react';
import GalleryGrid from '../components/layout/GalleryGrid';
import { useParams } from 'react-router-dom';
import { useModalContext } from '../services/ModalContext';

type ImageType = {
  id: string;
  path: string;
  src: string;
  wips?: string[];
  alt: string;
  description?: string;
  width: number;
  height: number;
  tools: string[];
};

type ImagesType = {
  images: ImageType[];
};

import { abstracts } from '../db/abstracts';
import { illustrations } from '../db/illustrations';
import { gameart } from '../db/gameart';
import getProjectsList from '../utils/getProjectsList';

const Gallery = () => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useModalContext();

  const params = useParams();
  const galleryId = params.galleryId;

  const galleryFinder = () => {
    if (galleryId === 'abstracts') return abstracts;
    else if (galleryId === 'illustrations') return illustrations;
    else if (galleryId === 'gameart') return gameart;
  };
  return (
    <>
      {!isHamburgerMenuOpen && (
        <div className="w-full grow">
          <GalleryGrid projects={galleryFinder()} />
        </div>
      )}
    </>
  );
};

export default Gallery;
