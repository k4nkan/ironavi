import { fetchColorScheme } from "./api.js";
import { updateColor } from "./updateColor.js";
import { displayLoading, hideLoading } from "./handleLoading.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const input = formData.get("theme")?.toString().trim();
    const number = Number(6);

    if (!input) {
      alert("テーマを入力してください");
      return;
    }

    try {
      displayLoading();

      const result = await fetchColorScheme({ input, number });
      console.log("レスポンス：", result);
      const parsed = JSON.parse(result);
      updateColor(parsed);
    } catch (err) {
      console.error("fetch 失敗:", err);
    } finally {
      hideLoading();
    }
  });
});
