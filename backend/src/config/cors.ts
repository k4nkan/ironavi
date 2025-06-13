import { CorsOptions } from "cors";
import { StaticErrors, DynamicErrors } from "../utils/errors";
import type { StaticError } from "../utils/errors";

const allowedOrigins = process.env.CORS_ORIGIN;

if (!allowedOrigins) {
  throw new Error(StaticErrors.CORS_ORIGIN_NOT_DEFINED.details);
}

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    const isAllowed = !origin || origin === allowedOrigins;

    if (isAllowed) {
      callback(null, true);
    } else {
      const error: StaticError = DynamicErrors.CORS_NOT_ALLOWED(origin);
      console.warn(error.details);
      callback(new Error(error.details));
    }
  },
};
