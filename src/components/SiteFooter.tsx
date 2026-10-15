export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep px-6 py-12 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="label-caps text-white/60">
            © 2026 PROJETAJ Empreendimentos — CNPJ 25.204.592/0001-94
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            Privacidade e LGPD — solicitações de acesso, correção ou exclusão de
            dados pessoais:{" "}
            <a
              className="text-brand-red underline underline-offset-4"
              href="mailto:privacidade@projetaj.com.br"
            >
              privacidade@projetaj.com.br
            </a>
          </p>
        </div>
        <div className="md:text-right">
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
