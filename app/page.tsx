import { Header } from "@/src/components/header"
import { Hero } from "@/src/components/hero"
import { Features } from "@/src/components/features"
import { ApiExample } from "@/src/components/api-example"
import { Pricing } from "@/src/components/pricing"
import { Testimonials } from "@/src/components/testimonials"
import { Footer } from "@/src/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ApiExample />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
