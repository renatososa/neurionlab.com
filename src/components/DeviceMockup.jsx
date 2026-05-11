import guiSlide from "../img/slide_gui.png";
import signalSlide from "../img/slide_neurion_signal.png";

export default function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-[#38B26D]/15 blur-3xl" />
      <div className="absolute right-0 top-20 h-40 w-40 rounded-full bg-[#30C7D9]/18 blur-3xl" />

      <div className="relative space-y-5">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-white p-4 shadow-[0_32px_90px_-42px_rgba(31,37,43,0.35)] sm:p-5">
          <img
            src={signalSlide}
            alt="Slide de Neurion Signal con el dispositivo al centro y las señales biomédicas destacadas alrededor."
            className="block w-full rounded-[2rem] object-cover object-center"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#DCE3E8] bg-white p-3 shadow-[0_24px_60px_-38px_rgba(31,37,43,0.28)] sm:p-4">
          <img
            src={guiSlide}
            alt="Slide de la interfaz de Neurion con visualización de señales, paneles de control y elementos de adquisición."
            className="block w-full rounded-[1.5rem] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
