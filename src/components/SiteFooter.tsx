export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep px-6 py-12 md:px-12">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-12">
        <div className="min-w-0">
          <p className="label-caps text-white/60">
            © 2026 PROJETAJ — CNPJ 25.204.592/0001-94
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Privacidade e LGPD:{" "}
            <a
              className="text-brand-red underline underline-offset-4"
              href="mailto:privacidade@projetaj.com.br"
            >
              privacidade@projetaj.com.br
            </a>
          </p>
        </div>
        <div className="min-w-0 md:text-right">
          <p className="label-caps text-white/60">Trabalhe conosco</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Envie seu currículo:{" "}
            <a
              className="text-brand-red underline underline-offset-4"
              href="mailto:rh@projetaj.com.br"
            >
              rh@projetaj.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
