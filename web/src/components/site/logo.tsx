import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth={2.5}
        strokeLinecap="round"
        className="size-3.5"
      >
        <path d="M9 3v14M9 3H5M9 3h4M15 3v14M15 3h4" />
      </svg>
    </div>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center gap-2 font-display text-sm font-bold text-foreground",
        className
      )}
    >
      <LogoMark />
      Orquestraio
    </a>
  )
}
