import React from 'react'
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react'
import { useSiteContent } from '../hooks/useSiteContent'

export const Footer = () => {
    const { siteContent } = useSiteContent()
    const { footer } = siteContent

    return (
        <footer className="bg-brand-navy text-brand-white pt-20 pb-10 border-t border-white/5">
            <div className="section-container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="text-3xl font-display font-black mb-6">
                            <span className="text-brand-turquoise">We</span>Rafika
                        </div>
                        <p className="text-brand-white/50 max-w-sm mb-8">
                            {footer.description}
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-turquoise hover:text-brand-navy transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg mb-6">Szybkie linki</h4>
                        <ul className="space-y-4 text-brand-white/40">
                            <li><a href="#hero" className="hover:text-brand-turquoise">Strona główna</a></li>
                            <li><a href="#model-win-win" className="hover:text-brand-turquoise">Model Win-Win</a></li>
                            <li><a href="#porównanie" className="hover:text-brand-turquoise">Dlaczego my?</a></li>
                            <li><a href="#o-nas" className="hover:text-brand-turquoise">O nas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg mb-6">Kontakt</h4>
                        <ul className="space-y-4 text-brand-white/40">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-brand-turquoise" />
                                <span>{footer.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-brand-turquoise" />
                                <span>{footer.email}</span>
                            </li>
                            <li className="mt-4">
                                {footer.locations}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-brand-white/20 uppercase tracking-widest font-bold">
                    <p>{footer.copyright}</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-turquoise transition-colors">Polityka prywatności</a>
                        <a href="#" className="hover:text-brand-turquoise transition-colors">Regulamin</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
