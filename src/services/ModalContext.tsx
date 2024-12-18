import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
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
const defaultModalContext = {
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => {},
  currentImageId: '',
  setCurrentImageId: (currentImageId: string) => {},
  currentGalleryName: '',
  setCurrentGalleryName: (currentGalleryName: string) => {},
  isHamburgerMenuOpen: false,
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => {},
} as ModalContextType;

//create the context
const ModalContext = createContext(defaultModalContext);

//create a provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageId, setCurrentImageId] = useState<string>('');
  const [currentGalleryName, setCurrentGalleryName] = useState<string>('');
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  return (
    <ModalContext.Provider
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
    </ModalContext.Provider>
  );
};

//custom hook to use the context
export const useModalContext = () => useContext(ModalContext);
