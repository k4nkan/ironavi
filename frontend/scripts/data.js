export const colorDatas = [];

export let colors = [
  { name: "White", hex: "#FFF", role: "main", description: "" },
  { name: "Purple", hex: "#C77DFF", role: "text", description: "" },
  { name: "Red", hex: "#FF6B6B", role: "border", description: "" },
  { name: "Green", hex: "#6BCB77", role: "accent1", description: "" },
  { name: "Blue", hex: "#4D96FF", role: "accent2", description: "" },
  { name: "Yellow", hex: "#FFD93D", role: "accent3", description: "" },
];

export function setColors(newColors) {
  colors = [...newColors];
}

export function getColors() {
  return colors;
}
