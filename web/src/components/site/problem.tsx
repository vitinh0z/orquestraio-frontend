import { Reveal } from "@/components/site/reveal"
import {
  Eyebrow,
  SectionHeading,
  SectionDescription,
} from "@/components/site/section-header"

const problems = [
  {
    n: "3×",
    h: "mais código sem o Orquestraio",
    d: "Stripe, Mercado Pago e PayPal cada um com sua própria lógica, seu próprio tratamento de erro, seu próprio formato de webhook.",
  },
  {
    n: "1 sprint",
    h: "perdida por nova integração",
    d: "Adicionar um gateway novo hoje significa parar feature novo. Com Orquestraio, é uma linha de configuração.",
  },
  {
    n: "2h da manhã",
    h: "quando o gateway cai em produção",
    d: "Sem fallback automático, uma queda de gateway significa vendas paradas até alguém acordar e trocar manualmente.",
  },
]

export function Problem() {
  return (
    <div className="border-y border-border bg-white/[0.015] px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Eyebrow>O problema</Eyebrow>
        <SectionHeading>Sua equipe já perdeu dias nisso.</SectionHeading>
        <SectionDescription>
          Cada gateway tem SDK diferente, formato de erro diferente, webhook
          diferente. Cada nova integração é uma sprint perdida.
        </SectionDescription>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-border md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.h} delay={i * 100}>
              <div
                className={`h-full bg-card p-8 ${i > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""}`}
              >
                <div className="mb-2.5 bg-gradient-to-br from-white to-white/50 bg-clip-text font-display text-4xl font-extrabold leading-none tracking-tight text-transparent">
                  {p.n}
                </div>
                <div className="mb-1.5 font-display text-base font-semibold text-foreground">
                  {p.h}
                </div>
                <div className="text-sm leading-[1.7] text-muted-foreground">
                  {p.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
