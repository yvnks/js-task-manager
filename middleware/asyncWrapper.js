import errorHandler from './errorHandler.middleware.js';

const asyncWrapper = (fx) => {
  return async (req, res, next) => {
    try {
      await fx(req, res, next);
    } catch (error) {
      next(errorHandler);
    }
  };
};

export default asyncWrapper;
