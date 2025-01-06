const formatTitle = (title: string) => {
  const regex = /[^a-zA-Z0-9]/g;
  const result = title.replace(regex, '-').toLowerCase();
  return result;
};

export default formatTitle;
