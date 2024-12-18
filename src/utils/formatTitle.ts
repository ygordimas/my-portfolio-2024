const formatTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(new RegExp(' ', 'g'), '-')
    .replace(new RegExp(':', 'g'), '-');
};

export default formatTitle;
