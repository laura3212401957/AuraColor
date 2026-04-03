import { EMOTION_DB } from "../data/Emotions";

export function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#1a1a1a" : "#ffffff";
}

export function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function fuzzyMatch(input) {
  const key = input.toLowerCase().trim();
  if (EMOTION_DB[key]) return EMOTION_DB[key];
  for (const k of Object.keys(EMOTION_DB)) {
    if (k.includes(key) || key.includes(k)) return EMOTION_DB[k];
  }
  return null;
}

export function generateFromEmotion(emotion) {
  const hue = (emotion.split("").reduce((a, c) => a + c.charCodeAt(0), 0) * 137) % 360;
  const colors = Array.from({ length: 5 }, (_, i) => {
    const h = (hue + i * 30) % 360;
    const s = 40 + i * 10;
    const l = 25 + i * 15;
    const hex = hslToHex(h, s, l);
    return { hex, name: `Tono ${i + 1}` };
  });
  return {
    name: capitalize(emotion),
    desc: `Una paleta generada para la emoción "${emotion}". Cada color captura un matiz diferente de ese estado.`,
    colors,
    tags: [emotion, "personalizado", "único"],
  };
}

export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

export function buildCSSVariables(colors) {
  return `:root {\n${colors
    .map((c, i) => `  --color-${i + 1}: ${c.hex}; /* ${c.name} */`)
    .join("\n")}\n}`;
}