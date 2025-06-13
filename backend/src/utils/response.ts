import { Response } from "express";
import type { StaticError } from "./errors";

export const sendErrorResponse = (res: Response, error: StaticError) => {
  res.status(error.code).json({
    success: false,
    error: {
      code: error.code,
      message: error.message,
      details: error.details,
    },
  });
};
