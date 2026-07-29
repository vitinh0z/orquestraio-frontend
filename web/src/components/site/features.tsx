import { ShieldCheck, CreditCard, Layers } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { Eyebrow, SectionHeading, SectionDescription } from "@/components/site/section-header"

const features = [
  {
    icon: ShieldCheck,
    h: "Se um gateway cair, o outro assume",
    d: "Stripe fora do ar às 2h? O Mercado Pago entra automaticamente. Suas vendas continuam. Você dorme tranquilo.",
  },
  {
    icon: CreditCard,
    h: "Nunca cobra o cliente duas vezes",
    d: "Timeout, botão clicado duas vezes, retry de rede. Não importa — o Orquestraio garante que a cobrança acontece uma única vez.",
  },
  {
    icon: Layers,
    h: "PIX vai pro lugar certo. USD também.",
    d: "O gateway certo é escolhido automaticamente pela moeda e método. Você não precisa pensar nisso — e não deveria.",
  },
]

export function Features() {
  return (
    <div className="border-y border-border bg-white/[0.015] px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-2 text-center">
          <Eyebrow>Por que o Orquestraio</Eyebrow>
          <SectionHeading className="mx-auto max-w-[480px]">
            O que você ganha de verdade
          </SectionHeading>
          <SectionDescription className="mx-auto text-center">
            Sem jargão. Só o que importa pra quem decide.
          </SectionDescription>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.h} delay={i * 100}>
              <div className="h-full rounded-xl border border-border bg-card p-8 transition-colors hover:border-white/20 hover:bg-white/[0.03]">
                <div className="mb-5 flex size-10 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06]">
                  <f.icon className="size-[18px] text-white" strokeWidth={1.8} />
                </div>
                <div className="mb-1.5 font-display text-base font-bold text-foreground">
                  {f.h}
                </div>
                <div className="text-sm leading-[1.72] text-muted-foreground">
                  {f.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
