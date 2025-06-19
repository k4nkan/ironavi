import { API_URL } from "./config.js";

export async function fetchColorScheme(inputData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(inputData),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.error?.details || "APIエラー");
  }

  return data.result.reply;
}
