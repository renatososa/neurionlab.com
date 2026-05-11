import { useState } from "react";
import Button from "./Button";
import SectionLabel from "./SectionLabel";

const formspreeEndpoint = "https://formspree.io/f/xvzldgba";

const initialForm = {
  name: "",
  institution: "",
  email: "",
  reason: "Información sobre Neurion Signal",
  message: "",
};

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitToFormspree(payload) {
    const body = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      body.append(key, value);
    });

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      body,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("FORM_SUBMISSION_FAILED");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const payload = {
      ...form,
      source: "neurion-lab-landing",
      product: "Neurion Signal",
      intendedUse: "educacion-investigacion-prototipado",
    };

    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        await submitToFormspree(payload);
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Consulta enviada correctamente. Te responderemos a la brevedad.");
    } catch (error) {
      setStatus("error");
      setFeedback("No se pudo enviar la consulta. Intentá nuevamente en unos minutos.");
    }
  }

  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="max-w-xl">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Conversemos sobre tu laboratorio, curso o proyecto.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Si formás parte de una institución, laboratorio, centro educativo o proyecto vinculado
            a neurotecnología, bioinstrumentación o asistencia tecnológica, podemos conversar sobre
            demostraciones, implementación y posibles líneas de trabajo.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 shadow-sm sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Nombre</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"
                placeholder="Tu nombre"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Institución</span>
              <input
                name="institution"
                value={form.institution}
                onChange={handleChange}
                autoComplete="organization"
                className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"
                placeholder="Universidad, laboratorio, centro"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"
                placeholder="contacto@ejemplo.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Motivo</span>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"
              >
                <option>Información sobre Neurion Signal</option>
                <option>Demo institucional</option>
                <option>Recursos educativos</option>
                <option>Colaboración de investigación</option>
                <option>Proyecto protésico</option>
                <option>Desarrollo a medida</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Mensaje</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="min-h-36 w-full rounded-2xl border border-[#DCE3E8] bg-white px-4 py-3 outline-none transition focus:border-[#38B26D]"
              placeholder="Contanos brevemente qué necesitás."
            />
          </label>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
              {status === "submitting" ? "Enviando..." : "Enviar consulta"}
            </Button>
          </div>

          {feedback ? (
            <p
              role="status"
              className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                status === "error"
                  ? "bg-[#FDEBEC] text-[#9A2E34]"
                  : "bg-[#EAF7EF] text-[#1B6D41]"
              }`}
            >
              {feedback}
            </p>
          ) : null}

          <p className="mt-4 text-xs leading-5 text-[#5E6A73]">
            Uso previsto: educación, investigación y prototipado. No destinado a diagnóstico
            clínico salvo indicación y certificación específica.
          </p>
        </form>
      </div>
    </section>
  );
}
