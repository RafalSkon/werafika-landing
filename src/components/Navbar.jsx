import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { useSiteContent } from '../hooks/useSiteContent'
import logo from '../assets/logo.png'

export const Navbar = () => {
    const { siteContent } = useSiteContent()
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = siteContent.navbar.navItems;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <Link 
                to="/login" 
                className="absolute top-1 left-2 p-2 text-brand-turquoise/10 hover:text-brand-turquoise/50 transition-all duration-500 z-[100] cursor-pointer" 
                title="Admin"
            >
                <Shield size={14} />
            </Link>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="WeRafika" className="h-10 w-auto rounded-lg" />
                    <div className={`text-2xl font-display font-black tracking-tight ${isScrolled || !isHome ? 'text-brand-navy' : 'text-brand-white'}`}>
                        <span className="text-brand-turquoise">We</span>Rafika
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        item.path.includes('#') ? (
                            <a
                                key={item.label}
                                href={item.path}
                                className={`text-sm font-semibold hover:text-brand-turquoise transition-colors ${isScrolled || !isHome ? 'text-brand-navy' : 'text-brand-white'}`}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`text-sm font-semibold hover:text-brand-turquoise transition-colors ${isScrolled || !isHome ? 'text-brand-navy' : 'text-brand-white'}`}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <a href="#analiza" className="btn-primary py-2 px-6 text-sm">
                        {siteContent.navbar.ctaText}
                    </a>
                </div>
            </div>
        </nav>
    )
}
