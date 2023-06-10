/*
***********************************************
AppError class use to create error
it is extending some feature of JS Error class
***********************************************
*/

class AppError extends Error {
  // constructor
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
