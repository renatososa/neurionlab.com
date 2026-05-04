import React, { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Neurion Signal", href: "#signal" },
  { label: "Aplicaciones", href: "#aplicaciones" },
  { label: "Recursos", href: "#recursos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const signalTypes = [
  {
    icon: "brain",
    title: "EEG",
    subtitle: "Actividad cerebral",
    text: "Exploración de señales cerebrales para educación, investigación y prototipado en neurotecnología.",
  },
  {
    icon: "zap",
    title: "EMG",
    subtitle: "Actividad muscular",
    text: "Registro muscular para análisis de movimiento, control mioeléctrico e interfaces biónicas.",
  },
  {
    icon: "activity",
    title: "EOG",
    subtitle: "Movimiento ocular",
    text: "Señales oculares para prácticas de bioinstrumentación e interacción humano-computadora.",
  },
  {
    icon: "heart",
    title: "ECG",
    subtitle: "Actividad cardíaca",
    text: "Registro cardíaco para formación, procesamiento de señales y prácticas experimentales.",
  },
];

const features = [
  {
    icon: "cpu",
    title: "Hardware portátil",
    text: "Dispositivo compacto, modular y pensado para laboratorios educativos y prototipado experimental.",
  },
  {
    icon: "signal",
    title: "Visualización en tiempo real",
    text: "Software guiado para observar señales, configurar registros y trabajar con marcadores durante la adquisición.",
  },
  {
    icon: "graduation",
    title: "Enfoque educativo",
    text: "Cada herramienta busca medir, pero también enseñar cómo funcionan las señales biológicas.",
  },
  {
    icon: "handheart",
    title: "Impacto social",
    text: "Un camino desde el laboratorio hacia tecnologías de asistencia más accesibles para la región.",
  },
];

const steps = [
  "Conectá el dispositivo",
  "Elegí el tipo de señal",
  "Configurá la adquisición",
  "Visualizá en tiempo real",
  "Guardá y exportá",
];

function Icon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    activity: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
    brain: <><path d="M9 4a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a3 3 0 0 0 5 2.2" /><path d="M15 4a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a3 3 0 0 1-5 2.2" /><path d="M9 4c1.8 1.2 2.5 3 2 5" /><path d="M15 4c-1.8 1.2-2.5 3-2 5" /><path d="M8 14c2 0 3 1 4 3 1-2 2-3 4-3" /></>,
    cable: <><path d="M7 7l10 10" /><path d="M4 4l4 4" /><path d="M16 16l4 4" /><path d="M7 3l4 4" /><path d="M3 7l4 4" /><path d="M17 13l4 4" /><path d="M13 17l4 4" /></>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></>,
    graduation: <><path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" /><path d="M21 8v6" /></>,
    handheart: <><path d="M4 14v5" /><path d="M4 17h4l4 3 7-7a2 2 0 0 0-3-3l-4 4" /><path d="M8 17l3-3" /><path d="M12 8c-2-2.5-5 .3-3 2.6L12 14l3-3.4c2-2.3-1-5.1-3-2.6z" /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /><path d="M3 12h4l2-4 3 8 2-4h7" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    microscope: <><path d="M6 18h12" /><path d="M8 22h8" /><path d="M10 18a6 6 0 0 0 6-6" /><path d="M9 3l6 6" /><path d="M7 5l6 6" /><path d="M12 2l3 3" /><path d="M5 8l3 3" /></>,
    radio: <><path d="M4 11a8 8 0 0 1 16 0" /><path d="M8 11a4 4 0 0 1 8 0" /><path d="M12 11v8" /><path d="M8 19h8" /></>,
    signal: <><path d="M2 20h20" /><path d="M5 16l3-3 3 2 4-7 4 5" /><path d="M19 8v5h-5" /></>,
    sparkles: <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z" /><path d="M19 14l.7 1.8 1.8.7-1.8.7L19 19l-.7-1.8-1.8-.7 1.8-.7L19 14z" /></>,
    x: <><path d="M6 6l12 12M18 6L6 18" /></>,
    zap: <><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  };

  return <svg {...common}>{icons[name] || icons.signal}</svg>;
}

function LogoMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-[#1F252B] shadow-sm">
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <circle cx="15" cy="15" r="4" stroke="#38B26D" strokeWidth="3" />
          <circle cx="33" cy="13" r="3.5" stroke="#30C7D9" strokeWidth="3" />
          <circle cx="31" cy="33" r="4" stroke="#38B26D" strokeWidth="3" />
          <circle cx="13" cy="32" r="3" stroke="#30C7D9" strokeWidth="3" />
          <path d="M18.5 16.5L29 14.5M17 29.5L28 32M16.5 18.5L28.5 30" stroke="#F7F9FA" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>
      {!compact && (
        <div className="leading-none">
          <p className="text-lg font-bold tracking-tight text-[#1F252B]">Neurion <span className="text-[#38B26D]">LAB</span></p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#5E6A73]">Biomedical innovation</p>
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-sm ${dark ? "border-white/10 bg-white/10 text-white/80" : "border-[#DCE3E8] bg-white text-[#5E6A73]"}`}>
      <span className="h-2 w-2 rounded-full bg-[#38B26D]" />
      {children}
    </div>
  );
}

function Button({ children, variant = "primary", href = "#contacto" }) {
  const styles =
    variant === "primary"
      ? "bg-[#38B26D] text-white hover:bg-[#2fa161]"
      : variant === "cyan"
      ? "bg-[#30C7D9] text-white hover:bg-[#27b6c7]"
      : "border border-[#DCE3E8] bg-white text-[#1F252B] hover:border-[#38B26D]/40 hover:bg-[#F7F9FA]";

  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${styles}`}>
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#38B26D]/20 blur-3xl" />
      <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-[#30C7D9]/20 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-[#1F252B]/10 backdrop-blur">
        <div className="rounded-[1.5rem] border border-[#DCE3E8] bg-[#F7F9FA] p-4">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-[#1F252B] p-5 text-white shadow-inner">
            <div className="absolute inset-x-8 top-4 h-32 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="relative z-10 flex items-center justify-between">
              <LogoMark compact />
              <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">Signal v1</div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-5 gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-10 rounded-xl border border-white/10 bg-white/5" />
              ))}
            </div>

            <div className="relative z-10 mt-5 rounded-2xl border border-[#38B26D]/30 bg-[#38B26D]/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-white/70">PCB visible</span>
                <span className="rounded-full bg-[#30C7D9]/20 px-2 py-1 text-[10px] font-semibold text-[#87F1FB]">WiFi</span>
              </div>
              <svg viewBox="0 0 400 90" className="h-20 w-full" fill="none" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <path key={i} d={`M${20 + i * 38} 20 V70 M${20 + i * 38} 45 H${42 + i * 38}`} stroke={i % 2 ? "#30C7D9" : "#38B26D"} strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
                ))}
                <path d="M20 45 C65 12 95 80 140 45 S215 12 260 45 S335 80 380 45" stroke="#F7F9FA" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 ml-auto w-[86%] rounded-[1.5rem] border border-[#DCE3E8] bg-white p-4 shadow-xl shadow-[#1F252B]/10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#1F252B]">Adquisición EMG</p>
            <p className="text-xs text-[#5E6A73]">Señal estable · 8 canales</p>
          </div>
          <div className="rounded-full bg-[#38B26D]/10 px-3 py-1 text-xs font-semibold text-[#2c9559]">● Grabando</div>
        </div>
        <div className="space-y-3">
          {[0, 1, 2].map((row) => (
            <div key={row} className="rounded-2xl border border-[#DCE3E8] bg-[#F7F9FA] px-3 py-2">
              <div className="mb-1 flex justify-between text-[10px] text-[#5E6A73]">
                <span>CH {row + 1}</span>
                <span>{row === 0 ? "EMG" : "AUX"}</span>
              </div>
              <svg viewBox="0 0 320 42" className="h-10 w-full" fill="none" aria-hidden="true">
                <path d="M0 21 H320" stroke="#DCE3E8" strokeWidth="1" />
                <path d={row === 0 ? "M0 22 C20 22 18 8 30 8 C42 8 40 34 54 34 C68 34 70 15 85 15 C100 15 102 29 118 29 C140 29 145 10 165 10 C188 10 190 32 212 32 C238 32 240 14 262 14 C285 14 290 24 320 22" : "M0 23 C35 14 55 30 85 22 S145 14 175 22 S235 30 265 22 S300 18 320 21"} stroke={row === 0 ? "#38B26D" : "#30C7D9"} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DCE3E8]/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" aria-label="Ir al inicio"><LogoMark /></a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#5E6A73] transition hover:text-[#1F252B]">{item.label}</a>
          ))}
        </nav>

        <div className="hidden lg:block"><Button href="#contacto">Solicitar información</Button></div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#DCE3E8] bg-white lg:hidden" aria-label="Abrir menú">
          <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#DCE3E8] bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-[#1F252B]">{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F7F9FA] pt-32">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <svg width="100%" height="100%"><defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#1F252B" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCE3E8] bg-white px-4 py-2 text-sm font-medium text-[#5E6A73] shadow-sm">
            <Icon name="sparkles" className="h-4 w-4 text-[#38B26D]" />
            Laboratorio de innovación biomédica
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.05em] text-[#1F252B] md:text-6xl lg:text-7xl">
            Tecnología biomédica accesible para investigación, educación y asistencia.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5E6A73]">
            Desarrollamos plataformas de hardware y software para adquirir, procesar y visualizar señales biológicas, impulsando la formación y el prototipado de tecnologías biónicas en Uruguay y Latinoamérica.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#signal">Conocer Neurion Signal</Button>
            <Button href="#contacto" variant="secondary">Contactar al laboratorio</Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["EEG", "EMG", "EOG · ECG"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#DCE3E8] bg-white p-4 text-center shadow-sm">
                <p className="text-lg font-bold text-[#1F252B]">{item}</p>
                <p className="mt-1 text-xs font-medium text-[#5E6A73]">Biopotenciales</p>
              </div>
            ))}
          </div>
        </div>

        <DeviceMockup />
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Qué hacemos</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">Convertimos señales biológicas en herramientas para aprender, investigar y crear.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5E6A73]">Integramos electrónica, software, procesamiento de señales y fabricación local para acercar la neurotecnología y la biónica a laboratorios, docentes, estudiantes e investigadores.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: "radio", title: "Biopotenciales", text: "Adquisición de señales como EEG, EMG, EOG y ECG con foco en educación y prototipado." },
            { icon: "microscope", title: "Educación e investigación", text: "Herramientas pensadas para prácticas, formación técnica y proyectos universitarios." },
            { icon: "cable", title: "Asistencia tecnológica", text: "Un puente hacia interfaces biónicas, prótesis y dispositivos que mejoren la autonomía." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1F252B]/5">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm"><Icon name={item.icon} className="h-6 w-6 text-[#38B26D]" /></div>
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5E6A73]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="signal" className="bg-[#F7F9FA] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel>Producto principal</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">Neurion Signal: una plataforma portátil para explorar señales biológicas.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5E6A73]">Sistema modular de adquisición de biopotenciales diseñado para educación, investigación y prototipado. Integra hardware, software de visualización y una experiencia guiada para trabajar con EEG, EMG, EOG y ECG.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Multicanal", "Portátil", "Software guiado", "Soporte local", "Parcialmente abierto"].map((tag) => (
              <span key={tag} className="rounded-full border border-[#DCE3E8] bg-white px-4 py-2 text-sm font-semibold text-[#1F252B]">{tag}</span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">Solicitar información</Button>
            <Button href="#aplicaciones" variant="secondary">Ver aplicaciones</Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#DCE3E8] bg-white p-6 shadow-sm">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#38B26D]/10"><Icon name={item.icon} className="h-5 w-5 text-[#38B26D]" /></div>
              <h3 className="font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5E6A73]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="aplicaciones" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">Aplicaciones para aprender, investigar y prototipar.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5E6A73]">Neurion Signal está orientado a educación, investigación y prototipado. Permite explorar distintas señales biológicas como punto de partida para formación, análisis e interfaces biónicas.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {signalTypes.map((item) => (
            <div key={item.title} className="group rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 transition hover:border-[#38B26D]/40 hover:bg-white hover:shadow-xl hover:shadow-[#1F252B]/5">
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm group-hover:bg-[#38B26D]"><Icon name={item.icon} className="h-6 w-6 text-[#38B26D] group-hover:text-white" /></div>
                <span className="font-mono text-sm font-semibold text-[#30C7D9]">{item.title}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F252B]">{item.subtitle}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5E6A73]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 text-sm leading-7 text-[#5E6A73]"><strong className="text-[#1F252B]">Uso previsto:</strong> Neurion Signal está orientado a educación, investigación y prototipado. No está destinado a diagnóstico clínico salvo indicación y certificación específica.</div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-[#F7F9FA] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Flujo guiado</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">De la conexión al registro en pocos pasos.</h2>
            <p className="mt-6 text-lg leading-8 text-[#5E6A73]">La experiencia de software está pensada para guiar al usuario sin ocultar la capacidad técnica. Un modo simple acompaña el aprendizaje; un modo avanzado permite ajustar parámetros de adquisición y análisis.</p>
          </div>

          <div className="rounded-[2rem] border border-[#DCE3E8] bg-white p-6 shadow-xl shadow-[#1F252B]/5">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-[#DCE3E8] bg-[#F7F9FA] p-4">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${index === 0 ? "bg-[#38B26D]" : index === 1 ? "bg-[#30C7D9]" : "bg-[#1F252B]"}`}>{index + 1}</div>
                  <div>
                    <h3 className="font-bold text-[#1F252B]">{step}</h3>
                    <p className="mt-1 text-sm text-[#5E6A73]">
                      {index === 0 && "La app detecta el dispositivo y verifica el estado del sistema."}
                      {index === 1 && "Seleccioná EEG, EMG, EOG, ECG o una configuración personalizada."}
                      {index === 2 && "Definí canales, duración, filtros y parámetros principales."}
                      {index === 3 && "Observá las señales, agregá marcadores y revisá la calidad."}
                      {index === 4 && "Exportá los datos para análisis posterior o documentación."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="recursos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>Aprendizaje</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">Una herramienta para enseñar y aprender bioinstrumentación.</h2>
          </div>
          <p className="text-lg leading-8 text-[#5E6A73]">La web puede crecer como un espacio de recursos: guías, prácticas de laboratorio, tutoriales de uso, ejemplos de análisis de señales y documentación técnica para instituciones.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { title: "Guías de biopotenciales", text: "Introducciones visuales a EEG, EMG, EOG y ECG con foco educativo." },
            { title: "Prácticas de laboratorio", text: "Actividades descargables para cursos de bioinstrumentación y señales." },
            { title: "Proyectos de asistencia", text: "Ejemplos de prototipado con EMG, interfaces y control mioeléctrico." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-7">
              <h3 className="text-xl font-bold text-[#1F252B]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5E6A73]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-[#F7F9FA] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#1F252B] p-8 text-white md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel dark>Sobre Neurion LAB</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Tecnología biomédica desde Uruguay para la región.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/75">Neurion LAB nace para desarrollar herramientas biomédicas accesibles que permitan formar, investigar y prototipar soluciones de neurotecnología y asistencia. Buscamos combinar ingeniería, software, fabricación digital y una mirada social sobre el impacto de la tecnología.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Accesible", "Biomédica", "Experimental"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center font-semibold text-white/90">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[#1F252B] md:text-5xl">Conversemos sobre tu laboratorio, curso o proyecto.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5E6A73]">Si formás parte de una institución, laboratorio, centro educativo o proyecto vinculado a neurotecnología, bioinstrumentación o asistencia tecnológica, podemos conversar sobre cómo Neurion LAB puede acompañar tu trabajo.</p>
        </div>

        <form className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block"><span className="mb-2 block text-sm font-semibold text-[#1F252B]">Nombre</span><input className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]" placeholder="Tu nombre" /></label>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-[#1F252B]">Institución</span><input className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]" placeholder="Universidad, laboratorio, centro" /></label>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-[#1F252B]">Email</span><input type="email" className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]" placeholder="contacto@ejemplo.com" /></label>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-[#1F252B]">Motivo</span><select className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"><option>Información sobre Neurion Signal</option><option>Compra institucional</option><option>Demostración</option><option>Colaboración</option><option>Proyecto educativo</option><option>Desarrollo a medida</option></select></label>
          </div>
          <label className="mt-4 block"><span className="mb-2 block text-sm font-semibold text-[#1F252B]">Mensaje</span><textarea className="min-h-32 w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]" placeholder="Contanos brevemente qué necesitás." /></label>
          <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#38B26D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2fa161] sm:w-auto">Enviar consulta <Icon name="arrow" className="h-4 w-4" /></button>
          <p className="mt-4 text-xs leading-5 text-[#5E6A73]">Este formulario es visual en el prototipo. Para producción se debe conectar a un backend, email transaccional o servicio de formularios.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DCE3E8] bg-[#F7F9FA] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#5E6A73]">Tecnología biomédica accesible para investigación, educación y asistencia.</p>
        </div>
        <div className="max-w-xl rounded-2xl border border-[#DCE3E8] bg-white p-4 text-xs leading-5 text-[#5E6A73]"><strong className="text-[#1F252B]">Uso previsto:</strong> Neurion Signal está orientado a educación, investigación y prototipado. No está destinado a diagnóstico clínico salvo indicación y certificación específica.</div>
      </div>
    </footer>
  );
}

export default function NeurionLabLanding() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1F252B]">
      <Header />
      <Hero />
      <WhatWeDo />
      <ProductSection />
      <Applications />
      <FlowSection />
      <Resources />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
