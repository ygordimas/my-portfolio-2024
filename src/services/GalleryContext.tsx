import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GalleryContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentImageId: string;
  setCurrentImageId: React.Dispatch<React.SetStateAction<string>>;
  currentGalleryName: string;
  setCurrentGalleryName: React.Dispatch<React.SetStateAction<string>>;
  isHamburgerMenuOpen: boolean;
  setIsHamburgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//create default context
const defaultGalleryContext = {
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => {},
  currentImageId: '',
  setCurrentImageId: (currentImageId: string) => {},
  currentGalleryName: '',
  setCurrentGalleryName: (currentGalleryName: string) => {},
  isHamburgerMenuOpen: false,
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => {},
} as GalleryContextType;

//create the context
const GalleryContext = createContext(defaultGalleryContext);

//create a provider component
export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageId, setCurrentImageId] = useState<string>('');
  const [currentGalleryName, setCurrentGalleryName] = useState<string>('');
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  return (
    <GalleryContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        currentImageId,
        setCurrentImageId,
        currentGalleryName,
        setCurrentGalleryName,
        isHamburgerMenuOpen,
        setIsHamburgerMenuOpen,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

//custom hook to use the context
export const useGalleryContext = () => useContext(GalleryContext);
