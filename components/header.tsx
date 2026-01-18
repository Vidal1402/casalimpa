"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0090c5] shadow-md" : "bg-[#0090c5]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-white hover:text-[#85e0ff] transition-colors font-semibold text-sm"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("pacotes")}
              className="text-white hover:text-[#85e0ff] transition-colors font-semibold text-sm"
            >
              Pacotes
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-white hover:text-[#85e0ff] transition-colors font-semibold text-sm"
            >
              Depoimentos
            </button>
          </nav>

          {/* Logo - Center */}
          <div className="flex items-center flex-1 lg:flex-initial justify-start lg:justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/casa-limpa-2-removebg-preview.png"
                alt="Casa Limpa"
                width={240}
                height={80}
                className="h-14 md:h-16 w-auto"
                priority
              />
            </button>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-[#85e0ff] transition-colors font-semibold text-sm"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-[#85e0ff] transition-colors font-semibold text-sm"
            >
              Contato
            </button>
            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#85e0ff] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#85e0ff] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#85e0ff] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left py-2 text-white hover:text-[#85e0ff] transition-colors font-semibold"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("pacotes")}
                className="text-left py-2 text-white hover:text-[#85e0ff] transition-colors font-semibold"
              >
                Pacotes
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left py-2 text-white hover:text-[#85e0ff] transition-colors font-semibold"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-white hover:text-[#85e0ff] transition-colors font-semibold"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left py-2 text-white hover:text-[#85e0ff] transition-colors font-semibold"
              >
                Contato
              </button>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#85e0ff] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#85e0ff] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
