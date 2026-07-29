import { ScrollProgress } from "@/components/site/scroll-progress"
import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { GatewaysStrip } from "@/components/site/gateways-strip"
import { Problem } from "@/components/site/problem"
import { HowItWorks } from "@/components/site/how-it-works"
import { Features } from "@/components/site/features"
import { Pricing } from "@/components/site/pricing"
import { Cta } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"

function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <GatewaysStrip />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
