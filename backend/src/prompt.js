export function buildPrompt(theme, number) {
  return `
Generate a UI-friendly color palette of ${number} colors based on the theme "${theme}".

Use this role order: main, text, border, accent1, accent2, accent3... (extend accents as needed)

**Role definitions:**
- main: Background color with the largest visual area.
- border: For decorative lines and outlines.
- text: Close to black or white, high contrast over main.
- accentX: Decorative/supporting colors that enhance the theme.

Requirements:
- Colors should be conceptually related to "${theme}".
- Use color theory (complementary, analogous, triadic, etc.).
- Ensure visual harmony and good readability.

Respond in English with valid JSON:

{
  "original_theme": "${theme}",
  "translated_theme": "<English translation>",
  "strategy": "<Color theory used>",
  "colors": [
    {
      "name": "<Color name>",
      "hex": "#RRGGBB",
      "role": "<main | border | text | accentX>",
      "description": "<Why this color fits its role and theme>"
    }
    // ... ${number} colors total
  ]
}
`.trim();
}
