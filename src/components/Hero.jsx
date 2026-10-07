import React from 'react'
import { Phone, ChevronDown, MapPin, Car, Shield } from 'lucide-react'
import heroImage from '@/assets/images/hero.webp'

const services = ['Śluby', 'Przejazdy VIP', 'Biznes', 'Eventy']

const highlights = [
  { icon: Car, label: 'Bentley Flying Spur' },
  { icon: MapPin, label: 'Rzeszów i okolice' },
  { icon: Shield, label: 'Usługa z kierowcą' },
]

const Hero = ({ scrollY, scrollToSection }) => {
  const fade = Math.max(0, 1 - scrollY / 500)

  return (
    <section id="home" className="relative w-full max-w-full overflow-x-clip lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      <div
        className="hidden lg:block absolute top-1/2 right-0 w-[55%] h-[70%] -translate-y-1/2 translate-x-1/4 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pt-32 sm:pb-12 lg:py-32 overflow-x-clip">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-thin leading-[1.08] mb-4 md:mb-6 tracking-tight">
              Luksus, który
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-light">
                jedzie z Tobą
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed mb-5 md:mb-8 max-w-lg">
              Ekskluzywne przejazdy VIP, śluby, przewozy biznesowe i usługi szoferskie na
              najwyższym poziomie.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 text-xs tracking-wider uppercase text-amber-200/80 border border-amber-400/20 rounded-full bg-white/5 backdrop-blur-sm"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:666102648"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold tracking-widest overflow-hidden transform hover:scale-[1.02] transition-all duration-300 text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Phone size={18} />
                  Zadzwoń teraz
                </div>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="group relative w-full sm:w-auto px-8 py-4 border border-amber-400/60 text-amber-400 font-semibold tracking-widest overflow-hidden backdrop-blur-sm bg-white/5 text-sm hover:border-amber-400 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative group-hover:text-black transition-colors duration-300">
                  Zarezerwuj
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-amber-400/10">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <Icon size={14} className="text-amber-400 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-gray-400 text-[10px] sm:text-sm font-light leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="lg:hidden mt-8 w-full flex flex-col items-center gap-1 text-amber-400/70 hover:text-amber-400 transition-colors"
              aria-label="Przewiń w dół"
            >
              <ChevronDown size={24} className="animate-bounce" />
              <span className="text-[10px] tracking-[0.3em] uppercase">Odkryj więcej</span>
            </button>
          </div>

          <div className="hidden lg:block relative lg:pl-4">
            <div
              className="relative"
              style={{
                opacity: Math.max(0.4, fade),
                transform: `translateY(${scrollY * 0.04}px)`,
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-400/20 bg-black/40 shadow-2xl shadow-amber-500/5">
                <img
                  src={heroImage}
                  alt="Bentley Flying Spur"
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-3 border border-amber-400/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 px-5 py-3 rounded-lg backdrop-blur-xl bg-black/60 border border-amber-400/20">
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase mb-0.5">
                  Flota premium
                </p>
                <p className="text-white text-sm font-light tracking-wide">Flying Spur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-amber-400/70 hover:text-amber-400 transition-colors"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={28} className="animate-bounce" />
        <span className="text-[10px] tracking-[0.3em] uppercase">Odkryj więcej</span>
      </button>
    </section>
  )
}

export default Hero
