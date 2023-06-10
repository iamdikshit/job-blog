import config from "../config.js";

// function to send development error
const sendDevError = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err: err,
    stack: err.stack,
  });
};

// function to send production error
const sendProdError = (err, req, res) => {
  // check for operational error
  // operational error is runtime errors when an application encounters an unhandled exception or another code issue.

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  return res.status(statusCode).json({
    status: "error",
    message: "Something went wrong!",
  });
};

/*
**************************************************************
GLOBAL ERROR HANDLER
This is a common error handler.This will work as middleware
for all routes
PARAMETER : err,req,res,next
**************************************************************
*/
const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // check for development and production error
  // for production error we do not expose critical information
  if (config.NODE_ENV === "development") {
    sendDevError(err, req, res);
  } else if (config.NODE === "production") {
    sendProdError(err, req, res);
  }
};

export default globalErrorHandler;
