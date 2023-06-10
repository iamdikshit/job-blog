import express from "express";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controlers/errorHandler.js";

// import config from "./config";
const app = express();

/*
Morgon setup
Development logging
*/
app.use(morgan("dev"));

// Router
app.use("/api/v1/user", userRoute);

/*
ERROR HANDLING
Common route for error handling
*/

// Undefinde URL error handling
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);
export default app;
