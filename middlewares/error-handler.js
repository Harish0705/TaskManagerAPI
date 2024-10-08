import { CustomError } from "../errors/custom-error.js";

export const errorHandlerMiddleWare = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res
    .status(500)
    .json({ message: "Something went wrong. Please try again" });
};
