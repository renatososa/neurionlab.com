import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const applications = [
  {
    icon: "brain",
    title: "Clasificacion de gestos con ML",
    subtitle: "EMG + pipelines experimentales",
    text: "Senales listas para entrenar modelos, comparar ventanas y validar clasificacion de movimientos o activaciones musculares.",
  },
  {
    icon: "activity",
    title: "Biofeedback",
    subtitle: "Visualizacion inmediata",
    text: "Entornos de aprendizaje y entrenamiento donde la retroalimentacion en vivo importa tanto como el dato crudo.",
  },
  {
    icon: "cable",
    title: "Control de dispositivos externos",
    subtitle: "Interfaces fisicas y pruebas",
    text: "Base para accionar prótesis, actuadores, prototipos interactivos o experiencias de accesibilidad con hardware conectado.",
  },
  {
    icon: "graduation",
    title: "Laboratorios guiados",
    subtitle: "Docencia con profundidad",
    text: "Secuencias didácticas para que un estudiante no solo mida, sino que entienda setup, calidad de señal y contexto de uso.",
  },
];

export default function Applications() {
  return (
    <section id="aplicaciones" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Casos de uso que ayudan a proyectar el valor del sistema.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Esta sección ya no enumera solo tipos de señal. Muestra escenarios concretos para que
            investigadores, docentes y makers entiendan donde entra Neurion LAB en su trabajo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((item) => (
            <article
              key={item.title}
              className="group rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 transition duration-200 hover:border-[#38B26D]/40 hover:bg-white hover:shadow-xl hover:shadow-[#1F252B]/5"
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm transition group-hover:bg-[#38B26D]">
                  <Icon name={item.icon} className="h-6 w-6 text-[#38B26D] transition group-hover:text-white" />
                </div>
                <span className="font-mono text-sm font-semibold text-[#30C7D9]">{item.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5E6A73]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 text-sm leading-7 text-[#5E6A73]">
          <strong className="text-[#1F252B]">Uso previsto:</strong> Neurion Signal y el ecosistema
          Neurion LAB están orientados a educación, investigación y prototipado. No están
          destinados a diagnóstico clínico salvo indicación y certificación específica.
        </div>
      </div>
    </section>
  );
}
