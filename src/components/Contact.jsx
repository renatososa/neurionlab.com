import { useState } from "react";
import Button from "./Button";
import SectionLabel from "./SectionLabel";

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
        setForm(initialForm);
        setFeedback("Consulta enviada. El formulario ya esta listo para integrarse con backend o email.");
      } else {
        setFeedback(
          "Formulario listo para integracion. Podes conectarlo luego a un backend, Resend, Formspree o email transaccional."
        );
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setFeedback("No se pudo enviar la consulta. Revisa la integracion del servicio.");
    }
  }

  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="max-w-xl">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#1F252B] sm:text-4xl md:text-5xl">
            Conversemos sobre tu laboratorio, curso o roadmap de producto.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5E6A73] sm:text-lg sm:leading-8">
            Si formas parte de una institución, laboratorio, centro educativo o proyecto vinculado
            a neurotecnología, bioinstrumentación o asistencia tecnológica, esta nueva estructura
            ya permite pedir demos, recursos o colaboraciones sin mezclar necesidades distintas.
          </p>

          <div className="mt-8 rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5E6A73]">
              Integracion preparada
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5E6A73]">
              El componente ya expone un `onSubmit`, genera un payload consistente y usa campos con
              `name`, `autoComplete` y `required` para poder conectarlo luego a backend o servicios
              de email sin rehacer la UI.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#DCE3E8] bg-[#F7F9FA] p-6 shadow-sm sm:p-7"
        >
          <input type="hidden" name="source" defaultValue="neurion-lab-landing" />
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
              <span className="mb-2 block text-sm font-semibold text-[#1F252B]">Institucion</span>
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
                <option>Proyecto protesico</option>
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
              placeholder="Contanos brevemente que necesitas."
            />
          </label>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
              {status === "submitting" ? "Enviando..." : "Enviar consulta"}
            </Button>
            <p className="text-xs leading-5 text-[#5E6A73]">
              Preparado para email transaccional, API propia o servicio de formularios.
            </p>
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
