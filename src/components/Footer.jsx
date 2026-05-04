import BrandLogo from "./BrandLogo";
import navItems from "../data/navItems";

export default function Footer() {
  const flatLinks = navItems.flatMap((item) =>
    item.children ? item.children.map((child) => ({ label: child.label, href: child.href })) : [item]
  );

  return (
    <footer className="border-t border-[#DCE3E8] bg-[#F7F9FA] py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr_1fr] lg:px-8">
        <div className="max-w-xl">
          <BrandLogo showTagline />
          <p className="mt-4 text-sm leading-6 text-[#5E6A73]">
            Tecnologia biomedica accesible para investigacion, educacion y asistencia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5E6A73]">
              Navegacion
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-[#5E6A73]">
              {flatLinks.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-[#1F252B]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5E6A73]">
              Plataforma
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-[#5E6A73]">
              <a href="#signal" className="transition hover:text-[#1F252B]">
                Neurion Signal
              </a>
              <a href="#protesis" className="transition hover:text-[#1F252B]">
                Sistemas protesicos
              </a>
              <a href="#recursos" className="transition hover:text-[#1F252B]">
                Recursos y documentacion
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-xl rounded-2xl border border-[#DCE3E8] bg-white p-4 text-xs leading-5 text-[#5E6A73]">
          <strong className="text-[#1F252B]">Uso previsto:</strong> Neurion Signal y las lineas
          futuras del ecosistema estan orientadas a educacion, investigacion y prototipado. No
          estan destinadas a diagnostico clinico salvo indicacion y certificacion especifica.
        </div>
      </div>
    </footer>
  );
}
