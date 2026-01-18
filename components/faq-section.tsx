"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Como funciona a contratação dos serviços?",
      answer:
        "É muito simples! Entre em contato pelo WhatsApp (21 97975-0896), informe o serviço desejado e agende uma visita. Nossa equipe vai até sua casa para avaliar e iniciar o trabalho no horário combinado.",
    },
    {
      question: "Os profissionais são confiáveis e verificados?",
      answer:
        "Sim! Todos os nossos profissionais passam por verificação de antecedentes, treinamento e avaliação de competências. Trabalhamos apenas com profissionais experientes e de confiança.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos dinheiro, PIX, cartões de crédito e débito. Para pacotes mensais, oferecemos pagamento facilitado no início de cada mês.",
    },
    {
      question: "Posso cancelar ou reagendar um serviço?",
      answer:
        "Sim! Você pode cancelar ou reagendar com até 24 horas de antecedência sem nenhum custo adicional. Basta entrar em contato pelo WhatsApp.",
    },
    {
      question: "Os produtos de limpeza são fornecidos pela Casa Limpa?",
      answer:
        "Sim! Todos os produtos de limpeza e equipamentos necessários são fornecidos por nós. Utilizamos produtos de qualidade e seguros para sua família e animais de estimação.",
    },
    {
      question: "Qual a área de cobertura dos serviços?",
      answer:
        "Atendemos toda a cidade do Rio de Janeiro e região metropolitana, incluindo Zona Sul, Zona Norte, Zona Oeste e Barra da Tijuca.",
    },
    {
      question: "Como funciona o pacote mensal?",
      answer:
        "No pacote mensal, você escolhe a frequência (1x, 2x ou 4x por semana) e garantimos limpeza regular da sua casa. É o plano mais econômico e garante sua casa sempre limpa e organizada.",
    },
    {
      question: "Preciso estar em casa durante o serviço?",
      answer:
        "Não é obrigatório, mas recomendamos que esteja presente no primeiro serviço para passar as orientações. Depois, muitos clientes optam por deixar uma chave reserva para maior comodidade.",
    },
  ]

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-to-br from-[#022f52] to-[#0090c5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-[#85e0ff] max-w-2xl mx-auto">Tire suas dúvidas sobre nossos serviços</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#022f52] pr-4 text-balance">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#0090c5] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5521979750896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0090c5] px-8 py-3 rounded-full font-semibold hover:bg-[#85e0ff] hover:text-[#022f52] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
