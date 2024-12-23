import { useMediaQuery } from '@uidotdev/usehooks';
import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  const isLaptop = useMediaQuery('only screen and (min-width : 1280px)');
  return (
    <Link
      to={`/`}
      className="text-accents-regular hover:text-accents-light flex flex-col items-center"
    >
      <div className="font-primary text-4xl lg:text-5xl leading-[36px] pt-4">
        Ygor Dimas
      </div>
      <div
        className={`relative -top-2 lg:-top-3 text-accents-dark font-paragraph text-xs lg:text-sm uppercase tracking-wider`}
      >
        3D Artist and Creative Developer
      </div>
    </Link>
  );
};

export default Head;
