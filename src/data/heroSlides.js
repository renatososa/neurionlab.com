const heroSlides = [
  {
    id: "signal",
    label: "Signal",
    eyebrow: "Producto disponible",
    title: "Neurion Signal",
    description:
      "Plataforma portátil y modular para adquirir, procesar y visualizar biopotenciales en entornos educativos, de investigación y prototipado.",
    bullets: ["EEG, EMG, EOG y ECG", "8 a 32 canales", "Hardware + software integrados"],
    primaryCta: { label: "Ver especificaciones", href: "#signal" },
    secondaryCta: { label: "Solicitar demo", href: "#contacto" },
    status: "Disponible",
    accent: "from-[#38B26D]/16 via-white to-[#30C7D9]/14",
    panel: "signal",
  },
  {
    id: "gui",
    label: "Aplicación",
    eyebrow: "Software propio",
    title: "Interfaz de adquisición propia",
    description:
      "GUI desarrollada para visualizar señales en vivo, configurar mediciones y acompañar el flujo de adquisición sin depender de software genérico.",
    bullets: ["Monitor en vivo", "Configuración guiada", "Medición y exportación"],
    primaryCta: { label: "Ver software", href: "#software" },
    secondaryCta: { label: "Solicitar demo", href: "#contacto" },
    status: "Propio",
    accent: "from-[#30C7D9]/14 via-white to-[#1F252B]/6",
    panel: "gui",
  },
  {
    id: "protesis",
    label: "Prótesis",
    eyebrow: "Línea en desarrollo",
    title: "Sistemas protésicos",
    description:
      "Desarrollo de soluciones mecánicas y mioeléctricas basadas en fabricación digital, control modular y experimentación aplicada.",
    bullets: ["Control mioeléctrico", "Piezas impresas en 3D", "Validación experimental"],
    primaryCta: { label: "Conocer el proyecto", href: "#protesis" },
    secondaryCta: null,
    status: "En desarrollo",
    accent: "from-[#30C7D9]/16 via-white to-[#38B26D]/10",
    panel: "prosthetics",
  },
];

export default heroSlides;
