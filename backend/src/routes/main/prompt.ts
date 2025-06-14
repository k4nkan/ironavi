export const buildPrompt = (theme: string, number: number): string => {
  return `
あなたは優秀な配色ジェネレーターです。
以下のテーマに基づいて、全体として統一感のある配色パレットを生成してください。

【テーマ】：${theme}
【生成する色の数】：${number}

テーマは日本語ですが、内部的に英語に翻訳して処理してかまいません。
色の選定は配色理論（補色、類似色、トライアド、分裂補色など）に基づいて行ってください。

以下のロールに従って色を割り当ててください（余分に色を生成しない、以下のロールよりも色数が多い場合はアクセントを追加）：
- primary background
- primary text
- accent1
- accent2
- accent3
- secondary background
- secondary text

結果は以下のようなJSON形式のみで出力してください：

{
  "original_theme": "${theme}",
  "translated_theme": "（英語訳）",
  "strategy": "（使用した配色理論）",
  "colors": [
    {
      "name": "Primary",
      "hex": "#RRGGBB",
      "role": "使用目的",
      "description": "この色を選んだ理由"
    }
    // ...${number}個分
  ]
}
  `.trim();
};
