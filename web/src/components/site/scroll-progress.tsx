import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[999] h-px bg-white"
      style={{ width: `${progress}%` }}
    />
  )
}
