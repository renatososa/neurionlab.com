import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import heroSlides from "../data/heroSlides";
import deviceRender from "../assets/perspectiva.png";

const heroStats = [
  { value: "3 lineas", label: "Marca en expansion" },
  { value: "8-32 ch", label: "Escala Signal" },
  { value: "GUI + HW", label: "Sistema integrado" },
];

function splitHeadline(title, fallback) {
  const [first, ...rest] = title.split(":");
  return {
    lead: first,
    emphasis: rest.join(":").trim() || fallback,
  };
}

function HeroVisual({ panel, status }) {
  if (panel === "signal") {
    return (
      <div className="relative mx-auto w-full max-w-[700px]">
        <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-[#38B26D]/15 blur-3xl" />
        <div className="absolute right-0 top-16 h-40 w-40 rounded-full bg-[#30C7D9]/18 blur-3xl" />
        <div className="relative rounded-[2.7rem] border border-white/70 bg-gradient-to-br from-white via-white to-[#EEF8F2] p-4 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.55)] sm:p-6">
          <div
            className="absolute inset-0 rounded-[2.7rem] opacity-[0.07]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,37,43,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(31,37,43,0.22) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#D3D5D8] p-4 shadow-inner shadow-white/60 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5E6A73]">
                  Neurion Signal
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1F252B]">
                  Render de hardware con stack de software
                </p>
              </div>
              <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-[#1F252B]">
                {status}
              </div>
            </div>

            <img
              src={deviceRender}
              alt="Render de Neurion Signal con carcasa grafito, conexiones frontales y cubierta transparente superior."
              className="mx-auto w-full max-w-[560px] object-contain drop-shadow-[0_28px_40px_rgba(31,37,43,0.25)]"
            />
          </div>

          <div className="relative z-10 -mt-8 ml-auto w-full max-w-[330px] rounded-[1.75rem] border border-[#DCE3E8] bg-white/95 p-4 shadow-2xl shadow-[#1F252B]/10 backdrop-blur sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#1F252B]">Acquisition panel</p>
                <p className="text-xs text-[#5E6A73]">EMG, EEG y validacion guiada</p>
              </div>
              <div className="rounded-full bg-[#38B26D]/10 px-3 py-1 text-xs font-semibold text-[#2b9357]">
                Live
              </div>
            </div>

            <svg viewBox="0 0 320 88" className="h-20 w-full" fill="none" aria-hidden="true">
              <path d="M0 44H320" stroke="#DCE3E8" strokeWidth="1" />
              <path
                d="M0 47C14 47 12 30 26 30C40 30 38 57 54 57C71 57 74 17 92 17C114 17 112 68 136 68C162 68 163 26 188 26C213 26 214 59 238 59C260 59 262 34 282 34C301 34 307 46 320 46"
                stroke="#38B26D"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0 59C20 53 36 67 58 59S101 48 122 56S164 66 187 56S230 49 249 56S297 62 320 55"
                stroke="#30C7D9"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (panel === "prosthetics") {
    return (
      <div className="relative mx-auto w-full max-w-[680px] rounded-[2.7rem] border border-white/70 bg-gradient-to-br from-white via-white to-[#E8F8FA] p-5 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.42)] sm:p-6">
        <div className="absolute inset-0 rounded-[2.7rem] opacity-[0.08]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="prosthetics-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M36 0H0V36" fill="none" stroke="#1F252B" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prosthetics-grid)" />
          </svg>
        </div>
        <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#DCE3E8] bg-[#1F252B] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Sistemas protesicos
            </p>
            <h3 className="mt-3 text-2xl font-bold">Control mioelectrico y modularidad fisica.</h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Arquitectura lista para combinar sensores, piezas impresas y control experimental.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["EMG control", "3D printed", "Beta"].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/88">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#DCE3E8] bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5E6A73]">
                  Validation track
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1F252B]">
                  Plataforma para ensayos mecanicos y mioelectricos
                </p>
              </div>
              <div className="rounded-full bg-[#1F252B] px-3 py-1 text-xs font-semibold text-white">
                {status}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-5 gap-3">
              <div className="col-span-2 rounded-[1.5rem] border border-[#DCE3E8] bg-[#F7F9FA] p-4">
                <div className="mx-auto h-28 w-20 rounded-[1.2rem] border border-[#DCE3E8] bg-gradient-to-b from-[#1F252B] to-[#44515C]" />
                <div className="mx-auto mt-3 h-16 w-3 rounded-full bg-[#30C7D9]/70" />
              </div>
              <div className="col-span-3 rounded-[1.5rem] border border-[#DCE3E8] bg-[#F7F9FA] p-4">
                <div className="grid h-full grid-cols-3 gap-3">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-[#DCE3E8] bg-white p-3">
                      <div className="h-10 rounded-xl bg-[#38B26D]/12" />
                      <div className="mt-3 h-24 rounded-xl bg-gradient-to-b from-[#30C7D9]/18 to-[#38B26D]/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-dashed border-[#DCE3E8] bg-[#FCFDFC] px-4 py-3 text-sm leading-6 text-[#5E6A73]">
              Etiqueta honesta de estado: linea en validacion, sin prometer disponibilidad inmediata.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[700px] rounded-[2.7rem] border border-white/70 bg-gradient-to-br from-white via-white to-[#EEF8F2] p-5 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.4)] sm:p-6">
      <div className="absolute inset-0 rounded-[2.7rem] opacity-[0.08]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ecosystem-grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" fill="none" stroke="#1F252B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecosystem-grid)" />
        </svg>
      </div>

      <div className="relative">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#DCE3E8] bg-[#1F252B] p-5 text-white">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Ecosistema LAB
                </p>
                <p className="mt-1 text-lg font-bold">Hardware, software y recursos sincronizados</p>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/88">
                {status}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Signal", "Biopotenciales"],
                ["Kits", "Aula modular"],
                ["Docs", "GUI + 3D + manuales"],
              ].map(([label, text]) => (
                <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-[#DCE3E8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5E6A73]">Perfiles</p>
              <div className="mt-4 space-y-3">
                {["Educacion", "Investigacion", "Prototipado"].map((profile, index) => (
                  <div
                    key={profile}
                    className={`rounded-[1.4rem] px-4 py-3 text-sm font-semibold ${
                      index === 1 ? "bg-[#1F252B] text-white" : "bg-[#F7F9FA] text-[#1F252B]"
                    }`}
                  >
                    {profile}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#DCE3E8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5E6A73]">
                Flujo recomendado
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {["Explorar", "Probar", "Documentar", "Escalar"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[#38B26D]/10 text-sm font-bold text-[#1F252B]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-[#1F252B]">{step}</p>
                    {index < 3 ? <div className="h-px w-6 bg-[#DCE3E8]" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];
  const headline = splitHeadline(currentSlide.title, currentSlide.eyebrow);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#F7F9FA] pb-20 pt-28 scroll-mt-28 sm:pb-24 lg:pb-28 lg:pt-36"
    >
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="neurion-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#1F252B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neurion-grid)" />
        </svg>
      </div>

      <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-[#38B26D]/12 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 h-72 w-72 rounded-full bg-[#30C7D9]/14 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE3E8] bg-white/90 px-4 py-2 text-sm font-medium text-[#5E6A73] shadow-sm">
            <Icon name="sparkles" className="h-4 w-4 text-[#38B26D]" />
            Laboratorio de innovacion biomedica desde Uruguay
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-[-0.06em] text-[#1F252B] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            {headline.lead}
            <span className="block text-[#38B26D]">{headline.emphasis}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-[#30C7D9]">
              {currentSlide.eyebrow}
            </span>
            {currentSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={currentSlide.primaryCta.href} className="sm:min-w-[220px]">
              {currentSlide.primaryCta.label}
            </Button>
            {currentSlide.secondaryCta ? (
              <Button href={currentSlide.secondaryCta.href} variant="secondary" className="sm:min-w-[220px]">
                {currentSlide.secondaryCta.label}
              </Button>
            ) : null}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.6rem] border border-[#DCE3E8] bg-white/95 p-4 shadow-sm"
              >
                <p className="text-base font-bold text-[#1F252B]">{item.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#5E6A73]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#DCE3E8] bg-white/90 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#1F252B]">Carrusel de productos</p>
                <p className="mt-1 text-sm leading-6 text-[#5E6A73]">
                  El hero ahora funciona como mapa de marca y no solo como portada de un unico dispositivo.
                </p>
              </div>
              <div className="rounded-full bg-[#1F252B] px-3 py-1 text-xs font-semibold text-white">
                {currentSlide.status}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveSlide((value) => (value - 1 + heroSlides.length) % heroSlides.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#DCE3E8] bg-white text-[#1F252B] transition hover:border-[#38B26D]/40"
                aria-label="Slide anterior"
              >
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </button>

              <div className="flex flex-1 gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className="group flex-1"
                    aria-label={`Ir al slide ${index + 1}`}
                    aria-pressed={activeSlide === index}
                  >
                    <span className="block h-2 overflow-hidden rounded-full bg-[#E3EAEE]">
                      <span
                        className={`block h-full rounded-full bg-[#1F252B] transition-all duration-300 ${
                          activeSlide === index ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                    <span className="mt-2 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#5E6A73] group-hover:text-[#1F252B]">
                      {slide.id}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveSlide((value) => (value + 1) % heroSlides.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#DCE3E8] bg-white text-[#1F252B] transition hover:border-[#38B26D]/40"
                aria-label="Slide siguiente"
              >
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className={`rounded-[2.8rem] bg-gradient-to-br ${currentSlide.accent} p-1`}>
          <HeroVisual panel={currentSlide.panel} status={currentSlide.status} />
        </div>
      </div>
    </section>
  );
}
