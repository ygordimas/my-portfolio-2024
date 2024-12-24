import React, { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useLocation, useParams } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <div className="flex w-full h-full relative font-paragraph">
        <Header />
        <div
          className={`${location.pathname !== '/' && `pt-24 lg:pt-28 px-2 pb-8`} box-border grow w-full`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
