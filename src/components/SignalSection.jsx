import DeviceMockup from "./DeviceMockup";
import SectionLabel from "./SectionLabel";

const capabilities = [
  "Sistema plug and play para una puesta en marcha simple",
  "Compatible con señales EEG, EMG, EOG y ECG",
  "Operación inalámbrica con autonomía alimentada a baterías",
  "Interfaz propia para configuración y visualización en tiempo real",
  "Arquitectura escalable de 8 a 32 canales",
  "Adquisición precisa para prácticas, ensayos y validación experimental",
];

export default function SignalSection() {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Neurion Signal</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Sistema plug and play para adquirir EEG, EMG, EOG y ECG.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Neurion Signal combina hardware y software en un sistema diseñado para facilitar la
            adquisición de señales biológicas en contextos educativos, de laboratorio e
            investigación. Su propuesta prioriza una operación simple, interfaz propia, autonomía,
            conectividad inalámbrica y una base técnica robusta para trabajar con distintos tipos de
            biopotenciales.
          </p>

          <div className="mt-8 grid gap-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 text-sm font-semibold text-[#1F252B]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <DeviceMockup />
      </div>
    </section>
  );
}
