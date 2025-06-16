import { fetchColorScheme } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const input = formData.get("theme")?.toString().trim();
    const number = Number(formData.get("number"));

    if (!input) {
      alert("テーマを入力してください");
      return;
    }

    try {
      const reply = await fetchColorScheme({ input, number });
      console.log("生成された配色:", reply);
    } catch (err) {
      console.error("fetch 失敗:", err);
    }
  });
});
