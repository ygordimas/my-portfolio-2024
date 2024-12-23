import { GithubCircle, Instagram } from 'iconoir-react';
import React from 'react';

const FooterSocialMediaIcons = () => {
  return (
    <div className="flex gap-2 p-4 text-accents-regular">
      <a href="https://instagram.com/ygordimas" target="_blank">
        <Instagram strokeWidth={2} />
      </a>
      <a href="https://github.com/ygordimas" target="_blank">
        <GithubCircle strokeWidth={2} />
      </a>
    </div>
  );
};

export default FooterSocialMediaIcons;
