const asyncWrapper = (fx) => {
  return async (req, res, next) => {
    try {
      await fx(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
