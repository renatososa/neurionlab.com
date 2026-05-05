import Button from "./Button";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const products = [
  {
    id: "signal",
    status: "Disponible",
    title: "Neurion Signal",
    text: "Adquisicion de biopotenciales para EEG, EMG y ECG con una narrativa de producto lista para academia, I+D y prototipado.",
    bullets: ["8 a 32 canales", "Visualizacion en tiempo real", "Software propio", "Soporte local"],
    icon: "signal",
  },
  {
    id: "protesis",
    status: "Beta",
    title: "Sistemas protésicos",
    text: "Línea futura enfocada en control mioeléctrico, modularidad mecánica y asistencia accesible mediante fabricación digital.",
    bullets: ["Mioelectrico", "Piezas 3D", "Validacion de uso", "Evolucion abierta"],
    icon: "handheart",
  },
  {
    id: "kits",
    status: "Roadmap",
    title: "Kits educativos",
    text: "Hardware modular para aula, prácticas guiadas y recursos que ayuden a entrar al ecosistema sin una curva técnica agresiva.",
    bullets: ["Laboratorios listos", "Aula modular", "Recursos descargables", "Trayectos por nivel"],
    icon: "graduation",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Productos</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            La home ya puede mostrar una familia de herramientas, no un unico lanzamiento.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            La arquitectura propuesta funciona porque ordena lo disponible hoy, lo que esta en
            validación y lo que puede crecer como puerta de entrada educativa.
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

        <div className="mt-10 rounded-[2rem] border border-[#DCE3E8] bg-[#1F252B] p-6 text-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Narrativa de marca
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Disponible, en validación y en roadmap: todo convive sin confundir al visitante.
              </h3>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              Estado explicito
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Disponible</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Lo que ya puede demostrarse y cotizarse con confianza.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Beta</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Proyectos honestamente etiquetados para generar expectativa sin sobreprometer.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Recursos</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Documentacion y piezas como acelerador de adopcion.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">Solicitar información</Button>
            <Button href="#recursos" variant="secondary">
              Explorar documentacion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
