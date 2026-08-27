import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { BRAZIL_STATES, MAP_HEIGHT, MAP_WIDTH } from "@/data/brazil-map";
import { SERVED_UFS } from "@/data/served-states";

export const Route = createFileRoute("/atuacao")({
  component: Atuacao,
  head: () => ({
    meta: [
      { title: "Atuação nacional | PROJETAJ Empreendimentos" },
      {
        name: "description",
        content:
          "Mapa da atuação da PROJETAJ: 12 estados atendidos com obras e engenharia, locação de equipamentos e terceirização de mão de obra.",
      },
      { property: "og:title", content: "Atuação nacional | PROJETAJ" },
      {
        property: "og:description",
        content:
          "Conheça os 12 estados onde a PROJETAJ mobiliza frota, equipes e engenharia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Atuacao() {
  const [active, setActive] = useState<string>("BA");
  const activeState = BRAZIL_STATES.find((s) => s.uf === active);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-10 md:px-16">
        <Link
          to="/"
          className="label-caps inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <p className="label-caps mt-8 text-brand-red">Atuação nacional</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-navy md:text-6xl">
          Presença em <span className="text-brand-red">12 estados</span>{" "}
          brasileiros.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Mobilizamos frota, equipes e engenharia para contratos públicos e
          privados. Selecione um estado no mapa para ver a capacidade disponível.
        </p>
      </header>

      <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
        <div className="border-b border-border p-6 md:p-12 lg:border-b-0 lg:border-r">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="mx-auto h-auto w-full max-w-2xl"
            role="img"
            aria-label="Mapa do Brasil com os 12 estados atendidos pela PROJETAJ"
          >
            {BRAZIL_STATES.map((s) => {
              const served = SERVED_UFS.includes(s.uf);
              return (
                <path
                  key={s.uf}
                  d={s.d}
                  onMouseEnter={() => served && setActive(s.uf)}
                  onClick={() => served && setActive(s.uf)}
                  className={[
                    "stroke-background transition-colors",
                    served ? "cursor-pointer" : "",
                    served
                      ? s.uf === "BA"
                        ? "fill-brand-red"
                        : "fill-brand-blue"
                      : "fill-border",
                  ].join(" ")}
                  strokeWidth={2}
                >
                  <title>{s.name}</title>
                </path>
              );
            })}
          </svg>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <span className="label-caps flex items-center gap-2 text-brand-blue">
              <span className="inline-block h-3 w-3 bg-brand-blue" /> Atendemos
            </span>
            <span className="label-caps flex items-center gap-2 text-brand-red">
              <span className="inline-block h-3 w-3 bg-brand-red" /> Sede — Bahia
            </span>
            <span className="label-caps flex items-center gap-2 text-muted-foreground">
              <span className="inline-block h-3 w-3 bg-border" /> Sob consulta
            </span>
          </div>
        </div>

        <div className="bg-navy-deep p-6 text-primary-foreground md:p-12">
          <p className="label-caps text-white/60">Estado selecionado</p>
          <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
            {activeState?.name}
          </h2>
          <div className="rule-red mt-6 w-16" />
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            A PROJETAJ atua neste estado com obras, locação de equipamentos e
            terceirização de mão de obra, conforme a demanda de cada contrato.
          </p>

          <p className="label-caps mt-12 text-white/60">Todos os estados</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4">
            {BRAZIL_STATES.filter((s) => SERVED_UFS.includes(s.uf)).map((s) => (
              <li key={s.uf}>
                <button
                  type="button"
                  onClick={() => setActive(s.uf)}
                  className={[
                    "w-full border-b border-white/10 py-3 text-left text-sm transition-colors",
                    s.uf === active
                      ? "text-brand-red"
                      : "text-white/70 hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <span className="label-caps mr-2">{s.uf}</span>
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-12 md:px-16">
        <p className="label-caps text-muted-foreground">
          © 2026 PROJETAJ Empreendimentos — CNPJ 25.204.592/0001-94
        </p>
      </footer>
    </div>
  );
}