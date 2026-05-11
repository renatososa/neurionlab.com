import SectionLabel from "./SectionLabel";

const resources = [
  {
    title: "GUI en Python",
    text: "Descargas, manuales de instalación y estructura para demostrar que la capa de software es parte del producto.",
  },
  {
    title: "Archivos 3D y hardware",
    text: "Piezas, STL y elementos de fabricación digital para aula, prototipos y evolución abierta del sistema.",
  },
  {
    title: "Manuales y laboratorios",
    text: "Guías curriculares, prácticas descargables y ejemplos de uso para docencia, investigación y makers.",
  },
];

export default function ResourcesSection() {
  return (
    <section id="recursos" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>Recursos</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
              Un centro de documentación para todo el ecosistema.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Esta sección ya puede concentrar descargas, archivos de impresión, manuales, GUI,
            tutoriales y ejemplos de laboratorio sin dispersarlos por toda la home.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {resources.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-7">
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5E6A73] sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5E6A73]">
                Estructura sugerida
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#1F252B]">
                Documentación por producto y por perfil de uso.
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Signal / Specs", "Educación / Labs", "GUI / Manuales", "3D / Fabricación"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 text-sm font-semibold text-[#1F252B]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
