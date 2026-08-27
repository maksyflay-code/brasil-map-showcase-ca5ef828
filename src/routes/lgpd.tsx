import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/lgpd")({
  component: Lgpd,
  head: () => ({
    meta: [
      { title: "LGPD e privacidade | PROJETAJ Empreendimentos" },
      {
        name: "description",
        content:
          "A PROJETAJ trata dados pessoais conforme a Lei 13.709/2018 (LGPD). Solicitações de acesso, correção ou exclusão pelo canal de privacidade.",
      },
      { property: "og:title", content: "LGPD e privacidade | PROJETAJ" },
      {
        property: "og:description",
        content:
          "Compromisso com a proteção de dados pessoais conforme a Lei 13.709/2018.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const POINTS = [
  {
    t: "Conformidade com a LGPD",
    d: "Tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), respeitando os princípios de finalidade, necessidade e transparência.",
  },
  {
    t: "Dados coletados",
    d: "Coletamos apenas os dados necessários ao contato comercial e à execução de contratos: nome, e-mail, telefone e informações fornecidas voluntariamente pelo titular.",
  },
  {
    t: "Direitos do titular",
    d: "Você pode solicitar a qualquer momento a confirmação, o acesso, a correção, a anonimização, a portabilidade ou a exclusão dos seus dados pessoais.",
  },
  {
    t: "Segurança da informação",
    d: "Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida.",
  },
];

function Lgpd() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-10 md:px-16">
        <Link
          to="/"
          className="label-caps inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <p className="label-caps mt-8 text-brand-red">Selos / LGPD</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-navy md:text-6xl">
          Canal de <span className="text-brand-red">privacidade</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Tratamos dados pessoais conforme a Lei 13.709/2018. Solicitações de
          acesso, correção ou exclusão pelo e-mail{" "}
          <a
            href="mailto:privacidade@projetaj.com.br"
            className="text-brand-red underline underline-offset-4"
          >
            privacidade@projetaj.com.br
          </a>
          .
        </p>
      </header>

      <section className="grid md:grid-cols-2">
        {POINTS.map((p) => (
          <article
            key={p.t}
            className="border-b border-border px-6 py-12 md:border-r md:px-16 md:[&:nth-child(2n)]:border-r-0"
          >
            <Check className="h-5 w-5 text-brand-red" strokeWidth={3} />
            <h2 className="mt-5 font-display text-2xl text-navy">{p.t}</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {p.d}
            </p>
          </article>
        ))}
      </section>

      <section className="bg-navy-deep px-6 py-16 md:px-16">
        <p className="label-caps text-brand-red">Encarregado de dados</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
          Para exercer seus direitos como titular de dados ou esclarecer
          dúvidas sobre o tratamento de informações, escreva para{" "}
          <a
            href="mailto:privacidade@projetaj.com.br"
            className="text-brand-red underline underline-offset-4"
          >
            privacidade@projetaj.com.br
          </a>
          . Respondemos às solicitações dentro dos prazos legais.
        </p>
      </section>

      <footer className="border-t border-border bg-navy-deep px-6 py-12 md:px-16">
        <p className="label-caps text-white/60">
          © 2026 PROJETAJ Empreendimentos — CNPJ 25.204.592/0001-94
        </p>
      </footer>
    </div>
  );
}
