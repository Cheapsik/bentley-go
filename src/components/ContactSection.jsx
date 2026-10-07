import React from 'react'

const items = [
  { label: 'Telefon', lines: ['666 102 648'], href: 'tel:666102648' },
  {
    label: 'Email',
    lines: ['przemekharley69@', 'gmail.com'],
    href: 'mailto:przemekharley69@gmail.com',
  },
  { label: 'Adres', lines: ['Rzeszów', 'Polska'] },
  { label: 'Godziny', lines: ['Pn–Pt  9–20', 'Sb–Nd  10–18'] },
]

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14 text-center md:mb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-amber-400">Kontakt</p>
          <h2 className="text-4xl font-thin tracking-tight sm:text-5xl md:text-6xl">
            Zarezerwuj swoją <span className="font-light text-amber-200">jazdę</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const inner = (
              <>
                <span className="text-[10px] uppercase tracking-[0.34em] text-amber-400/70">
                  {item.label}
                </span>
                <span className="mt-4 block text-center text-[15px] font-light leading-relaxed text-white">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </>
            )

            const className = [
              'flex min-h-40 flex-col items-center justify-center px-4 py-8 text-center',
              'border-white/10',
              index > 0 ? 'border-t sm:border-t-0' : '',
              index % 2 === 0 ? 'sm:border-r' : '',
              index < 2 ? 'sm:border-b lg:border-b-0' : '',
              index < items.length - 1 ? 'lg:border-r' : 'lg:border-r-0',
              item.href ? 'transition-colors duration-300 hover:text-amber-200' : '',
            ].join(' ')

            if (!item.href) {
              return (
                <div key={item.label} className={className}>
                  {inner}
                </div>
              )
            }

            return (
              <a key={item.label} href={item.href} className={className}>
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
