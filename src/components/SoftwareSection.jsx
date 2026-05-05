import SectionLabel from "./SectionLabel";

const channels = ["Ch 01", "Ch 02", "Ch 03", "Ch 04", "EMG A", "EEG B"];
const controls = ["Command console", "Selector de canales", "Modo oscuro operativo"];

export default function SoftwareSection() {
  return (
    <section className="bg-[#1F252B] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel dark>Software</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">
            La interfaz también comunica madurez técnica.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            El sitio ahora reserva un espacio claro para la capa de software: visualización en
            tiempo real, consola operativa, seleccion de canales y una experiencia que se siente
            como producto oficial, no como herramienta improvisada.
          </p>

          <div className="mt-8 grid gap-3">
            {controls.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/88"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#11161B] p-5 shadow-[0_32px_90px_-42px_rgba(0,0,0,0.85)] sm:p-6">
          <div className="absolute inset-0 rounded-[2.5rem] opacity-[0.08]" aria-hidden="true">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="software-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#software-grid)" />
            </svg>
          </div>

          <div className="relative space-y-4">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#151C22] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Session monitor
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">Acquisition / EMG + EEG</p>
                </div>
                <div className="rounded-full bg-[#38B26D]/12 px-3 py-1 text-xs font-semibold text-[#7DE8A7]">
                  Recording
                </div>
              </div>

              <svg viewBox="0 0 580 160" className="mt-4 h-40 w-full" fill="none" aria-hidden="true">
                <path d="M0 28H580" stroke="rgba(255,255,255,0.12)" />
                <path d="M0 78H580" stroke="rgba(255,255,255,0.12)" />
                <path d="M0 128H580" stroke="rgba(255,255,255,0.12)" />
                <path
                  d="M0 36C22 36 24 18 43 18C64 18 62 48 82 48C103 48 108 10 133 10C160 10 160 58 187 58C216 58 218 19 246 19C275 19 274 46 302 46C328 46 333 27 356 27C381 27 382 35 401 35C423 35 425 22 448 22C473 22 473 41 494 41C516 41 519 31 542 31C563 31 565 37 580 37"
                  stroke="#38B26D"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0 92C20 86 31 104 53 92C75 80 95 103 118 92C141 81 158 104 182 94C204 84 224 103 248 93C272 83 291 103 315 91C338 79 357 99 381 92C402 86 421 101 444 93C469 84 484 102 507 95C531 87 548 97 580 89"
                  stroke="#30C7D9"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M0 141C16 141 18 126 31 126C45 126 45 150 60 150C76 150 79 113 97 113C119 113 119 155 141 155C163 155 164 121 186 121C209 121 211 144 232 144C255 144 256 135 276 135C300 135 301 147 322 147C347 147 347 122 369 122C392 122 394 139 415 139C439 139 440 128 460 128C484 128 485 147 507 147C530 147 533 136 553 136C567 136 570 141 580 141"
                  stroke="#F8FBFD"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.72"
                />
              </svg>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#151C22] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Channels
                </p>
                <div className="mt-4 grid gap-2">
                  {channels.map((channel, index) => (
                    <div
                      key={channel}
                      className={`flex items-center justify-between rounded-2xl px-3 py-2 text-sm ${
                        index < 4 ? "bg-white/6 text-white" : "bg-[#38B26D]/12 text-[#A6F1C2]"
                      }`}
                    >
                      <span>{channel}</span>
                      <span className="text-xs opacity-70">{index < 4 ? "Ready" : "Live"}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-[#151C22] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Command console
                </p>
                <div className="mt-4 space-y-2 font-mono text-xs leading-6 text-[#C7D2DA]">
                  <div className="rounded-2xl bg-black/25 px-3 py-2">$ session.start --profile emg-lab</div>
                  <div className="rounded-2xl bg-black/25 px-3 py-2">$ channels.enable 1 2 3 4 emg-a eeg-b</div>
                  <div className="rounded-2xl bg-black/25 px-3 py-2">$ filter.bandpass --low 20 --high 450</div>
                  <div className="rounded-2xl bg-[#30C7D9]/12 px-3 py-2 text-[#9BEAF4]">
                    signal.locked :: 6 channels streaming :: markers enabled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
