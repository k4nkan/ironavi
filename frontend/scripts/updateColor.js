export function updateColor(result) {
  const roles = ["main", "bg1", "bg2", "text", "accent1", "accent2"];

  // 結果を追加していくdiv
  const resultContainer = document.querySelector(".result");

  // 結果を入れるdiv
  const colorsContainer = document.createElement("div");
  colorsContainer.className = "colors";

  // main以外の色をまとめるdiv
  let subContainer = document.createElement("div");
  subContainer.className = "subContainer";

  roles.forEach((role, i) => {
    if (i === 0) {
      // 配色のテーマ
      const themeText = document.createElement("div");
      themeText.textContent = result.original_theme;
      themeText.style.color = result.colors[3].hex;

      // メインカラーのhex
      const hexText = document.createElement("div");
      hexText.textContent = result.colors[i].hex;
      hexText.style.color = result.colors[3].hex;

      // mainの色用のdiv
      const mainContainer = document.createElement("div");
      mainContainer.className = "mainContainer flex";
      mainContainer.style.backgroundColor = result.colors[i].hex;
      mainContainer.appendChild(themeText);
      mainContainer.appendChild(hexText);

      colorsContainer.appendChild(mainContainer);
    } else {
      // メイン以外の色におけるhexをテキストとして追加
      const hexText = document.createElement("div");
      hexText.className = "flex";
      hexText.textContent = result.colors[i].hex;

      // 背景色とテキスト色の調整
      hexText.style.color =
        i !== 3 ? result.colors[3].hex : result.colors[0].hex;

      // メイン以外の色における背景を変換
      const hexContainer = document.createElement("div");
      hexContainer.style.backgroundColor = result.colors[i].hex;
      hexContainer.appendChild(hexText);

      subContainer.appendChild(hexContainer);
    }
  });

  colorsContainer.appendChild(subContainer);
  resultContainer.appendChild(colorsContainer);
}
