const parseContactType = (contactType) => {
  const knownTypes = ['work', 'home', 'personal'];

  if (knownTypes.includes(contactType)) return contactType;

  return;
};

const parseFavouriteStatus = (isFavourite) => {
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return null;
};

const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedFavouriteStatus = parseFavouriteStatus(isFavourite);

  return { contactType: parsedContactType, isFavourite: parsedFavouriteStatus };
};

export default parseFilterParams;
