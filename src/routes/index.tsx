import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ServicePhotos } from "@/components/ServicePhotos";
import { CONTACT_POSTAL_CODE } from "@/data/contact";
import logo from "@/assets/projetaj-logo.webp";

import heroObras from "@/assets/operacao.jpg";
import pavimentacao from "@/assets/pavimentacao.jpg";
import caminhao from "@/assets/caminhao.jpg";
import escavadeiraServico from "@/assets/escavadeira-h.png";
import equipeInterna from "@/assets/equipe-interno.jpeg";
import equipeObra from "@/assets/equipe-obra.jpeg";
import escavadeira from "@/assets/escavadeira.jpg";
import compactador from "@/assets/compactador2.png";
import transporte from "@/assets/transporte.jpg";
import frotaAutomoveis from "@/assets/frota.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PROJETAJ Empreendimentos | Estrutura para grandes entregas" },
      {
        name: "description",
        content:
          "Obras e engenharia, locação de equipamentos e terceirização de mão de obra para órgãos públicos e empresas privadas. Presença em 12 estados.",
      },
      {
        property: "og:title",
        content: "PROJETAJ Empreendimentos | Estrutura para grandes entregas",
      },
      {
        property: "og:description",
        content:
          "Planejamos, mobilizamos e executamos: obras, frota e equipes para contratos públicos e privados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { id: "quem-somos", label: "Quem somos" },
  { id: "capacidades", label: "Capacidades" },
  { id: "metodo", label: "Como entregamos" },
  { id: "contato", label: "Contato" },
];

const PILLARS = [
  { n: "01", t: "Planejamento objetivo" },
  { n: "02", t: "Mobilização ágil" },
  { n: "03", t: "Gestão responsável" },
  { n: "04", t: "Presença em campo" },
];

const SERVICES = [
  {
    n: "01",
    title: "Obras e engenharia",
    lead: "Do terreno à entrega técnica.",
    text: "Executamos obras de infraestrutura, edificações, reformas e instalações especiais com planejamento, controle de campo e responsabilidade.",
    items: [
      "Drenagem",
      "Terraplenagem",
      "Pavimentação",
      "Reformas completas",
      "Elétrica complexa",
      "Telecom e climatização",
    ],
    images: [
      { src: pavimentacao, alt: "Obras e engenharia" },
      { src: heroObras, alt: "Operação de terraplenagem da PROJETAJ" },
    ],
  },
  {
    n: "02",
    title: "Locação de equipamentos",
    lead: "A frota certa para cada operação.",
    text: "Carros, utilitários, caminhões e máquinas da linha amarela para contratos públicos e operações privadas.",
    items: [
      "Retroescavadeiras",
      "Pás-carregadeiras",
      "Motoniveladoras",
      "Rolos compactadores",
      "Caminhões",
      "Carros e utilitários",
    ],
    images: [
      { src: caminhao, alt: "Locação de equipamentos" },
      { src: escavadeiraServico.url, alt: "Escavadeira da PROJETAJ em campo para locação" },
    ],
  },
  {
    n: "03",
    title: "Terceirização de mão de obra",
    lead: "Pessoas mobilizadas sob medida.",
    text: "Fornecemos e gerenciamos equipes conforme a necessidade de cada contrato público ou cliente privado, do apoio cotidiano às funções especializadas.",
    items: [
      "Zeladoria",
      "Limpeza e conservação",
      "Apoio operacional",
      "Apoio administrativo",
      "Técnicos especializados",
      "Supervisão",
    ],
    images: [
      { src: equipeInterna.url, alt: "Equipe da PROJETAJ conferindo o projeto em ambiente interno" },
      { src: equipeObra.url, alt: "Equipe da PROJETAJ conferindo o projeto no canteiro de obras" },
    ],
  },
];

const CREDENTIALS = [
  {
    id: "crea",
    label: "CREA",
    title: "Empresa registrada no CREA",
    text: "Registro ativo com responsável técnico habilitado, permitindo a execução e a ART de obras de infraestrutura, edificações e instalações especiais.",
  },
  {
    id: "regularidade",
    label: "Regularidade",
    title: "Certidões verificáveis",
    text: "Mantemos regularidade fiscal, trabalhista e previdenciária (federal, estadual, municipal, FGTS e CNDT). As certidões são enviadas e podem ser conferidas nos portais oficiais a qualquer momento.",
  },
  {
    id: "lgpd",
    label: "LGPD",
    title: "Canal de privacidade",
    text: "Tratamos dados pessoais conforme a Lei 13.709/2018. Solicitações de acesso, correção ou exclusão pelo e-mail privacidade@projetaj.com.br.",
  },
];

const STEPS = [
  { n: "01", t: "Entender", d: "Escopo e necessidade" },
  { n: "02", t: "Planejar", d: "Recursos e cronograma" },
  { n: "03", t: "Mobilizar", d: "Frota, equipes e campo" },
  { n: "04", t: "Acompanhar", d: "Gestão e desempenho" },
];

function Index() {
  return <IndexPage />;
}

const LOCACOES = [
  {
    src: escavadeira.url,
    title: "Escavadeira em operação",
    tag: "Linha amarela",
  },
  {
    src: compactador.url,
    title: "Compactador de resíduos",
    tag: "Equipamentos especiais",
  },
  {
    src: transporte.url,
    title: "Logística de máquinas pesadas",
    tag: "Logística própria",
  },
  {
    src: frotaAutomoveis.url,
    title: "Locação de automóveis",
    tag: "Frota de veículos",
  },
];

function IndexPage() {
  return (
    <div className="bg-background">
      <header className="sticky top-0 z-30 flex items-center justify-between gap-6 border-b border-border bg-background/95 px-6 py-4 backdrop-blur md:px-12">
        <img
          src={logo.url}
          alt="PROJETAJ Empreendimentos — 10 anos"
          className="h-10 w-auto"
        />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="label-caps text-muted-foreground transition-colors hover:text-brand-red"
            >
              {n.label}
            </a>
          ))}
          <Link to="/atuacao" className="label-caps text-brand-red">
            Atuação nacional
          </Link>
        </nav>
      </header>

      <section id="quem-somos" className="relative scroll-mt-[136px] border-b border-border lg:scroll-mt-20">
        <img
          src={heroObras}
          alt="Equipe da PROJETAJ em operação de terraplenagem"
          width={1600}
          height={1008}
          className="h-[62vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-16">
          <p className="label-caps text-primary-foreground/70">Quem somos / <span className="font-bold text-brand-red">2016—2026</span></p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-primary-foreground md:text-7xl">
            Planejamos.
            <br />
            Mobilizamos.
            <span className="text-brand-red"> Executamos.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            A PROJETAJ Empreendimentos nasceu em 2016 para entregar capacidade
            real onde ela é mais necessária. Atendemos órgãos públicos e
            empresas privadas com soluções independentes ou integradas.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="grid md:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="border-b border-border px-6 py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8"
            >
              <span className="font-display text-3xl text-brand-red">{p.n}</span>
              <p className="mt-4 text-lg text-navy">{p.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="rule-red w-16" />
        <h2 className="mt-8 max-w-4xl text-3xl leading-tight text-navy md:text-5xl">
          Uma empresa. Três capacidades: executar, disponibilizar e mobilizar.
        </h2>
      </section>

      <section id="capacidades">
        {SERVICES.map((s, i) => (
          <article
            key={s.n}
            className={`grid border-b border-border lg:grid-cols-2 lg:items-start ${
              i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
            }`}
          >
            <div className="px-6 py-16 md:px-12">
              <p className="label-caps text-brand-red">
                {s.n} — {s.title}
              </p>
              <h3 className="mt-5 text-3xl leading-tight text-navy md:text-4xl">
                {s.lead}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.text}
              </p>
              <ul className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="border-b border-border py-3 text-sm text-navy"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <ServicePhotos title={s.title} images={s.images} />
          </article>
        ))}
      </section>

      <section id="metodo" className="bg-navy-deep px-6 py-20 md:px-12">
        <p className="label-caps text-white/60">Como entregamos</p>
        <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-primary-foreground md:text-5xl">
          Uma operação conectada de ponta a ponta.
        </h2>
        <div className="mt-14 grid gap-px md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-2 border-brand-red pt-5">
              <span className="label-caps text-brand-red">{s.n}</span>
              <p className="mt-3 font-display text-2xl text-primary-foreground">
                {s.t}
              </p>
              <p className="mt-2 text-sm text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-b border-border lg:grid-cols-2">
        <div className="px-6 py-16 md:px-12">
          <p className="label-caps text-brand-red">Atuação</p>
          <h2 className="mt-5 text-3xl leading-tight text-navy md:text-4xl">
            Presença em 12 estados brasileiros.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Mobilização com logística própria e equipes locais. Veja o mapa
            completo da nossa atuação.
          </p>
          <Link
            to="/atuacao"
            className="label-caps mt-8 inline-flex items-center gap-3 border-2 border-navy px-6 py-4 text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            Ver mapa nacional
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="border-t border-border px-6 py-16 md:px-12 lg:border-l lg:border-t-0">
          <p className="label-caps text-muted-foreground">Cobertura</p>
          <h3 className="mt-5 text-2xl text-navy">
            Equipes locais, logística própria.
          </h3>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Mobilizamos frota e pessoas a partir da Bahia para contratos em todo
            o país, com acompanhamento em campo do início ao encerramento.
          </p>
        </div>
      </section>

      <section id="locacoes" className="border-b border-border px-6 py-20 md:px-12">
        <p className="label-caps text-brand-red">Locações</p>
        <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-navy md:text-5xl">
          Equipamentos prontos para o seu contrato.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Da linha amarela aos veículos utilitários, disponibilizamos máquinas e
          frota com operador, manutenção e logística para órgãos públicos e
          empresas privadas.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {LOCACOES.map((l) => (
            <figure key={l.title} className="group relative m-0 overflow-hidden">
              <img
                src={l.src}
                alt={l.title}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent p-4 pt-16">
                <span className="label-caps flex items-center gap-2 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                  <span className="h-[2px] w-5 bg-brand-red" />
                  {l.tag}
                </span>
                <figcaption className="mt-1 font-display text-base font-bold text-primary-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                  {l.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="credenciais"
        aria-labelledby="credenciais-title"
        className="border-b border-border bg-bone px-6 py-12 md:px-12 md:py-20"
      >
        <div className="border-l-2 border-brand-red pl-5 md:pl-8">
          <p className="label-caps text-brand-red">Credenciais</p>
          <h2 id="credenciais-title" className="mt-3 max-w-3xl text-3xl leading-tight text-navy md:text-5xl">
            O que sustenta cada contrato:
          </h2>
          <div className="mt-6 grid md:mt-8 md:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}` as "/crea" | "/regularidade" | "/lgpd"}
              className="group scroll-mt-24 py-6 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="label-caps text-brand-red">{c.label}</span>
              <p className="mt-3 font-display text-2xl text-navy underline decoration-brand-red/0 decoration-2 underline-offset-4 transition-colors group-hover:decoration-brand-red">
                {c.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
              <span className="label-caps mt-4 inline-flex items-center gap-2 text-brand-red">
                Ver detalhes
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-20 md:px-12">
        <p className="label-caps text-brand-red">Próximo contrato</p>
        <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-navy md:text-5xl">
          Qual capacidade sua operação precisa agora?
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Conte à nossa equipe o escopo, o local e a necessidade. Nós ajudamos a
          construir a solução adequada.
        </p>

        <dl className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <dt className="label-caps text-muted-foreground">
              Telefone e WhatsApp
            </dt>
            <dd className="mt-2 text-navy">
              <a
                href="https://wa.me/5574999176066?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20PROJETAJ."
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-red decoration-2 underline-offset-4"
              >
                (74) 99917-6066
              </a>
            </dd>
          </div>
          <div>
            <dt className="label-caps text-muted-foreground">E-mail</dt>
            <dd className="mt-2 text-navy">
              <a href="mailto:contato@projetaj.com.br">
                contato@projetaj.com.br
              </a>
            </dd>
          </div>
          <div>
            <dt className="label-caps text-muted-foreground">Endereço</dt>
            <dd className="mt-2 text-navy">
              Av. ACM, 471, 2º andar — Centro
              <br />
              Capim Grosso/BA — CEP {CONTACT_POSTAL_CODE}
            </dd>
          </div>
        </dl>
      </section>

      <footer className="border-t border-border bg-navy-deep px-6 py-12 md:px-12">
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
      </footer>
    </div>
  );
}
