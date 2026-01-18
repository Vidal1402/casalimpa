"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Clock, DollarSign, Award } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Profissionais Qualificados",
    description: "Equipe treinada e experiente para garantir a qualidade dos serviços.",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta imediata e agendamento flexível para sua comodidade.",
  },
  {
    icon: DollarSign,
    title: "Preços Justos",
    description: "Valores transparentes e competitivos sem taxas ocultas ou surpresas.",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Comprometimento com excelência e satisfação total do cliente.",
  },
]

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#022f52] mb-4 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Por que Escolher a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Casa Limpa</span>
            ?
          </h2>
          <p
            className={`text-lg text-[#022f52]/70 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Conheça as vantagens que tornam nossos serviços a melhor escolha para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <benefit.icon
                  className="w-16 h-16 text-[#0090c5] group-hover:text-[#85e0ff] transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-bold text-[#022f52] mb-2">{benefit.title}</h3>
              <p className="text-[#022f52]/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
