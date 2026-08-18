import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroObras from "@/assets/operacao.jpg";
import frota from "@/assets/frota.jpg";
import terraplenagem from "@/assets/terraplenagem.jpg";
import pavimentacao from "@/assets/pavimentacao.jpg";
import caminhao from "@/assets/caminhao.jpg";
import equipes from "@/assets/equipes-terceirizacao.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PROJETAJ Empreendimentos | Estrutura para grandes entregas" },
      {
        name: "description",
        content:
          "Obras e engenharia, locação de equipamentos e terceirização de mão de obra para órgãos públicos e empresas privadas. Presença em 13 estados.",
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
    img: pavimentacao,
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
    img: caminhao,
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
    img: equipes,
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
  return (
    <div className="bg-background">
      <header className="sticky top-0 z-30 flex items-center justify-between gap-6 border-b border-border bg-background/95 px-6 py-4 backdrop-blur md:px-12">
        <span className="font-display text-lg font-bold tracking-[0.2em] text-navy">
          PROJETAJ
        </span>
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

      <section className="relative border-b border-border">
        <img
          src={heroObras}
          alt="Equipe da PROJETAJ em operação de terraplenagem"
          width={1600}
          height={1008}
          className="h-[62vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-16">
          <p className="label-caps text-white/70">Quem somos / 2016—2026</p>
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

      <section id="quem-somos" className="border-b border-border">
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
            className={`grid border-b border-border lg:grid-cols-2 ${
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
            <figure className="m-0">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </figure>
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
            Presença em 13 estados brasileiros.
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
          <p className="label-caps text-muted-foreground">Registros da operação</p>
          <h3 className="mt-5 text-2xl text-navy">Trabalho que fala por si.</h3>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              src={frota}
              alt="Retroescavadeira da frota em operação"
              loading="lazy"
              width={1200}
              height={900}
              className="h-40 w-full object-cover"
            />
            <img
              src={terraplenagem}
              alt="Motoniveladora em serviço de terraplenagem"
              loading="lazy"
              width={1200}
              height={900}
              className="h-40 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="credenciais"
        className="border-b border-border px-6 py-20 md:px-12"
      >
        <p className="label-caps text-brand-red">Credenciais</p>
        <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-navy md:text-5xl">
          O que sustenta cada contrato.
        </h2>
        <div className="mt-12 grid gap-px md:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <div
              key={c.id}
              id={c.id}
              className="scroll-mt-24 border-t-2 border-brand-red pt-5 md:pr-8"
            >
              <span className="label-caps text-brand-red">{c.label}</span>
              <p className="mt-3 font-display text-2xl text-navy">{c.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
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
              <a href="tel:+5574999176066">(74) 99917-6066</a>
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
              Capim Grosso/BA — CEP 44.695-000
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
