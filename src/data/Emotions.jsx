export const PRESETS = [
  "nostálgico", "eufórico", "melancólico", "tranquilo",
  "ansioso", "enamorado", "furioso", "soñador", "soledad", "esperanza"
];

export const EMOTION_DB = {
  nostálgico: {
    name: "Nostalgia dorada",
    desc: "El ámbar de los atardeceres que ya no volverán. Una calidez suave que duele un poco.",
    colors: [
      { hex: "#C9956A", name: "Terracota viejo" },
      { hex: "#E8C99A", name: "Papel envejecido" },
      { hex: "#F5E6C8", name: "Luz de vela" },
      { hex: "#A0785A", name: "Madera desgastada" },
      { hex: "#6B4226", name: "Sombra sepia" },
    ],
    tags: ["cálido", "suave", "tiempo", "memoria"]
  },
  eufórico: {
    name: "Euforia pura",
    desc: "Cuando el cuerpo no cabe en sí mismo. Colores que gritan y brillan y no piden permiso.",
    colors: [
      { hex: "#FF3366", name: "Rosa eléctrico" },
      { hex: "#FF8C00", name: "Naranja fuego" },
      { hex: "#FFD700", name: "Oro puro" },
      { hex: "#00E5FF", name: "Cian vibrante" },
      { hex: "#7B2FFF", name: "Violeta intenso" },
    ],
    tags: ["vibrante", "intenso", "energía", "festivo"]
  },
  melancólico: {
    name: "Melancolía azul",
    desc: "Ese peso dulce en el pecho. El cielo justo antes de la lluvia que nunca llega.",
    colors: [
      { hex: "#4A6FA5", name: "Azul pizarra" },
      { hex: "#7B9EC4", name: "Niebla marina" },
      { hex: "#B8CCE0", name: "Cielo gris perla" },
      { hex: "#2C3E60", name: "Noche azul" },
      { hex: "#8B9DC3", name: "Violeta pálido" },
    ],
    tags: ["frío", "profundo", "silencioso", "poético"]
  },
  tranquilo: {
    name: "Calma mineral",
    desc: "Piedras junto a un río. Aire limpio. La quietud que no necesita nada.",
    colors: [
      { hex: "#A8C5B8", name: "Verde salvia" },
      { hex: "#D4E8DF", name: "Menta suave" },
      { hex: "#2D4A3E", name: "Bosque profundo" },
      { hex: "#E8F0EC", name: "Blanco vegetal" },
      { hex: "#7BA699", name: "Jade opaco" },
    ],
    tags: ["natural", "fresco", "silencio", "equilibrio"]
  },
  ansioso: {
    name: "Tensión eléctrica",
    desc: "El corazón que va adelante. Algo va a pasar, pero no sabes qué.",
    colors: [
      { hex: "#1A1A2E", name: "Negro profundo" },
      { hex: "#E94560", name: "Rojo alerta" },
      { hex: "#F5A623", name: "Ámbar nervioso" },
      { hex: "#0F3460", name: "Azul noche" },
      { hex: "#533483", name: "Púrpura tenso" },
    ],
    tags: ["oscuro", "urgente", "contraste", "tensión"]
  },
  enamorado: {
    name: "Amor en flor",
    desc: "Pétalos y rubores. La piel que se eriza sin razón aparente.",
    colors: [
      { hex: "#FF6B9D", name: "Rosa ardiente" },
      { hex: "#FFC6D9", name: "Durazno suave" },
      { hex: "#C23B6A", name: "Magenta profundo" },
      { hex: "#FFE5EE", name: "Blanco pétalo" },
      { hex: "#FF9DC0", name: "Coral enamorado" },
    ],
    tags: ["romántico", "cálido", "delicado", "intenso"]
  },
  furioso: {
    name: "Rojo furia",
    desc: "Cuando el fuego tiene nombre. Colores que queman con precisión.",
    colors: [
      { hex: "#8B0000", name: "Sangre oscura" },
      { hex: "#CC2200", name: "Rojo hervor" },
      { hex: "#FF4500", name: "Naranja llama" },
      { hex: "#1C1C1C", name: "Negro carbón" },
      { hex: "#FF8C42", name: "Brasa viva" },
    ],
    tags: ["intenso", "cálido", "poderoso", "urgente"]
  },
  soñador: {
    name: "Sueño lúcido",
    desc: "Colores que no existen del todo. Ese lugar entre dormido y despierto.",
    colors: [
      { hex: "#C3B1E1", name: "Lavanda etérea" },
      { hex: "#9B72CF", name: "Violeta sueño" },
      { hex: "#E8D5F5", name: "Malva pálido" },
      { hex: "#4B2D8A", name: "Índigo profundo" },
      { hex: "#F0E6FA", name: "Niebla lila" },
    ],
    tags: ["etéreo", "suave", "místico", "onírico"]
  },
  soledad: {
    name: "Solo en la ciudad",
    desc: "El gris que no es triste, solo... quieto. Ventanas iluminadas que no son tuyas.",
    colors: [
      { hex: "#4A4A5A", name: "Gris urbano" },
      { hex: "#8A8A9A", name: "Plata opaca" },
      { hex: "#C5C5D0", name: "Neblina gris" },
      { hex: "#2A2A3A", name: "Noche sin luna" },
      { hex: "#E8E8F0", name: "Blanco frío" },
    ],
    tags: ["neutro", "frío", "urbano", "quieto"]
  },
  esperanza: {
    name: "Primera luz",
    desc: "El verde que aparece después de la lluvia. Algo nuevo que empieza sin avisar.",
    colors: [
      { hex: "#56C596", name: "Verde aurora" },
      { hex: "#A8E6CF", name: "Menta esperanza" },
      { hex: "#FFD97D", name: "Amarillo amanecer" },
      { hex: "#1A5C3A", name: "Verde profundo" },
      { hex: "#F0FFF4", name: "Blanco vegetal" },
    ],
    tags: ["fresco", "luminoso", "crecimiento", "inicio"]
  }
};