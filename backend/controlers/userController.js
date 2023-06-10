import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

const getAllUser = catchAsync((req, res, next) => {
  if (true) {
    return next(new AppError("Checking Error Handling", 404));
  }
});

export default {
  getAllUser,
};
