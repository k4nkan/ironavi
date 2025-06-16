import { fetchColorScheme } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const theme = formData.get("theme")?.toString().trim();
    const number = Number(formData.get("number"));

    if (!theme) {
      alert("テーマを入力してください");
      return;
    }

    try {
      const reply = await fetchColorScheme(theme, number);
      console.log(reply);
    } catch (err) {
      console.log(err);
    }
  });
});
