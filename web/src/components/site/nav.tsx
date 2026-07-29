import { useState } from "react"
import { Menu, X, FileText, Rocket, History, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { GithubIcon } from "@/components/site/github-icon"

const navLinks = [
  { label: "Docs", href: "https://docs.orquestraio.com" },
  { label: "Preços", href: "#pricing" },
  {
    label: "Changelog",
    href: "https://docs.orquestraio.com/changelog.html",
    badge: "Novo",
  },
  {
    label: "GitHub",
    href: "https://github.com/vitinh0z/orquestraio",
    external: true,
  },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-[200] h-14 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1100px] items-center px-6">
        <Logo className="mr-10 shrink-0" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
              {link.badge && (
                <Badge className="ml-0.5 h-4 px-1.5 text-[10px]">
                  {link.badge}
                </Badge>
              )}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild>
            <a href="https://docs.orquestraio.com">Documentação</a>
          </Button>
          <Button asChild>
            <a href="https://docs.orquestraio.com/quickstart.html">
              Começar <ArrowRight />
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            variant="outline"
            size="icon"
            className="relative z-[199] ml-auto md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
          <SheetContent>
            <div className="flex flex-col gap-1 p-5">
              <span className="px-2 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Produto
              </span>
              <a
                href="https://docs.orquestraio.com"
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <FileText className="size-4 text-muted-foreground" />
                Documentação
              </a>
              <a
                href="https://docs.orquestraio.com/quickstart.html"
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <Rocket className="size-4 text-muted-foreground" />
                Primeiros Passos
              </a>
              <a
                href="https://docs.orquestraio.com/changelog.html"
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <History className="size-4 text-muted-foreground" />
                Changelog
              </a>
              <a
                href="https://github.com/vitinh0z/orquestraio"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <GithubIcon className="size-4 text-muted-foreground" />
                GitHub
              </a>

              <div className="my-2 h-px bg-border" />

              <div className="flex flex-col gap-2.5 px-2.5">
                <Button size="lg" className="justify-center" asChild>
                  <a href="https://docs.orquestraio.com/quickstart.html">
                    Começar agora <ArrowRight />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="justify-center"
                  asChild
                >
                  <a href="https://docs.orquestraio.com">Ver documentação</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
