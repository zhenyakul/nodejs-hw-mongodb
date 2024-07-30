const parseNumber = (number, defaultValue) => {
  if (typeof number !== 'string') return defaultValue;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber)) return defaultValue;

  return parsedNumber;
};

const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page);
  const parsedPerPage = parseNumber(perPage);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};

export default parsePaginationParams;
