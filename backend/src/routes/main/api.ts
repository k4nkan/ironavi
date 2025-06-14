import { OpenAI } from "openai";
import { buildPrompt } from "./prompt";
import { StaticErrors } from "../../utils/errors";
import type { StaticError } from "../../utils/errors";

// API キーを取得
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  throw StaticErrors.OPENAI_API_KEY_NOT_DEFINED;
}

// OpenAI SDK クライアントを初期化
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const MODEL_NAME = "gpt-4";

export const fetchOpenAIReply = async (
  input: string,
  number: number
): Promise<{ reply: string }> => {
  const prompt = buildPrompt(input, number);

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
    });

    // 最初の応答メッセージを取り出す
    const text = chatCompletion.choices?.[0]?.message?.content;

    // 内容が空だった場合はエラー
    if (!text) throw StaticErrors.OPENAI_API_REQUEST_FAILED;

    return { reply: text };
  } catch (err: unknown) {
    // すでに構造化された StaticError ならそのまま再スロー
    if (typeof err === "object" && err && "code" in err) {
      throw err as StaticError;
    }

    // その他のエラーは StaticError 形式で包んでスロー
    throw {
      ...StaticErrors.OPENAI_API_REQUEST_FAILED,
      details: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
