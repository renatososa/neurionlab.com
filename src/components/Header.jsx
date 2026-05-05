import { useState } from "react";
import BrandLogo from "./BrandLogo";
import Button from "./Button";
import Icon from "./Icon";
import navItems from "../data/navItems";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuId = "neurion-main-menu";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DCE3E8]/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu((value) => (value === item.label ? null : item.label))}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#5E6A73] transition hover:bg-white hover:text-[#1F252B]"
                  aria-expanded={activeMenu === item.label}
                >
                  {item.label}
                  <Icon name="arrow" className="h-3.5 w-3.5 rotate-90" />
                </button>

                <div
                  className={`absolute left-0 top-full mt-3 w-[320px] rounded-[1.8rem] border border-[#DCE3E8] bg-white p-3 shadow-2xl shadow-[#1F252B]/8 transition ${
                    activeMenu === item.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block rounded-[1.2rem] px-4 py-3 transition hover:bg-[#F7F9FA]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#1F252B]">{child.label}</span>
                        {child.badge ? (
                          <span className="rounded-full bg-[#1F252B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                            {child.badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#5E6A73]">{child.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#5E6A73] transition hover:bg-white hover:text-[#1F252B]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto">Solicitar información</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#DCE3E8] bg-white text-[#1F252B] lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      <div
        id={menuId}
        className={`overflow-hidden border-t border-[#DCE3E8] bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[760px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5">
          <div className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-[1.6rem] border border-[#DCE3E8] bg-[#F7F9FA] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5E6A73]">
                    {item.label}
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-2xl bg-white px-4 py-3 transition hover:border-[#DCE3E8]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-[#1F252B]">{child.label}</span>
                          {child.badge ? (
                            <span className="rounded-full bg-[#1F252B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                              {child.badge}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-[#5E6A73]">{child.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-transparent px-2 py-1 text-base font-semibold text-[#1F252B] transition hover:border-[#DCE3E8] hover:bg-[#F7F9FA]"
                >
                  {item.label}
                </a>
              )
            )}

            <Button href="#contacto" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Solicitar información
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
