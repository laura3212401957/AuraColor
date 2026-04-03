import { useState } from "react";
import { PRESETS } from "../data/Emotions";
import { fuzzyMatch, generateFromEmotion } from "../utils/PaletteUtils";
import PaletteDisplay from "../components/PaletteDisplay";
import Toast from "../components/Toast";
import "./EmotionPalette.css";

export default function EmotionPalette() {
  const [input, setInput] = useState("");
  const [palette, setPalette] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const generate = (emotion = input) => {
    if (!emotion.trim()) return;
    setLoading(true);
    setPalette(null);
    setTimeout(() => {
      const data = fuzzyMatch(emotion) || generateFromEmotion(emotion);
      setPalette(data);
      setLoading(false);
    }, 900);
  };

  const handleChip = (emotion) => {
    setInput(emotion);
    generate(emotion);
  };

  return (
    <>
      <div className="ep-root">
        <div className="ep-container">

          <header className="ep-header">
            <h1 className="ep-title">Emoción → Color</h1>
            <p className="ep-subtitle">escribe cómo te sientes y genera tu paleta</p>
          </header>

          <div className="ep-input-row">
            <input
              className="ep-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generate()}
              placeholder="ej: nostálgico, eufórico, melancólico..."
            />
            <button className="ep-btn" onClick={() => generate()}>
              Generar ↗
            </button>
          </div>

          <div className="ep-chips">
            {PRESETS.map((p) => (
              <button key={p} className="ep-chip" onClick={() => handleChip(p)}>
                {p}
              </button>
            ))}
          </div>

          {loading && (
            <div className="ep-loading">
              <span className="ep-dot" />
              <span className="ep-dot" />
              <span className="ep-dot" />
            </div>
          )}

          {!loading && palette && (
            <PaletteDisplay palette={palette} onToast={showToast} />
          )}

        </div>
      </div>

      <Toast message={toast} visible={toastVisible} />
    </>
  );
}