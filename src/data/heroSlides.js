const heroSlides = [
  {
    id: "signal",
    label: "Signal",
    eyebrow: "Producto disponible",
    title: "Neurion Signal",
    description:
      "Plataforma portatil y modular para adquirir, procesar y visualizar biopotenciales en entornos educativos, de investigacion y prototipado.",
    bullets: ["EEG, EMG, EOG y ECG", "8 a 32 canales", "Hardware + software integrados"],
    primaryCta: { label: "Ver especificaciones", href: "#signal" },
    secondaryCta: { label: "Solicitar demo", href: "#contacto" },
    status: "Disponible",
    accent: "from-[#38B26D]/16 via-white to-[#30C7D9]/14",
    panel: "signal",
  },
  {
    id: "gui",
    label: "Aplicacion",
    eyebrow: "Software propio",
    title: "Interfaz de adquisicion propia",
    description:
      "GUI desarrollada para visualizar senales en vivo, configurar mediciones y acompanar el flujo de adquisicion sin depender de software generico.",
    bullets: ["Monitor en vivo", "Configuracion guiada", "Medicion y exportacion"],
    primaryCta: { label: "Ver software", href: "#software" },
    secondaryCta: { label: "Solicitar demo", href: "#contacto" },
    status: "Propio",
    accent: "from-[#30C7D9]/14 via-white to-[#1F252B]/6",
    panel: "gui",
  },
  {
    id: "protesis",
    label: "Protesis",
    eyebrow: "Linea en validacion",
    title: "Sistemas protesicos",
    description:
      "Desarrollo de soluciones mecanicas y mioelectricas basadas en fabricacion digital, control modular y experimentacion aplicada.",
    bullets: ["Control mioelectrico", "Piezas impresas en 3D", "Validacion experimental"],
    primaryCta: { label: "Conocer el proyecto", href: "#protesis" },
    secondaryCta: null,
    status: "En validacion",
    accent: "from-[#30C7D9]/16 via-white to-[#38B26D]/10",
    panel: "prosthetics",
  },
];

export default heroSlides;
