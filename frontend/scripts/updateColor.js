export function updateColor(result) {
  const roles = ["main", "bg1", "bg2", "text", "accent1", "accent2"];

  // サイドメニュー
  const resultContainer = document.getElementById("sideMenu");

  // 各配色結果を囲むdiv（全体）
  const colorsContainer = document.createElement("div");
  colorsContainer.className = "colors";

  // colors の数をカウントしてIDを生成
  const count = document.querySelectorAll(".colors").length;

  // ラジオボタンのinput要素
  const input = document.createElement("input");
  input.type = "radio";
  input.id = `radio${count}`;
  input.name = "menuForm";
  input.value = count;

  // ラベル要素
  const label = document.createElement("label");
  label.setAttribute("for", input.id);

  // Mainカラーの表示
  const mainContainer = document.createElement("div");
  mainContainer.className = "mainContainer flex";
  mainContainer.style.backgroundColor = result.colors[0].hex; // mainカラーを背景に

  // テーマ名のテキスト
  const themeText = document.createElement("div");
  themeText.textContent = result.original_theme;
  themeText.style.color = result.colors[3].hex;

  // mainのHEXコード
  const mainHexText = document.createElement("div");
  mainHexText.textContent = result.colors[0].hex;
  mainHexText.style.color = result.colors[3].hex;

  // mainContainer にテキストを追加
  mainContainer.appendChild(themeText);
  mainContainer.appendChild(mainHexText);

  // Main以外の色を表示するsubContainer
  const subContainer = document.createElement("div");
  subContainer.className = "subContainer";

  roles.forEach((role, i) => {
    if (i === 0) return;

    // 読みやすい文字色に調整
    const hexText = document.createElement("div");
    hexText.className = "flex";
    hexText.textContent = result.colors[i].hex;
    hexText.style.color = i !== 3 ? result.colors[3].hex : result.colors[0].hex;

    // 背景色とテキストをまとめたコンテナ
    const hexContainer = document.createElement("div");
    hexContainer.style.backgroundColor = result.colors[i].hex;
    hexContainer.appendChild(hexText);

    // subContainer に追加
    subContainer.appendChild(hexContainer);
  });

  // labelにメインとサブのカラーコンテナを追加
  label.appendChild(mainContainer);
  label.appendChild(subContainer);

  // colorsContainer に input と label を追加
  colorsContainer.appendChild(input);
  colorsContainer.appendChild(label);

  // sideMenuに追加して表示
  resultContainer.appendChild(colorsContainer);
}
