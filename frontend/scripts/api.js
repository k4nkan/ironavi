import { API_URL } from "./config.js";

export async function fetchColorScheme(input, number) {
  console.log("API URL:", API_URL);

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input, number }),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.error?.details || "APIエラー");
  }

  return data.result.reply;
}
