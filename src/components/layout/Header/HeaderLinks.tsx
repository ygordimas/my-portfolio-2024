import React, { useEffect, useState } from 'react';
import listOfLinks from '../../../utils/listOfLinks';
import HeaderLink from './HeaderLink';
import { useLocation } from 'react-router-dom';

const HeaderLinks = () => {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  return (
    <ul className="xl:flex gap-4 items-center hidden ">
      {listOfLinks.map((link) => {
        return (
          <li>
            <HeaderLink
              to={link.path}
              tag={link.tag}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              path={link.path}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
