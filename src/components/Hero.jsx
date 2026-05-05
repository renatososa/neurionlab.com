import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import heroSlides from "../data/heroSlides";
import deviceRender from "../assets/perspectiva.png";
import guiCapture from "../img/GUI.png";
import prostheticsRender from "../img/render_protesis.png";

function HeroVisual({ panel, status }) {
  if (panel === "signal") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/75 bg-gradient-to-br from-[#E8ECEF] via-[#D8DBDE] to-[#EEF8F2] p-6 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.45)] sm:p-8">
        <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[#38B26D]/14 blur-3xl" />
        <div className="absolute right-6 top-14 h-36 w-36 rounded-full bg-[#30C7D9]/16 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,37,43,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(31,37,43,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <img
          src={deviceRender}
          alt="Render de Neurion Signal con carcasa grafito, conexiones frontales y cubierta transparente superior."
          className="relative z-10 mx-auto w-full max-w-[430px] object-contain drop-shadow-[0_24px_34px_rgba(31,37,43,0.22)]"
        />
      </div>
    );
  }

  if (panel === "prosthetics") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/75 bg-gradient-to-br from-[#F7FBFC] via-white to-[#E8F8FA] p-5 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.38)] sm:p-6">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#30C7D9]/14 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-[#38B26D]/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="prosthetics-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#1F252B" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prosthetics-grid)" />
          </svg>
        </div>

        <img
          src={prostheticsRender}
          alt="Render de prótesis desarrollada por Neurion para asistencia y control mioeléctrico."
          className="relative z-10 mx-auto w-full max-w-[420px] object-contain drop-shadow-[0_24px_36px_rgba(31,37,43,0.2)]"
        />
      </div>
    );
  }

  if (panel === "gui") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/75 bg-gradient-to-br from-[#F4FBFD] via-white to-[#EEF4F8] p-4 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.35)] sm:p-5">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#30C7D9]/14 blur-3xl" />
        <div className="absolute right-8 bottom-8 h-24 w-24 rounded-full bg-[#38B26D]/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="gui-grid" width="26" height="26" patternUnits="userSpaceOnUse">
                <path d="M26 0H0V26" fill="none" stroke="#1F252B" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gui-grid)" />
          </svg>
        </div>

        <div className="relative z-10 w-full overflow-hidden rounded-[1.8rem] border border-[#DCE3E8] bg-white p-3 shadow-[0_24px_50px_-32px_rgba(31,37,43,0.35)] sm:p-4">
          <img
            src={guiCapture}
            alt="Captura de la GUI propia de Neurion para adquisición, monitor en vivo y medición de señales."
            className="block h-full w-full object-contain object-center"
          />
        </div>
      </div>
    );
  }

}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [leftHeight, setLeftHeight] = useState(670);
  const leftColumnRef = useRef(null);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!leftColumnRef.current || typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const updateHeight = () => {
      if (!leftColumnRef.current) {
        return;
      }

      setLeftHeight(Math.ceil(leftColumnRef.current.getBoundingClientRect().height));
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(leftColumnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
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

      <div
        className="relative mx-auto max-w-7xl px-5 lg:px-8"
        style={{ "--hero-left-height": `${leftHeight}px` }}
      >
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div ref={leftColumnRef} className="flex max-w-2xl flex-col">
            <h1 className="text-balance text-[2.55rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1F252B] sm:text-[2.85rem] sm:leading-[1.06] md:text-[3.2rem] md:leading-[1.04] lg:text-[4rem] lg:leading-[0.98]">
            Herramientas biomédicas accesibles para
            <span className="block text-[#38B26D]">formación, investigación y prototipado.</span>
          </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
              Neurion LAB diseña y desarrolla plataformas para adquirir, procesar y visualizar
              señales biológicas. Integramos hardware, software, fabricación local y soporte técnico
              para acercar la neurotecnología y la biónica a instituciones educativas, laboratorios y
              equipos que necesitan herramientas reales para aprender, investigar y construir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#signal" className="sm:min-w-[220px]">
                Conocer Neurion Signal
              </Button>
              <Button href="#contacto" variant="secondary" className="sm:min-w-[220px]">
                Hablar con el equipo
              </Button>
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-[2.8rem] border border-white/70 bg-white/70 p-3 shadow-[0_36px_90px_-50px_rgba(31,37,43,0.45)] backdrop-blur lg:h-[var(--hero-left-height)]">
            <div className="flex min-h-0 flex-col rounded-[2.3rem] border border-[#DCE3E8] bg-white p-5 sm:p-5 lg:h-full">
              <div className="flex flex-wrap items-start gap-4">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#30C7D9]">
                    {currentSlide.eyebrow}
                  </p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-3xl">
                    {currentSlide.title}
                  </h2>
                  <p className="mt-1.5 min-h-[56px] text-sm leading-7 text-[#5E6A73] sm:min-h-[64px] sm:text-base">
                    {currentSlide.description}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex min-h-[40px] flex-wrap justify-center gap-2">
                <span className="inline-flex h-8 items-center justify-center rounded-full border border-[#1F252B] bg-[#1F252B] px-3 text-xs font-semibold leading-none text-white">
                  {currentSlide.status}
                </span>
                {currentSlide.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="inline-flex h-8 items-center justify-center rounded-full border border-[#DCE3E8] bg-[#F7F9FA] px-3 text-xs font-semibold leading-none text-[#1F252B]"
                  >
                    {bullet}
                  </span>
                ))}
              </div>

              <div
                className={`mt-2 flex min-h-[260px] overflow-hidden rounded-[2.8rem] bg-gradient-to-br ${currentSlide.accent} p-1 sm:min-h-[300px] lg:min-h-0 lg:flex-1`}
              >
                <HeroVisual panel={currentSlide.panel} status={currentSlide.status} />
              </div>

              <div className="mt-4 flex flex-col gap-4 border-t border-[#E6EDF1] pt-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={currentSlide.primaryCta.href} className="sm:min-w-[220px]">
                    {currentSlide.primaryCta.label}
                  </Button>
                  {currentSlide.secondaryCta ? (
                    <Button
                      href={currentSlide.secondaryCta.href}
                      variant="secondary"
                      className="sm:min-w-[220px]"
                    >
                      {currentSlide.secondaryCta.label}
                    </Button>
                  ) : null}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveSlide((value) => (value - 1 + heroSlides.length) % heroSlides.length)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#DCE3E8] bg-white text-[#1F252B] transition hover:border-[#38B26D]/40"
                    aria-label="Producto anterior"
                  >
                    <Icon name="arrow" className="h-4 w-4 rotate-180" />
                  </button>

                  <div className="grid flex-1 grid-cols-3 gap-2">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`grid h-10 place-items-center rounded-full border px-4 text-center text-sm font-semibold transition ${
                          activeSlide === index
                            ? "border-[#1F252B] bg-[#1F252B] text-white"
                            : "border-[#DCE3E8] bg-[#F7F9FA] text-[#1F252B] hover:border-[#38B26D]/40 hover:bg-white"
                        }`}
                        aria-label={`Mostrar ${slide.title}`}
                        aria-pressed={activeSlide === index}
                      >
                        <span>{slide.label}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSlide((value) => (value + 1) % heroSlides.length)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#DCE3E8] bg-white text-[#1F252B] transition hover:border-[#38B26D]/40"
                    aria-label="Producto siguiente"
                  >
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
