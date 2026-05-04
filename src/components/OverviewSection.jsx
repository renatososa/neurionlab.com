import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const overviewItems = [
  {
    icon: "cpu",
    title: "Hardware real",
    text: "Plataformas robustas, modulares y escalables para trabajo en aula, demostracion tecnica y exploracion experimental.",
  },
  {
    icon: "signal",
    title: "Software guiado",
    text: "Visualizacion en tiempo real, configuracion operativa y una GUI que acompana sin esconder profundidad tecnica.",
  },
  {
    icon: "layers",
    title: "Fabricacion abierta",
    text: "Archivos, piezas y documentacion preparados para impresion 3D, iteracion local y proyectos de hardware abierto.",
  },
];

export default function OverviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pilares del sistema</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Tres capas para sostener una marca biomedica escalable.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            La home deja de vender un objeto aislado y empieza a mostrar un sistema coherente:
            dispositivo, experiencia de uso y recursos listos para crecer por productos y perfiles.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {overviewItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-7 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1F252B]/5"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm">
                <Icon name={item.icon} className="h-6 w-6 text-[#38B26D]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5E6A73] sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
