import SectionLabel from "./SectionLabel";

const validationItems = [
  "Acceso más simple a bioinstrumentación",
  "Pensada para instituciones educativas y laboratorios",
  "Base para formar, investigar y prototipar",
  "Capacidades locales en diseño, soporte y fabricación",
];

export default function MissionStrip() {
  return (
    <section className="border-y border-[#DCE3E8] bg-white py-8 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionLabel>Misión</SectionLabel>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-3xl">
            Tecnología biomédica accesible para aprender, investigar y crear.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5E6A73] sm:text-base">
            Neurion LAB integra hardware, software y herramientas abiertas para democratizar el
            acceso a la bioinstrumentación y facilitar el desarrollo de capacidades locales en
            educación, investigación y tecnologías de asistencia.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {validationItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.6rem] border border-[#DCE3E8] bg-[#F7F9FA] px-5 py-4 text-sm font-semibold text-[#1F252B]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
