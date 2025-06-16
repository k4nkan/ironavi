import { buildPrompt } from "./prompt.js";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handleMainRoute(req, res) {
  const { input, number } = req.body;

  if (!input || typeof input !== "string") {
    return res
      .status(400)
      .json({
        success: false,
        error: { details: "input should be a non-empty string" },
      });
  }

  if (typeof number !== "number" || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({
        success: false,
        error: { details: "number should be a positive number" },
      });
  }

  const prompt = buildPrompt(input, number);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });

    const reply = completion.choices?.[0]?.message?.content;
    if (!reply) {
      return res
        .status(502)
        .json({
          success: false,
          error: { details: "No response from OpenAI" },
        });
    }

    res.json({ success: true, result: { reply } });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res
      .status(502)
      .json({
        success: false,
        error: { details: "Failed to fetch from OpenAI" },
      });
  }
}
