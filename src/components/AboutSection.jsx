import SectionLabel from "./SectionLabel";

const values = ["Accesible", "Biomedica", "Experimental"];

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#1F252B] p-8 text-white shadow-[0_24px_70px_-40px_rgba(31,37,43,0.75)] md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel dark>Sobre Neurion LAB</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                De una herramienta puntual a una plataforma con impacto social.
              </h2>
            </div>
            <div>
              <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Neurion LAB nace para desarrollar herramientas biomedicas accesibles que permitan
                formar, investigar y prototipar soluciones de neurotecnologia y asistencia. La
                nueva arquitectura refuerza esa vision: democratizacion, trabajo regional,
                fabricacion local y una expansion ordenada hacia nuevas lineas de producto.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {values.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center font-semibold text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/72">
                Espacio ideal para incorporar despues evidencia concreta de alianzas, trabajo con
                fundaciones, congresos y validaciones institucionales sin rehacer la estructura de
                la home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
