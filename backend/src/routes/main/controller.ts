import { Request, Response } from "express";
import { sendErrorResponse } from "../../utils/response";
import { StaticError, DynamicErrors } from "../../utils/errors";
import { fetchOpenAIReply } from "./api";

export const handleMainRequest = async (req: Request, res: Response) => {
  try {
    const { input, number } = req.body;

    if (!input || typeof input !== "string") {
      return sendErrorResponse(res, DynamicErrors.INVALID_INPUT("input"));
    }

    if (!number || typeof number !== "number") {
      return sendErrorResponse(res, DynamicErrors.INVALID_INPUT("number"));
    }

    const result = await fetchOpenAIReply(input, number);
    res.status(200).json({ success: true, result });
  } catch (err) {
    const error = err as StaticError;
    return sendErrorResponse(res, error);
  }
};
