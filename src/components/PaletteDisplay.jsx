import Swatch from "./Swatch";
import "./PaletteDisplay.css";
import { copyToClipboard, buildCSSVariables } from "../utils/PaletteUtils";

export default function PaletteDisplay({ palette, onToast }) {
  const handleSwatchClick = (hex) => {
    copyToClipboard(hex).then(() => onToast(`${hex} copiado`));
  };

  const handleExportCSS = () => {
    const css = buildCSSVariables(palette.colors);
    copyToClipboard(css).then(() => onToast("Variables CSS copiadas"));
  };

  return (
    <div className="pd-wrapper" key={palette.name}>
      <div className="pd-label">paleta generada</div>
      <h2 className="pd-name">{palette.name}</h2>
      <p className="pd-desc">{palette.desc}</p>

      <div className="pd-swatches">
        {palette.colors.map((color, i) => (
          <Swatch key={i} color={color} onClick={handleSwatchClick} />
        ))}
      </div>

      <div className="pd-meta">
        <div className="pd-tags">
          {palette.tags.map((tag) => (
            <span key={tag} className="pd-tag">{tag}</span>
          ))}
        </div>
        <button className="pd-export-btn" onClick={handleExportCSS}>
          Copiar CSS
        </button>
      </div>
    </div>
  );
}