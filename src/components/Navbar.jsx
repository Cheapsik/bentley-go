import React from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = ({ scrollY, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrollY > 50 ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="text-xl md:text-3xl font-thin tracking-[0.2em] md:tracking-[0.3em] relative">
            <span className="absolute inset-0 blur-sm bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              BENTLEY GO
            </span>
            <span className="relative bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              BENTLEY GO
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {['Start', 'O Samochodzie', 'Galeria', 'Kontakt'].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'about', 'gallery', 'contact'][i])}
                className="relative text-sm tracking-widest hover:text-amber-400 transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="tel:666102648"
              className="px-6 xl:px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            >
              ZADZWOŃ
            </a>
          </div>

          <button
            className="lg:hidden text-amber-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-amber-400/10 bg-black/90">
            {['Start', 'O Samochodzie', 'Galeria', 'Kontakt'].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'about', 'gallery', 'contact'][i])}
                className="block w-full text-left py-3 text-base tracking-wider hover:text-amber-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:666102648"
              className="block text-center py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider"
            >
              ZADZWOŃ
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

