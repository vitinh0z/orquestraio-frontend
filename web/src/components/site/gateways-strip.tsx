const gateways = ["Stripe", "Mercado Pago", "PayPal", "AbacatePay"]

export function GatewaysStrip() {
  return (
    <div className="border-y border-border px-6 py-8">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3">
        {gateways.map((name, i) => (
          <div key={name} className="contents">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground">
              <span className="size-1.5 rounded-full bg-white/40" />
              {name}
            </div>
            {i < gateways.length - 1 && (
              <span className="hidden text-xs text-white/20 sm:inline">
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
