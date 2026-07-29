import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/site/github-icon"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/site/reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1100px] items-center gap-20 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Reveal>
            <Badge className="w-fit gap-2 py-1.5 font-mono text-xs">
              <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
              Open Source · Cloud · v0.4
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[3.8rem]">
              Pare de reescrever
              <br />
              <span className="text-white/60">
                integração de pagamento.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-[400px] text-base leading-[1.75] text-muted-foreground">
              Um endpoint. Stripe, Mercado Pago e PayPal. Se um gateway cair,
              o outro assume — sem você precisar fazer nada.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-2.5">
              <Button size="lg" asChild>
                <a href="https://docs.orquestraio.com/quickstart.html">
                  Começar grátis <ArrowRight />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/vitinh0z/orquestraio"
                  target="_blank"
                  rel="noopener"
                >
                  <GithubIcon />
                  Self-host
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <p className="font-mono text-xs text-white/30">
              Grátis para sempre no plano Starter.{" "}
              <a href="#pricing" className="underline hover:text-white/60">
                Ver todos os planos →
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <Card className="gap-0 overflow-hidden py-0 shadow-[0_32px_72px_rgba(0,0,0,.65)]">
            <div className="flex items-center gap-2 border-b border-border bg-white/[0.03] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-white/25" />
                <div className="size-2.5 rounded-full bg-white/25" />
                <div className="size-2.5 rounded-full bg-white/25" />
              </div>
              <div className="flex-1 text-center font-mono text-xs text-white/30">
                orquestraio — pagamento
              </div>
            </div>
            <div className="px-5 py-5 font-mono text-[13px] leading-[1.95]">
              <p>
                <span className="text-white">POST</span>{" "}
                <span className="text-zinc-300">/v1/payments</span>
              </p>
              <p className="italic text-zinc-600">
                // uma chamada. qualquer gateway.
              </p>
              <br />
              <p>
                <span className="text-zinc-400">"amount"</span>:{" "}
                <span className="text-zinc-200">150.00</span>,
              </p>
              <p>
                <span className="text-zinc-400">"currency"</span>:{" "}
                <span className="text-zinc-300">"BRL"</span>,
              </p>
              <p>
                <span className="text-zinc-400">"type"</span>:{" "}
                <span className="text-zinc-300">"pix"</span>
              </p>

              <div className="my-3.5 h-px bg-border" />

              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="rounded-md border border-white/15 bg-white/[0.06] px-2 py-1 font-medium text-zinc-200">
                  Sua app
                </span>
                <span className="text-zinc-600">→</span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-medium text-zinc-300">
                  Orquestraio
                </span>
                <span className="text-zinc-600">→</span>
                <span className="rounded-md border border-white/15 bg-white/[0.06] px-2 py-1 font-medium text-zinc-100">
                  Mercado Pago
                </span>
              </div>

              <div className="mt-3.5 animate-in fade-in rounded-lg border border-white/15 bg-white/[0.04] p-3.5 duration-700">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                    <span className="size-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                    APROVADO
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    201 · 118ms
                  </span>
                </div>
                <div className="text-xs leading-[1.85] text-zinc-400">
                  <p>
                    <span className="text-zinc-300">"status"</span>:{" "}
                    <span className="text-white">"APPROVED"</span>,
                  </p>
                  <p>
                    <span className="text-zinc-300">"amount"</span>:{" "}
                    <span className="text-zinc-200">150.00</span>,
                  </p>
                  <p>
                    <span className="text-zinc-300">"gateway"</span>:{" "}
                    <span className="text-zinc-200">"MERCADOPAGO"</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
