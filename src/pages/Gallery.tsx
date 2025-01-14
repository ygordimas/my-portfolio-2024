import React from 'react';
import GalleryGrid from '../components/layout/GalleryGrid';
import { useParams } from 'react-router-dom';
import { useGalleryContext } from '../services/GalleryContext';

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

const Gallery = () => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGalleryContext();

  const params = useParams();
  const galleryId = params.galleryId;

  const galleryFinder = () => {
    if (galleryId === 'illustrations') return illustrations;
    else if (galleryId === 'abstracts') return abstracts;
    else return gameart;
  };
  return (
    <>{!isHamburgerMenuOpen && <GalleryGrid projects={galleryFinder()} />}</>
  );
};

export default Gallery;
