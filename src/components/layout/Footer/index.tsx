import React from 'react';
import { Instagram, GithubCircle } from 'iconoir-react';

const Footer = () => {
  return (
    <div className="w-[calc(100%-32px)] px-10 h-min z-40 text-xs flex flex-col items-center justify-center bg-gray-50 text-paper-light backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg border border-gray-200/25 shadow-[0_0px_4px_0_rgba(85,127,173,0.4)]">
      <div className="text-inherit px-4">
        designed & developed by Ygor Dimas
      </div>
      <div className="flex gap-2 items-center">
        <Instagram />
        <GithubCircle />
      </div>
    </div>
  );
};

export default Footer;
