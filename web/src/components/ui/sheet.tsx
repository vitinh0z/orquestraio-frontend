import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

function Sheet(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="sheet" {...props} />
}

function SheetPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-x-0 top-14 bottom-0 z-[197] bg-black/0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        data-slot="sheet-content"
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-[198] overflow-y-auto bg-background/97 backdrop-blur-xl transition ease-[cubic-bezier(.4,0,.2,1)] data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:duration-200 data-[state=open]:duration-200",
          className
        )}
        {...props}
      >
        <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
}

export { Sheet, SheetContent }
