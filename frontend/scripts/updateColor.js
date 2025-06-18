export function updateColor(result) {
  const roles = ["main", "bg1", "bg2", "text", "accent1", "accent2"];

  const resultContainer = document.querySelector(".result");

  const colorsContainer = document.createElement("div");
  colorsContainer.className = "colors";

  let subContainer = document.createElement("div");
  subContainer.className = "subContainer";

  roles.forEach((role, i) => {
    if (i === 0) {
      const themeText = document.createElement("div");
      themeText.textContent = result.original_theme;
      themeText.style.color = result.colors[3].hex;

      const hexText = document.createElement("div");
      hexText.textContent = result.colors[i].hex;
      hexText.style.color = result.colors[3].hex;

      const mainContainer = document.createElement("div");
      mainContainer.className = "mainContainer flex";
      mainContainer.style.backgroundColor = result.colors[i].hex;
      mainContainer.appendChild(themeText);
      mainContainer.appendChild(hexText);

      colorsContainer.appendChild(mainContainer);
    } else {
      const hexText = document.createElement("div");
      hexText.className = "flex";
      hexText.textContent = result.colors[i].hex;
      hexText.style.color =
        i !== 3 ? result.colors[3].hex : result.colors[0].hex;

      const hexContainer = document.createElement("div");
      hexContainer.style.backgroundColor = result.colors[i].hex;
      hexContainer.appendChild(hexText);

      subContainer.appendChild(hexContainer);
    }
  });

  colorsContainer.appendChild(subContainer);
  resultContainer.appendChild(colorsContainer);
}
