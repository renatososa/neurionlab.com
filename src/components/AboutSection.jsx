import SectionLabel from "./SectionLabel";

const values = ["Accesible", "Biomédica", "Experimental"];

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#1F252B] p-8 text-white shadow-[0_24px_70px_-40px_rgba(31,37,43,0.75)] md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel dark>Sobre Neurion LAB</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Tecnología biomédica accesible para formación, investigación y asistencia.
              </h2>
            </div>
            <div>
              <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Neurion LAB nace para desarrollar herramientas biomédicas accesibles que permitan
                formar, investigar y prototipar soluciones de neurotecnología y asistencia. La
                arquitectura de marca refuerza esa visión: democratización del acceso a la
                tecnología, fortalecimiento de capacidades locales y una expansión ordenada hacia
                nuevas líneas de producto.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
