export function buildPrompt(theme, number) {
  return `
Generate a harmonious color palette based on the theme "${theme}" with a total of ${number} colors.

Each color must be assigned one of the following roles, in this order:
main, bg1, bg2, text, accent1, accent2, accent3... (use as many as needed based on the number)

Ensure that:
- The color choices are well-balanced and visually cohesive.
- The combination of **text**, **main**, and **background (bg1/bg2)** colors maintains **sufficient contrast and readability**.
- The overall palette should be practical for UI use and not just aesthetically pleasing.
- Apply established color theory (such as Complementary, Analogous, Triadic, etc.) to build the palette.

Return the result in **valid, well-structured JSON** format and in **English**:

{
  "original_theme": "${theme}",
  "translated_theme": "<English translation of the theme>",
  "strategy": "<Color theory used (e.g., Complementary, Analogous, etc.)>",
  "colors": [
    {
      "name": "Primary",
      "hex": "#RRGGBB",
      "role": "<Role such as main / bg1 / bg2 / text / accentX>",
      "description": "<Explain why the color was chosen, how it supports its role, and its relationship to the theme>"
    }
    // ... include ${number} colors in total
  ]
}
`.trim();
}
