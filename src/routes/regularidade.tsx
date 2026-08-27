import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/regularidade")({
  component: Regularidade,
  head: () => ({
    meta: [
      { title: "Regularidade e certidões | PROJETAJ Empreendimentos" },
      {
        name: "description",
        content:
          "A PROJETAJ mantém regularidade fiscal, trabalhista e previdenciária — federal, estadual, municipal, FGTS e CNDT — com certidões verificáveis nos portais oficiais.",
      },
      { property: "og:title", content: "Regularidade e certidões | PROJETAJ" },
      {
        property: "og:description",
        content:
          "Certidões fiscais, trabalhistas e previdenciárias sempre atualizadas e verificáveis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const CERTIFICATES = [
  {
    t: "CND Federal (Receita/PGFN)",
    d: "Certidão negativa de débitos federais e da dívida ativa da União, emitida em conjunto pela Receita Federal e pela Procuradoria-Geral da Fazenda Nacional.",
  },
  {
    t: "FGTS (CRF)",
    d: "Certificado de Regularidade do FGTS emitido pela Caixa Econômica Federal, comprovando o recolhimento em dia dos valores devidos aos colaboradores.",
  },
  {
    t: "CNDT (Justiça do Trabalho)",
    d: "Certidão negativa de débitos trabalhistas emitida pelo Tribunal Superior do Trabalho, essencial para contratações públicas e privadas.",
  },
  {
    t: "Estadual e municipal",
    d: "Regularidade perante as fazendas estaduais e municipais dos locais de operação, incluindo inscrições estaduais e alvarás de funcionamento.",
  },
];

function Regularidade() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-10 md:px-16">
        <Link
          to="/"
          className="label-caps inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <p className="label-caps mt-8 text-brand-red">Selos / Regularidade</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-navy md:text-6xl">
          Certidões <span className="text-brand-red">verificáveis</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Mantemos regularidade fiscal, trabalhista e previdenciária (federal,
          estadual, municipal, FGTS e CNDT). As certidões são enviadas em cada
          contratação e podem ser conferidas nos portais oficiais a qualquer
          momento.
        </p>
      </header>

      <section className="grid md:grid-cols-2">
        {CERTIFICATES.map((c) => (
          <article
            key={c.t}
            className="border-b border-border px-6 py-12 md:border-r md:px-16 md:[&:nth-child(2n)]:border-r-0"
          >
            <Check className="h-5 w-5 text-brand-red" strokeWidth={3} />
            <h2 className="mt-5 font-display text-2xl text-navy">{c.t}</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {c.d}
            </p>
          </article>
        ))}
      </section>

      <section className="bg-navy-deep px-6 py-16 md:px-16">
        <p className="label-caps text-brand-red">Transparência</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
          Para solicitar as certidões atualizadas, fale com nossa equipe pelo
          e-mail{" "}
          <a
            href="mailto:contato@projetaj.com.br"
            className="text-brand-red underline underline-offset-4"
          >
            contato@projetaj.com.br
          </a>{" "}
          ou pelo WhatsApp{" "}
          <a
            href="https://wa.me/5574999176066?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20as%20certid%C3%B5es%20da%20PROJETAJ."
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red underline underline-offset-4"
          >
            (74) 99917-6066
          </a>
          .
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
