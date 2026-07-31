import { createCustomError } from '../helpers/custom-errors.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof createCustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again later` });
};

export default errorHandler;
