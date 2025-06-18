export function buildPrompt(theme, number) {
  return `
テーマ「${theme}」に基づき、${number}色で統一感のある配色パレットを生成してください。

各色には、以下の順で適切な役割（role）を割り当ててください：
main, bg1, bg2, text, accent1, accent2, accent3,,,（必要数だけ）
可読性のためにbg1, bg2, text はなるべく彩度の低いものにして下さい。

配色は、補色・類似色・トライアドなどの配色理論を用いて構成してください。

以下のJSON形式で **英語で** 出力してください（構文ミスなく、整形式で）：

{
  "original_theme": "${theme}",
  "translated_theme": "<テーマの英語訳>",
  "strategy": "<使用した配色理論（例: Complementary, Analogous など)>",
  "colors": [
    {
      "name": "Primary",
      "hex": "#RRGGBB",
      "role": "<使用目的（main / bg1 / bg2 / text / accentX など)>",
      "description": "<なぜその色を選んだのか、役割との関係性も含めて英語で説明>"
    }
    // ... ${number} 個分の色を含めてください
  ]
}
`.trim();
}
