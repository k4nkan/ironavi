export type StaticError = {
  code: number;
  message: string;
  details: string;
};

export const StaticErrors = {
  CORS_ORIGIN_NOT_DEFINED: {
    code: 500,
    message: "CORS_ORIGIN not defined",
    details: "環境変数に CORS_ORIGIN が定義されていません",
  },
  OPENAI_API_KEY_NOT_DEFINED: {
    code: 500,
    message: "OpenAI API key not defined",
    details: "OPENAI_API_KEY が環境変数に定義されていません",
  },
  OPENAI_API_REQUEST_FAILED: {
    code: 502,
    message: "OpenAI API request failed",
    details: "OpenAI API からのレスポンスが不正です",
  },
} as const;

export const DynamicErrors = {
  CORS_NOT_ALLOWED: (origin?: string): StaticError => ({
    code: 403,
    message: "CORS not allowed",
    details: `このオリジンは許可されていません:${origin ?? "不明なオリジン"}`,
  }),

  INVALID_INPUT: (field?: string): StaticError => ({
    code: 400,
    message: "Bad Request",
    details: field
      ? `\`${field}\` フィールドは正しい形式で必要です`
      : "リクエストボディに無効な値が含まれています",
  }),
};
