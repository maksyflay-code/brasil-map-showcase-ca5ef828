import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { BRAZIL_STATES, MAP_HEIGHT, MAP_WIDTH } from "@/data/brazil-map";
import { SERVED_UFS } from "@/data/served-states";

function MiniMap() {
  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className="mx-auto h-14 w-auto"
      role="img"
      aria-label="Mapa do Brasil com estados atendidos"
    >
      {BRAZIL_STATES.map((s) => (
        <path
          key={s.uf}
          d={s.d}
          className={
            SERVED_UFS.includes(s.uf)
              ? "fill-brand-red stroke-navy-deep"
              : "fill-white/25 stroke-navy-deep"
          }
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}

function Item({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center border-b border-white/10 px-3 py-3 text-center last:border-b-0">
      <Check className="mb-1 h-3 w-3 text-brand-red" strokeWidth={3} />
      {children}
      <p className="font-display text-[0.8rem] font-bold uppercase leading-tight tracking-tight text-primary-foreground">
        {title}
      </p>
      <p className="mt-1 text-[0.6rem] uppercase leading-tight tracking-[0.08em] text-white/55">
        {sub}
      </p>
    </div>
  );
}

export function CredentialsRail() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-[150px] flex-col overflow-hidden border-r-4 border-brand-red bg-navy-deep lg:flex">
      <div className="border-b border-white/10 py-2 text-center text-[0.58rem] uppercase tracking-[0.14em] text-white/50">
        Credenciais
      </div>

      <div className="flex flex-1 flex-col">
        <Item title="10 Anos" sub="Trajetória contínua" />

        <div className="flex flex-1 flex-col items-center justify-center border-b border-white/10 px-3 py-3 text-center">
          <MiniMap />
          <p className="mt-1 text-[0.6rem] uppercase leading-tight tracking-[0.08em] text-white/60">
            Presença em 13 estados
          </p>
          <Link
            to="/atuacao"
            className="mt-2 inline-flex items-center gap-1 border border-white/30 px-2 py-1 text-[0.55rem] uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-brand-red hover:border-brand-red"
          >
            Ver mapa
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <Item title="CREA" sub="Empresa registrada" />
        <Item title="Regularidade" sub="Certidões verificáveis" />
        <div className="flex flex-1 flex-col items-center justify-center px-3 py-3 text-center">
          <Check className="mb-1 h-3 w-3 text-brand-red" strokeWidth={3} />
          <p className="font-display text-[0.8rem] font-bold uppercase text-primary-foreground">
            LGPD
          </p>
          <a
            href="mailto:privacidade@projetaj.com.br"
            className="mt-1 text-[0.55rem] uppercase leading-tight tracking-[0.08em] text-white/55 underline underline-offset-2"
          >
            Canal de privacidade
          </a>
        </div>
      </div>
    </aside>
  );
}
