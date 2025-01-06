type NavigationLinks = {
  tag: string;
  path: string;
}[];

const listOfLinks: NavigationLinks = [
  // { tag: 'home', path: '/' },
  {
    tag: 'illustrations',
    path: '/gallery/illustrations',
  },
  {
    tag: 'abstract art',
    path: '/gallery/abstracts',
  },
  // {
  //   tag: 'game art',
  //   path: '/gallery/gameart',
  // },
  {
    tag: 'contact',
    path: '/contact',
  },
];

export default listOfLinks;
