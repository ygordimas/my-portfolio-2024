import { abstracts } from '../db/abstracts';
import { gameart } from '../db/gameart';
import { illustrations } from '../db/illustrations';
import { artandillustration } from '../db/artandillustration';

const getProjectsList = (path: string) => {
  if (path === 'illustrations') {
    return artandillustration;
  } else if (path === 'gameart') {
    return artandillustration;
  } else if (path === 'abstracts') {
    return abstracts;
  }
};

export default getProjectsList;
