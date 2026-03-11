import React, { useState, useEffect } from 'react'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src="/src/assets/logo.png" alt="WeRafika" className="h-10 w-auto rounded-lg" />
                    <div className={`text-2xl font-display font-black tracking-tight ${isScrolled ? 'text-brand-navy' : 'text-brand-white'}`}>
                        <span className="text-brand-turquoise">We</span>Rafika
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Model Win-Win', 'Porównanie', 'O nas', 'Analiza'].map((item) => (
                        <a
                            key={item}
                            href={`#${item === 'Analiza' ? 'lead-magnet' : item.toLowerCase().replace(' ', '-')}`}
                            className={`text-sm font-semibold hover:text-brand-turquoise transition-colors ${isScrolled ? 'text-brand-navy' : 'text-brand-white'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#lead-magnet" className="btn-primary py-2 px-6 text-sm">
                        Bezpłatna analiza
                    </a>
                </div>
            </div>
        </nav>
    )
}
