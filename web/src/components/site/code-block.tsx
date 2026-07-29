import { useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const snippets = {
  curl: {
    label: "curl",
    text: `curl -X POST https://api.orquestraio.com/v1/payments \\
  -H "x-api-key: Oz_live_..." \\
  -d '{
    "amount": 150.00,
    "currency": "BRL",
    "type": "pix",
    "customer": { "email": "cliente@mail.com" }
  }'

// 201 — funciona. sempre.
{
  "status": "APPROVED",
  "amount": 150.00,
  "gateway": "MERCADOPAGO"
}`,
  },
  node: {
    label: "Node",
    text: `// Node 18+ — sem SDK extra
const res = await fetch('https://api.orquestraio.com/v1/payments', {
  method: 'POST',
  headers: { 'x-api-key': 'Oz_live_...' },
  body: JSON.stringify({
    amount: 150.00,
    currency: 'BRL',
    type: 'pix',
    customer: { email: 'cliente@mail.com' }
  })
});

const { status, gateway } = await res.json();
// status: "APPROVED" — independente do gateway`,
  },
  python: {
    label: "Python",
    text: `# sem SDK extra
import requests

res = requests.post(
  'https://api.orquestraio.com/v1/payments',
  headers={'x-api-key': 'Oz_live_...'},
  json={
    'amount': 150.00,
    'currency': 'BRL',
    'type': 'pix',
    'customer': {'email': 'cliente@mail.com'}
  }
).json()

# res['status'] == 'APPROVED' — sempre o mesmo formato`,
  },
} as const

type SnippetKey = keyof typeof snippets

export function CodeBlock() {
  const [active, setActive] = useState<SnippetKey>("curl")
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  function copy() {
    navigator.clipboard.writeText(snippets[active].text).then(() => {
      setCopied(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="mt-14 overflow-hidden rounded-xl border border-white/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,.5)]">
      <Tabs value={active} onValueChange={(v) => setActive(v as SnippetKey)}>
        <div className="flex items-center bg-white/[0.03]">
          <TabsList>
            {(Object.keys(snippets) as SnippetKey[]).map((key) => (
              <TabsTrigger key={key} value={key}>
                {snippets[key].label}
              </TabsTrigger>
            ))}
          </TabsList>
          <button
            onClick={copy}
            className={cn(
              "ml-auto mr-3 flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-white/40 transition-colors hover:border-white/25 hover:text-white/70",
              copied && "text-white"
            )}
          >
            {copied ? <Check className="size-2.5" /> : <Copy className="size-2.5" />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
        <div className="overflow-x-auto">
          {(Object.keys(snippets) as SnippetKey[]).map((key) => (
            <TabsContent key={key} value={key} className="p-6">
              <pre className="font-mono text-[13px] leading-[1.9] text-zinc-400">
                {snippets[key].text}
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
