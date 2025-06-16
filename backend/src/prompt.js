export function buildPrompt(theme, number) {
  return `
テーマ「${theme}」に基づき、${number}色の統一感のある配色パレットを生成してください。
配色理論（補色・類似色など）に基づいて考え、以下の形式のJSONで出力してください：

{
  "original_theme": "${theme}",
  "translated_theme": "英語訳",
  "strategy": "使用した配色理論",
  "colors": [
    {
      "name": "Primary",
      "hex": "#RRGGBB",
      "role": "使用目的",
      "description": "この色を選んだ理由"
    }
  ]
}
`.trim();
}
