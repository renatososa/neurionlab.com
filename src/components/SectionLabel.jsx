export default function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm ${
        dark
          ? "border-white/10 bg-white/10 text-white/70"
          : "border-[#DCE3E8] bg-white/90 text-[#5E6A73]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-[#38B26D]" />
      {children}
    </div>
  );
}
