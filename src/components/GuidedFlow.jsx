import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    title: "Conectá el dispositivo",
    text: "La app detecta el hardware, verifica el estado del sistema y reduce la fricción de arranque.",
    tone: "bg-[#38B26D]",
  },
  {
    title: "Elegí la señal",
    text: "Seleccioná EEG, EMG, EOG, ECG o una configuración personalizada según el objetivo del ensayo.",
    tone: "bg-[#30C7D9]",
  },
  {
    title: "Configurá la adquisición",
    text: "Definí canales, duración, filtros y parámetros clave con una interfaz clara y escalable.",
    tone: "bg-[#1F252B]",
  },
  {
    title: "Visualizá y exportá",
    text: "Observá la calidad de la señal, agregá marcadores y prepará los datos para análisis posterior.",
    tone: "bg-[#1F252B]",
  },
];

const controls = ["Modo simple", "Modo avanzado", "Marcadores", "Exportación"];

export default function GuidedFlow() {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <SectionLabel>Flujo guiado</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
              De la conexión al registro en pocos pasos.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
              La experiencia de software está pensada para acompañar el aprendizaje sin ocultar la
              capacidad técnica. Un modo simple acelera la práctica; un modo avanzado permite
              configurar el ensayo con mayor control.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {controls.map((control) => (
                <span
                  key={control}
                  className="rounded-full border border-[#DCE3E8] bg-white px-4 py-2 text-sm font-semibold text-[#1F252B]"
                >
                  {control}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#DCE3E8] bg-white p-5 shadow-xl shadow-[#1F252B]/5 sm:p-6">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.5rem] border border-[#DCE3E8] bg-[#F7F9FA] p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${step.tone}`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1F252B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5E6A73]">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-[#1F252B] p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                  <Icon name="sliders" className="h-5 w-5 text-[#87F1FB]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Parámetros visibles</p>
                  <p className="text-sm text-white/70">Canales, filtros, duración y validación de señal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
