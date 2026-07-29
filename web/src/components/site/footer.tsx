import { Logo } from "@/components/site/logo"
import { GithubIcon } from "@/components/site/github-icon"

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Processar Pagamento", href: "https://docs.orquestraio.com/processar-pagamento.html" },
      { label: "Roteamento", href: "https://docs.orquestraio.com/smartrouter.html" },
      { label: "Webhooks", href: "https://docs.orquestraio.com/webhooks.html" },
      { label: "Sandbox", href: "https://docs.orquestraio.com/sandbox.html" },
    ],
  },
  {
    title: "Desenvolvedores",
    links: [
      { label: "Documentação", href: "https://docs.orquestraio.com" },
      { label: "Primeiros Passos", href: "https://docs.orquestraio.com/quickstart.html" },
      { label: "Autenticação", href: "https://docs.orquestraio.com/autenticacao.html" },
      { label: "Erros e Status", href: "https://docs.orquestraio.com/erros-status.html" },
    ],
  },
  {
    title: "Gateways",
    links: [
      { label: "Stripe", href: "https://docs.orquestraio.com" },
      { label: "Mercado Pago", href: "https://docs.orquestraio.com" },
      { label: "PayPal", href: "https://docs.orquestraio.com" },
      { label: "AbacatePay", href: "https://docs.orquestraio.com" },
    ],
  },
  {
    title: "Projeto",
    links: [
      { label: "GitHub", href: "https://github.com/vitinh0z/orquestraio", external: true },
      { label: "Changelog", href: "https://docs.orquestraio.com/changelog.html" },
      { label: "Segurança", href: "https://docs.orquestraio.com/seguranca.html" },
      { label: "MIT License", href: "https://github.com/vitinh0z/orquestraio/blob/main/LICENSE", external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 gap-10 border-b border-border pb-11 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-3.5 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="max-w-[230px] text-[0.82rem] leading-[1.65] text-white/30">
              Um endpoint para todos os seus gateways de pagamento.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/vitinh0z/orquestraio"
                target="_blank"
                rel="noopener"
                className="flex size-[30px] items-center justify-center rounded-md border border-border text-white/30 transition-colors hover:border-white/20 hover:text-white/70"
              >
                <GithubIcon className="size-[13px]" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-display text-xs font-semibold text-foreground">
                {col.title}
              </div>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener" : undefined}
                    className="text-[0.82rem] text-white/30 transition-colors hover:text-white/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <span className="font-mono text-[11px] text-white/30">
            © 2026 Orquestraio ·{" "}
            <a href="https://github.com/vitinh0z" className="text-white/30 hover:text-white/60">
              @vitinh0z
            </a>{" "}
            · MIT License
          </span>
        </div>
      </div>
    </footer>
  )
}
