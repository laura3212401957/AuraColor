import { useState } from "react";
import { getContrastColor } from "../utils/PaletteUtils";
import "./Swatch.css";

export default function Swatch({ color, onClick }) {
  const [hovered, setHovered] = useState(false);
  const textColor = getContrastColor(color.hex);

  return (
    <div
      className={`swatch ${hovered ? "swatch--hovered" : ""}`}
      style={{ background: color.hex }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(color.hex)}
      title={`Copiar ${color.hex}`}
    >
      <div className="swatch__info" style={{ opacity: hovered ? 1 : 0 }}>
        <div className="swatch__hex" style={{ color: textColor }}>{color.hex}</div>
        <div className="swatch__name" style={{ color: textColor }}>{color.name}</div>
      </div>
    </div>
  );
}