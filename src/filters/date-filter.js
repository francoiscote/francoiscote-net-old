module.exports = (value) => {
  const dateObject = new Date(value);

  return new Intl.DateTimeFormat().format(dateObject);
};
