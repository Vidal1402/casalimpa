"use client"

import { Button } from "@/components/ui/button"
import { Phone, Sparkles } from "lucide-react"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5521979750896&text=Olá! Gostaria de solicitar um orçamento para serviços de faxina.",
      "_blank",
    )
  }

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#85e0ff]/10 via-white to-[#0090c5]/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#85e0ff]/20 text-[#022f52] text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[#0090c5]" />
            Serviços Profissionais no Rio de Janeiro
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#022f52] mb-6 leading-tight text-balance animate-fade-in-up">
            Faxina Profissional e Outros Serviços Domésticos
          </h1>

          <p className="text-lg md:text-xl text-[#022f52]/80 mb-8 md:mb-10 leading-relaxed text-pretty animate-fade-in-up">
            Seu lar limpo e organizado com profissionais qualificados e confiáveis. Atendimento rápido, preços justos e
            garantia de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#0090c5] hover:bg-[#022f52] text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("pacotes")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              size="lg"
              variant="outline"
              className="border-2 border-[#0090c5] text-[#0090c5] hover:bg-[#0090c5] hover:text-white text-lg px-8 py-6 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Pacotes
            </Button>
          </div>

          <p className="mt-8 text-[#022f52]/70 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">{"(21) 97975-0896"}</span>
          </p>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#85e0ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#0090c5]/10 rounded-full blur-3xl" />
    </section>
  )
}
