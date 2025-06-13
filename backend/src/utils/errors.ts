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
} as const;

export const DynamicErrors = {
  CORS_NOT_ALLOWED: (origin?: string): StaticError => ({
    code: 403,
    message: "CORS not allowed",
    details: `このオリジンは許可されていません:${origin ?? "不明なオリジン"}`,
  }),
};
