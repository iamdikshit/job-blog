/*
*****************************************************
CATCH ASYNC FUNCTION
this function will take function as a parameter 
and return a function if there is no 
error. And if there is any error it will
will send error to global error Handler.
*****************************************************
*/

const catchAsync = (fn) => {
  return (req, res, next) => {
    // executing the function
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
