import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"

export function Cta() {
  return (
    <div className="px-6 py-24 text-center">
      <Reveal>
        <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-2xl border border-white/15 bg-card px-8 py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,.06) 0%, transparent 65%)",
            }}
          />
          <h2 className="relative z-10 mb-3 font-display text-[1.7rem] font-extrabold leading-[1.18] tracking-tight text-foreground sm:text-[2.4rem]">
            Integre hoje.
            <br />
            Escale amanhã.
          </h2>
          <p className="relative z-10 mb-8 text-[0.95rem] leading-[1.7] text-muted-foreground">
            Comece no Starter grátis. Suba pro Cloud quando quiser parar de
            gerenciar infra. Sem lock-in — é open source.
          </p>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
            <Button size="lg" asChild>
              <a href="https://docs.orquestraio.com/quickstart.html">
                Começar grátis <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#pricing">Ver planos</a>
            </Button>
          </div>
          <p className="relative z-10 mt-5 font-mono text-[11px] text-white/30">
            Open Source · MIT ·{" "}
            <a
              href="https://github.com/vitinh0z/orquestraio"
              className="text-white/30 hover:text-white/60"
            >
              github.com/vitinh0z/orquestraio
            </a>
          </p>
        </div>
      </Reveal>
    </div>
  )
}
