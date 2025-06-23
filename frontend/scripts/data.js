export const colorDatas = [];

export let colors = [
  { name: "White", hex: "#FFF", role: "bg2", description: "" },
  { name: "Red", hex: "#FF6B6B", role: "main", description: "" },
  { name: "Green", hex: "#6BCB77", role: "bg1", description: "" },
  { name: "Blue", hex: "#4D96FF", role: "text", description: "" },
  { name: "Yellow", hex: "#FFD93D", role: "accent1", description: "" },
  { name: "Purple", hex: "#C77DFF", role: "accent2", description: "" },
];

export function setColors(newColors) {
  colors = [...newColors];
}
