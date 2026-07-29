import type { ReactNode } from "react"
import { Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, SectionHeading, SectionDescription } from "@/components/site/section-header"
import { cn } from "@/lib/utils"

type Feature = { text: string; dim?: boolean; tag?: string }

const plans: {
  name: string
  price: ReactNode
  desc: string
  cta: { label: string; href: string; variant?: "outline" | "default" }
  features: Feature[]
  featured?: boolean
}[] = [
  {
    name: "Starter",
    price: <span className="font-display text-[2.4rem] font-extrabold tracking-tight text-foreground">Grátis</span>,
    desc: "Self-host. Open source. Para projetos pessoais, testes e primeiras integrações.",
    cta: { label: "Ver no GitHub →", href: "https://github.com/vitinh0z/orquestraio", variant: "outline" },
    features: [
      { text: "Todos os gateways incluídos" },
      { text: "Roteamento automático" },
      { text: "Fallback entre gateways" },
      { text: "Webhooks unificados" },
      { text: "MIT License — sem restrições" },
      { text: "Você gerencia a infra", dim: true },
      { text: "Suporte via comunidade", dim: true },
    ],
  },
  {
    name: "Pro",
    price: (
      <span className="flex items-end gap-1.5">
        <span className="mb-1 font-display text-lg font-semibold text-muted-foreground">R$</span>
        <span className="font-display text-[2.4rem] font-extrabold leading-none tracking-tight text-foreground">299</span>
        <span className="mb-1 text-sm text-white/40">/mês</span>
      </span>
    ),
    desc: "Cloud gerenciado. Sem servidor pra configurar, sem Redis pra manter. Só usar.",
    cta: { label: "Começar grátis por 14 dias →", href: "https://docs.orquestraio.com/quickstart.html" },
    featured: true,
    features: [
      { text: "Tudo do Starter" },
      { text: "Cloud gerenciado — zero infra" },
      { text: "Até 50.000 transações/mês" },
      { text: "Dashboard de pagamentos", tag: "Em breve" },
      { text: "Logs em tempo real" },
      { text: "Suporte por email — 24h" },
      { text: "SLA 99.9%" },
    ],
  },
  {
    name: "Enterprise",
    price: <span className="font-display text-[1.8rem] font-extrabold tracking-tight text-foreground">Sob consulta</span>,
    desc: "Para times que precisam de volume alto, suporte dedicado e contratos personalizados.",
    cta: { label: "Falar com a gente →", href: "mailto:contato@orquestraio.com", variant: "outline" },
    features: [
      { text: "Tudo do Pro" },
      { text: "Transações ilimitadas" },
      { text: "Deploy dedicado (VPC)" },
      { text: "Gateways customizados" },
      { text: "Suporte com SLA garantido" },
      { text: "Onboarding guiado" },
      { text: "Contrato e NDA" },
    ],
  },
]

export function Pricing() {
  return (
    <div id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-2 text-center">
          <Eyebrow>Preços</Eyebrow>
          <SectionHeading className="mx-auto max-w-[480px]">
            Comece de graça. Escale quando precisar.
          </SectionHeading>
          <SectionDescription className="mx-auto text-center">
            Open source para sempre. Cloud gerenciado quando você não quiser
            cuidar de infra.
          </SectionDescription>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={cn(
                  "relative flex h-full flex-col bg-card p-9 transition-colors hover:bg-white/[0.03]",
                  i > 0 && "border-t border-border md:border-t-0 md:border-l",
                  plan.featured && "border-x border-white/20 bg-white/[0.03] hover:bg-white/[0.03]"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-md bg-white px-3 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-black">
                    Mais popular
                  </span>
                )}
                <div className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {plan.name}
                </div>
                <div className="mb-2">{plan.price}</div>
                <div className="mb-7 min-h-[42px] text-sm leading-[1.65] text-muted-foreground">
                  {plan.desc}
                </div>
                <Button
                  variant={plan.cta.variant ?? "default"}
                  className="mb-7 w-full justify-center"
                  asChild
                >
                  <a href={plan.cta.href}>{plan.cta.label}</a>
                </Button>
                <div className="mb-6 h-px bg-border" />
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-2 text-sm leading-[1.5] text-muted-foreground"
                    >
                      {f.dim ? (
                        <Minus className="mt-0.5 size-3.5 shrink-0 text-white/25" />
                      ) : (
                        <Check className="mt-0.5 size-3.5 shrink-0 text-white" />
                      )}
                      <span className={f.dim ? "text-white/30" : ""}>{f.text}</span>
                      {f.tag && (
                        <Badge variant="soft" className="ml-1 h-4 px-1.5 text-[10px]">
                          {f.tag}
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center font-mono text-xs text-white/30">
          Acima de 50k transações no Pro?{" "}
          <a
            href="mailto:contato@orquestraio.com"
            className="text-white/50 hover:text-white/80"
          >
            Fale com a gente sobre Enterprise.
          </a>
        </p>
      </div>
    </div>
  )
}
