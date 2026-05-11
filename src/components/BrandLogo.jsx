import logo from "../assets/logo.png";
import logoV2 from "../../logo_V2.svg";

export default function BrandLogo({ className = "", showTagline = false, variant = "default" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {variant === "v2" ? (
        <div
          role="img"
          aria-label="Neurion LAB"
          className="h-12 w-[11.2rem] md:h-14 md:w-[13rem]"
          style={{
            backgroundColor: "#38B26D",
            WebkitMaskImage: `url(${logoV2})`,
            maskImage: `url(${logoV2})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      ) : (
        <div
          role="img"
          aria-label="Neurion LAB"
          className="h-9 w-[13.5rem] md:h-10 md:w-[15.5rem]"
          style={{
            backgroundColor: "#38B26D",
            WebkitMaskImage: `url(${logo})`,
            maskImage: `url(${logo})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "auto 180%",
            maskSize: "auto 180%",
          }}
        />
      )}
      {showTagline ? (
        <p className="pl-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#5E6A73]">
          Tecnología biomédica accesible
        </p>
      ) : null}
    </div>
  );
}
