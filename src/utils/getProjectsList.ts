import { abstracts } from '../db/abstracts';
import { gameart } from '../db/gameart';
import { illustrations } from '../db/illustrations';

const getProjectsList = (path: string) => {
  if (path === 'illustrations') {
    return illustrations;
  } else if (path === 'gameart') {
    return gameart;
  } else if (path === 'abstracts') {
    return abstracts;
  }
};

export default getProjectsList;
