import { SparkSolid } from 'iconoir-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

type HamburgerLinkType = {
  tag: string;
  to: string;
};

const HamburgerLink = ({ tag, to }: HamburgerLinkType) => {
  const basicStyles = 'text-xl rounded p-4';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        !isActive
          ? `text-paper-dark focus:text-accents-regular ${basicStyles}`
          : `text-paper-light focus:text-paper-light cursor-default pointer-events-none bg-accents-regular ${basicStyles}`
      }
    >
      {({ isActive }) => (
        <span className="flex gap-2">
          {isActive && <SparkSolid />}

          <p>{tag}</p>
        </span>
      )}
    </NavLink>
  );
};

export default HamburgerLink;
