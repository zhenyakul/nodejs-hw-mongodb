export const notFoundErrorHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
};
