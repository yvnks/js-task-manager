class CustomAPIErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Fx create a new instance of the error class
const createCustomError = (message, statusCode) => {
  return new CustomAPIErrors(message, statusCode);
};
