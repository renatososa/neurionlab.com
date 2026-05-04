const navItems = [
  {
    label: "Productos",
    children: [
      { label: "Neurion Signal", href: "#signal", description: "Biopotenciales multicanal disponible." },
      {
        label: "Sistemas protesicos",
        href: "#protesis",
        description: "Control mioelectrico y asistencia en desarrollo.",
        badge: "Beta",
      },
      {
        label: "Kits educativos",
        href: "#kits",
        description: "Hardware modular para aula y practicas guiadas.",
      },
    ],
  },
  {
    label: "Soluciones",
    children: [
      { label: "Educacion", href: "#educacion", description: "Guias curriculares y laboratorios aplicados." },
      { label: "Investigacion", href: "#investigacion", description: "Precision, filtros y lectura de senal." },
      { label: "Prototipado", href: "#prototipado", description: "Fabricacion digital y open hardware." },
    ],
  },
  { label: "Recursos", href: "#recursos" },
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export default navItems;
