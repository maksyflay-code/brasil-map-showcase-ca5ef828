import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { BRAZIL_STATES, MAP_HEIGHT, MAP_WIDTH } from "@/data/brazil-map";
import { SERVED_UFS } from "@/data/served-states";

function MiniMap() {
  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className="mx-auto h-24 w-auto"
      role="img"
      aria-label="Mapa do Brasil com estados atendidos"
    >
      {BRAZIL_STATES.map((s) => (
        <path
          key={s.uf}
          d={s.d}
          className={
            SERVED_UFS.includes(s.uf)
              ? "fill-navy stroke-background"
              : "fill-border stroke-background"
          }
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}

function Tick() {
  return <Check className="mb-4 h-5 w-5 text-brand-red" strokeWidth={3} />;
}

export function CredentialsRail() {
  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-[300px] flex-col border-r-[5px] border-brand-red bg-navy-deep">
      <div className="label-caps border-b border-white/10 py-6 text-center leading-5 text-white/70">
        Credenciais
        <br />
        Institucionais
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="border-b border-border bg-card px-6 py-8 text-center">
          <Tick />
          <p className="font-display text-4xl leading-none text-brand-red">
            <span className="font-bold">10</span> ANOS
          </p>
          <p className="label-caps mt-4 leading-5 text-navy">
            Trajetória
            <br />
            empresarial
            <br />
            contínua
          </p>
        </div>

        <div className="border-b border-border bg-card px-6 py-8 text-center">
          <MiniMap />
          <p className="label-caps mt-4 leading-5 text-brand-red">
            Presença em 13 estados
          </p>
          <Link
            to="/atuacao"
            className="label-caps mt-4 flex items-center justify-between gap-3 border-2 border-navy px-4 py-3 text-left leading-4 text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            Ver atuação
            <br />
            nacional
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

        <div className="border-b border-border bg-card px-6 py-8 text-center">
          <Tick />
          <p className="font-display text-2xl font-bold tracking-wide text-brand-red">
            CREA
          </p>
          <p className="label-caps mt-3 leading-5 text-navy">
            Empresa registrada
          </p>
          <p className="label-caps mt-2 text-[0.6rem] leading-4 text-muted-foreground">
            Responsabilidade técnica
          </p>
        </div>

        <div className="border-b border-border bg-card px-6 py-8 text-center">
          <Tick />
          <p className="font-display text-xl font-bold leading-6 text-brand-red">
            REGULARIDADE
            <br />
            DOCUMENTAL
          </p>
          <p className="label-caps mt-3 leading-5 text-navy">
            Certidões
            <br />
            verificáveis
          </p>
          <p className="label-caps mt-2 text-[0.6rem] leading-4 text-muted-foreground">
            Emissão e validade consultáveis
          </p>
        </div>

        <div className="bg-card px-6 py-8 text-center">
          <Tick />
          <p className="font-display text-2xl font-bold text-brand-red underline underline-offset-4">
            LGPD
          </p>
          <a
            href="mailto:privacidade@projetaj.com.br"
            className="label-caps mt-3 block leading-5 text-navy underline underline-offset-4"
          >
            Canal oficial de privacidade
          </a>
          <p className="label-caps mt-2 text-[0.6rem] leading-4 text-muted-foreground">
            Encarregada e contato publicados
          </p>
        </div>
      </div>
    </aside>
  );
}