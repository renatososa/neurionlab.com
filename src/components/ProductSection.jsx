import Button from "./Button";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const products = [
  {
    id: "signal",
    status: "Disponible",
    title: "Neurion Signal",
    text: "Adquisición de biopotenciales para EEG, EMG y ECG con una narrativa de producto lista para academia, I+D y prototipado.",
    bullets: ["8 a 32 canales", "Visualización en tiempo real", "Software propio", "Soporte local"],
    icon: "signal",
  },
  {
    id: "kits",
    status: "Disponible",
    title: "Kits educativos",
    text: "Plataforma plug and play para educación, pensada para implementar prácticas de bioinstrumentación con protocolos experimentales, actividades guiadas y materiales multimedia listos para usar.",
    bullets: ["Protocolos experimentales", "Actividades prácticas", "Materiales multimedia", "Implementación plug and play"],
    icon: "graduation",
  },
  {
    id: "protesis",
    status: "En desarrollo",
    title: "Sistemas protésicos",
    text: "Línea futura enfocada en control mioeléctrico, modularidad mecánica y asistencia accesible mediante fabricación digital.",
    bullets: ["Mioeléctrico", "Piezas 3D", "Validación de uso", "Evolución abierta"],
    icon: "handheart",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Productos</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Líneas de producto para educación, investigación y desarrollo aplicado.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            La propuesta de producto de Neurion LAB reúne una plataforma de adquisición de
            biopotenciales, kits educativos para prácticas de laboratorio y una línea de sistemas protésicos en
            desarrollo. Cada línea responde a necesidades concretas de formación, experimentación y
            asistencia tecnológica.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-[2rem] border border-[#DCE3E8] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1F252B]/5"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#38B26D]/10">
                  <Icon name={item.icon} className="h-5 w-5 text-[#38B26D]" />
                </div>
                <div className="rounded-full bg-[#1F252B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {item.status}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5E6A73]">{item.text}</p>
              <div className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#38B26D]/10">
                      <Icon name="check" className="h-3.5 w-3.5 text-[#38B26D]" />
                    </div>
                    <p className="text-sm leading-6 text-[#5E6A73]">{bullet}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
