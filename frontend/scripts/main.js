import { fetchColorScheme } from "./api.js";
import { updateColor } from "./updateColor.js";
import { removeClassHide, addClassHide } from "./handleClass.js";

document.addEventListener("DOMContentLoaded", () => {
  // フォームに関する処理
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
      removeClassHide("loading");

      const result = await fetchColorScheme({ input, number });
      console.log("レスポンス：", result);
      const parsed = JSON.parse(result);
      updateColor(parsed);
      addClassHide("sideMenuAlert");
    } catch (err) {
      console.error("fetch 失敗:", err);
    } finally {
      addClassHide("loading");
    }
  });

  // サイドメニューに関する処理
  const openMenuButton = document.querySelector(".openMenuButton");
  const closeMenuButton = document.querySelector(".closeMenuButton");

  const sideMenuBack = document.getElementById("sideMenuBack");

  openMenuButton.addEventListener("click", () => {
    removeClassHide("sideMenuBack");
    removeClassHide("sideMenu");
  });

  closeMenuButton.addEventListener("click", () => {
    addClassHide("sideMenuBack");
    addClassHide("sideMenu");
  });

  sideMenuBack.addEventListener("click", () => {
    addClassHide("sideMenuBack");
    addClassHide("sideMenu");
  });
});
