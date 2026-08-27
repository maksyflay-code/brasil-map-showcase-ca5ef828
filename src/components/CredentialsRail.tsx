import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BRAZIL_STATES, MAP_HEIGHT, MAP_WIDTH } from "@/data/brazil-map";
import { SERVED_UFS } from "@/data/served-states";

function MiniMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className={className ?? "mx-auto h-14 w-auto"}
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

function DesktopItem({
  title,
  sub,
  to,
  hash,
  children,
}: {
  title: string;
  sub: string;
  to: string;
  hash?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className="group flex flex-1 flex-col items-center justify-center border-b border-white/10 px-3 py-3 text-center transition-colors last:border-b-0 hover:bg-white/5"
    >
      <Check className="mb-1 h-3 w-3 text-brand-red" strokeWidth={3} />
      {children}
      <p className="font-display text-[0.8rem] font-bold uppercase leading-tight tracking-tight text-primary-foreground underline decoration-brand-red decoration-2 underline-offset-4 group-hover:decoration-white">
        {title}
      </p>
      <p className="mt-1 text-[0.6rem] uppercase leading-tight tracking-[0.08em] text-white/55">
        {sub}
      </p>
    </Link>
  );
}

function MobileItem({
  title,
  to,
  hash,
  children,
}: {
  title: string;
  to: string;
  hash?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className="group flex flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-center transition-colors hover:bg-white/5"
    >
      {children ? (
        children
      ) : (
        <Check className="h-3 w-3 text-brand-red" strokeWidth={3} />
      )}
      <p className="font-display text-[0.65rem] font-bold uppercase leading-none tracking-tight text-white underline decoration-brand-red decoration-2 underline-offset-2 group-hover:decoration-white">
        {title}
      </p>
    </Link>
  );
}

function DesktopRail() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-[150px] flex-col overflow-hidden border-r-4 border-brand-red bg-navy-deep lg:flex">
      <div className="border-b border-white/10 px-3 py-4 text-center">
        <p className="text-[0.58rem] uppercase tracking-[0.14em] text-white/50">
          Selos
        </p>
      </div>

      <div className="flex flex-1 flex-col">
        <DesktopItem
          to="/"
          hash="quem-somos"
          title="10 Anos"
          sub="Trajetória contínua"
        />

        <DesktopItem to="/atuacao" title="12 Estados" sub="Ver mapa nacional">
          <MiniMap />
        </DesktopItem>

        <DesktopItem
          to="/crea"
          title="CREA"
          sub="Empresa registrada"
        />
        <DesktopItem
          to="/regularidade"
          title="Regularidade"
          sub="Certidões verificáveis"
        />
        <DesktopItem
          to="/lgpd"
          title="LGPD"
          sub="Canal de privacidade"
        />
      </div>
    </aside>
  );
}

function MobileRail() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 flex-col lg:hidden">
      <div className="flex items-center justify-center border-b border-white/10 bg-navy-deep px-3 py-1">
        <p className="text-[0.58rem] uppercase tracking-[0.14em] text-white/50">
          Selos
        </p>
      </div>
      <div className="flex flex-1 items-stretch overflow-x-auto border-b-4 border-brand-red bg-navy-deep">
        <MobileItem to="/" hash="quem-somos" title="10 Anos" />
        <MobileItem to="/atuacao" title="12 Estados">
          <MiniMap className="h-6 w-auto" />
        </MobileItem>
        <MobileItem to="/crea" title="CREA" />
        <MobileItem to="/regularidade" title="Regularidade" />
        <MobileItem to="/lgpd" title="LGPD" />
      </div>
    </nav>
  );
}

export function CredentialsRail() {
  return (
    <>
      <DesktopRail />
      <MobileRail />
    </>
  );
}
