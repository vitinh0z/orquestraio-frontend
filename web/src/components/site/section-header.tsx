import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
      {children}
    </div>
  )
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "mb-3 font-display text-[1.8rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.4rem]",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function SectionDescription({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "max-w-[500px] text-[0.95rem] leading-[1.75] text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}
