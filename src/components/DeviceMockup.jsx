import deviceRender from "../assets/perspectiva.png";

const summaryChips = ["PCB visible", "EMG prioritario", "Software guiado"];

export default function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-[#38B26D]/15 blur-3xl" />
      <div className="absolute right-0 top-16 h-40 w-40 rounded-full bg-[#30C7D9]/18 blur-3xl" />

      <div className="relative rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-white via-white to-[#EEF8F2] p-4 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.55)] sm:p-6">
        <div
          className="absolute inset-0 rounded-[2.5rem] opacity-[0.07]"
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
                Render de hardware con carcasa grafito
              </p>
            </div>
            <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-[#1F252B]">
              Educación · Investigación · Prototipado
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
              <p className="text-sm font-bold text-[#1F252B]">Adquisición EMG</p>
              <p className="text-xs text-[#5E6A73]">Señal estable · configuración guiada</p>
            </div>
            <div className="rounded-full bg-[#38B26D]/10 px-3 py-1 text-xs font-semibold text-[#2b9357]">
              ● Activo
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

          <div className="mt-4 flex flex-wrap gap-2">
            {summaryChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#DCE3E8] bg-[#F7F9FA] px-3 py-1 text-[11px] font-semibold text-[#1F252B]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
