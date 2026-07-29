import { Reveal } from "@/components/site/reveal"
import { CodeBlock } from "@/components/site/code-block"
import { Eyebrow, SectionHeading, SectionDescription } from "@/components/site/section-header"

const steps = [
  {
    h: "Você faz uma chamada",
    d: "Manda o valor, a moeda e o método. Só isso. Sem escolher gateway, sem configurar SDK, sem tratar cada caso.",
  },
  {
    h: "Orquestraio decide o melhor caminho",
    d: "PIX vai automaticamente pro Mercado Pago. USD vai pro PayPal. Se um cair, o próximo assume — tudo transparente pra você.",
  },
  {
    h: "Você recebe sempre o mesmo formato",
    d: "Independente do gateway. Webhooks unificados, erros padronizados, resposta sempre igual. Seu código não muda nunca mais.",
  },
]

export function HowItWorks() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto grid max-w-[1100px] items-start gap-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Como funciona</Eyebrow>
          <SectionHeading>Simples assim.</SectionHeading>
          <SectionDescription>
            Você integra uma vez. O Orquestraio cuida do resto — escolhe o
            melhor gateway, tenta de novo se falhar, e garante que nada se
            perde.
          </SectionDescription>

          <div className="mt-12 flex flex-col">
            {steps.map((step, i) => (
              <Reveal key={step.h} delay={i * 100}>
                <div
                  className={`grid grid-cols-[40px_1fr] gap-6 py-8 ${i < steps.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="mt-0.5 flex size-10 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06] font-display text-lg font-extrabold text-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <div className="mb-1.5 font-display text-[1.05rem] font-bold text-foreground">
                      {step.h}
                    </div>
                    <div className="max-w-[520px] text-sm leading-[1.72] text-muted-foreground">
                      {step.d}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <CodeBlock />
        </Reveal>
      </div>
    </div>
  )
}
