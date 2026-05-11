import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const solutions = [
  {
    id: "educacion",
    icon: "graduation",
    title: "Educación",
    text: "Recursos, prácticas guiadas y secuencias de laboratorio pensadas para enseñar bioinstrumentación, neurotecnología y análisis de señales con una base técnica clara.",
    bullets: ["Prácticas estructuradas", "Material didáctico", "Implementación en aula"],
  },
  {
    id: "investigacion",
    icon: "microscope",
    title: "Investigación",
    text: "Adquisición multicanal, lectura de señal y herramientas de software orientadas a ensayos, validación experimental y procesamiento posterior de datos.",
    bullets: ["Precisión de señal", "Escalabilidad de canales", "Exportación para análisis"],
  },
  {
    id: "prototipado",
    icon: "gear",
    title: "Prototipado",
    text: "Base técnica para integrar biopotenciales en desarrollos experimentales, interfaces físicas, dispositivos conectados y proyectos de asistencia tecnológica.",
    bullets: ["Integración con hardware", "Fabricación digital", "Desarrollo experimental"],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Soluciones por perfil</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Una misma plataforma para formación, investigación y desarrollo experimental.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Neurion LAB organiza su propuesta según perfiles de uso concretos. De ese modo, cada
            institución, laboratorio o equipo puede identificar con claridad qué recursos y
            capacidades resultan más relevantes para su trabajo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-7 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1F252B]/5"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm">
                <Icon name={item.icon} className="h-6 w-6 text-[#38B26D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5E6A73] sm:text-base">{item.text}</p>
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
