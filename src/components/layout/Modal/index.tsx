import React from 'react';
import { useModalContext } from '../../../services/ModalContext';
import { abstracts } from '../../../db/abstracts';
import { gameart } from '../../../db/gameart';
import { illustrations } from '../../../db/illustrations';
import { useMediaQuery } from '@uidotdev/usehooks';

type ItemType = {
  id: string;
  type: string;
  path: string;
  src: string;
  wips?: string[];
  alt: string;
  description?: string;
  width: number;
  height: number;
  tools: string[];
};

const Modal = () => {
  const { setIsModalOpen, currentGalleryName, currentImageId } =
    useModalContext();
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  const galleryFinder = (galleryName: string) => {
    if (galleryName === 'abstracts') return abstracts;
    else if (galleryName === 'illustrations') return illustrations;
    else if (galleryName === 'gameart') return gameart;
    else return;
  };

  const currentGallery = galleryFinder(currentGalleryName);

  const imageFinder = (gallery: [], imageId: string) => {
    const index = gallery.findIndex((item) => item['id'] === imageId);
    return gallery[index]['src'];
  };

  const itemFinder = (gallery: [], imageId: string) => {
    const index = gallery.findIndex((item) => item['id'] === imageId);
    return gallery[index];
  };

  const item: ItemType = itemFinder(currentGallery, currentImageId);
  const image: string = item['src'];

  return (
    <div
      // className={`fixed top-0 left-0 w-full h-full bg-red-300 flex ${isSmallDevice ? `flex-col-reverse` : `flex-col`}  justify-center`}
      className={`fixed top-0 left-0 w-full h-full bg-slate-50 flex flex-col justify-center`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="w-full max-h-[80vh] flex justify-center bg-white items-center relative">
        <img src={image} className="h-full" />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-xl bg-slate-950">{item['type']}</h1>
          <h2>{item['description']}</h2>
          <ul>
            {item['tools'].map((k) => (
              <li>{k}</li>
            ))}
          </ul>
        </div>
        {/* {!isSmallDevice && (
          <div className="flex">
            {item['wips'] && item['wips'].map((i) => <img src={i} />)}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Modal;
