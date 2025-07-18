import { colorDatas, getColors, setColors } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.getElementById("sideMenu");

  // sideMenu の中で change が起きたら
  sideMenu.addEventListener("change", (event) => {
    const selected = event.target;

    if (selected.name === "menuForm") {
      const index = Number(selected.value);
      const selectedData = colorDatas[index];
      console.log("変更で選ばれた配色:", selectedData);

      setColors(selectedData);
      const currentColors = getColors();

      const title = document.getElementById("form-title");
      title.style.color = currentColors[1].hex;
    }
  });
});
