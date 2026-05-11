const navItems = [
  {
    label: "Productos",
    children: [
      { label: "Neurion Signal", href: "#signal", description: "Biopotenciales multicanal disponible." },
      {
        label: "Sistemas protésicos",
        href: "#protesis",
        description: "Control mioeléctrico y asistencia en desarrollo.",
        badge: "En desarrollo",
      },
    ],
  },
  {
    label: "Soluciones",
    children: [
      { label: "Educación", href: "#educacion", description: "Guías curriculares y laboratorios aplicados." },
      { label: "Investigación", href: "#investigacion", description: "Precisión, filtros y lectura de señal." },
      { label: "Prototipado", href: "#prototipado", description: "Fabricación digital y open hardware." },
    ],
  },
  { label: "Software", href: "#recursos" },
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export default navItems;
