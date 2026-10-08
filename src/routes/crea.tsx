import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/crea")({
  component: Crea,
  head: () => ({
    meta: [
      { title: "Registro no CREA | PROJETAJ Empreendimentos" },
      {
        name: "description",
        content:
          "A PROJETAJ é empresa registrada no CREA, com responsável técnico habilitado para execução e ART de obras de infraestrutura, edificações e instalações especiais.",
      },
      { property: "og:title", content: "Registro no CREA | PROJETAJ" },
      {
        property: "og:description",
        content:
          "Empresa registrada no CREA com responsável técnico habilitado para obras e serviços de engenharia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const ITEMS = [
  {
    t: "Registro ativo",
    d: "A PROJETAJ Empreendimentos mantém registro ativo no Conselho Regional de Engenharia e Agronomia, habilitando a empresa à prestação de serviços de engenharia para contratos públicos e privados.",
  },
  {
    t: "Responsável técnico habilitado",
    d: "Toda obra ou serviço conta com engenheiro responsável técnico, garantindo a conformidade normativa e a segurança das execuções.",
  },
  {
    t: "ART de obras e serviços",
    d: "Emitimos Anotação de Responsabilidade Técnica (ART) para infraestrutura, edificações, reformas e instalações especiais, com rastreabilidade completa.",
  },
  {
    t: "Verificação pública",
    d: "O registro pode ser consultado a qualquer momento nos portais oficiais do sistema CONFEA/CREA, bastando informar o CNPJ 25.204.592/0001-94.",
  },
];

function Crea() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-10 md:px-16">
        <Link
          to="/"
          className="label-caps inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <p className="label-caps mt-8 text-brand-red">Selos / CREA</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-navy md:text-6xl">
          Empresa <span className="text-brand-red">registrada no CREA</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-justify text-base leading-relaxed text-muted-foreground">
          Registro ativo com responsável técnico habilitado, permitindo a
          execução e a ART de obras de infraestrutura, edificações e
          instalações especiais.
        </p>
      </header>

      <section className="grid md:grid-cols-2">
        {ITEMS.map((item) => (
          <article
            key={item.t}
            className="min-w-0 border-b border-border px-6 py-8 md:border-r md:px-10 md:py-10 md:[&:nth-child(2n)]:border-r-0"
          >
            <Check className="h-5 w-5 text-brand-red" strokeWidth={3} />
            <h2 className="mt-5 font-display text-2xl text-navy">{item.t}</h2>
            <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">
              {item.d}
            </p>
          </article>
        ))}
      </section>

      <footer className="border-t border-border bg-navy-deep px-6 py-12 md:px-16">
        <p className="label-caps text-white/60">
          © 2026 PROJETAJ Empreendimentos — CNPJ 25.204.592/0001-94
        </p>
      </footer>
    </div>
  );
}
