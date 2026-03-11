import React from 'react'
import { motion } from 'framer-motion'
import { Percent, Wallet, Sparkles } from 'lucide-react'

export const WinWin = () => {
    return (
        <section id="model-win-win" className="bg-brand-gray overflow-hidden">
            <div className="section-container relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl text-brand-navy mb-6">
                        Jak to możliwe, że nasza pomoc <span className="text-brand-marine">nic Cię nie kosztuje?</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Nasz model biznesowy opiera się na prostocie i uczciwości. Nie doliczamy marży do Twoich kosztów – my ją odejmujemy od cen rynkowych.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Wallet,
                            title: "Ty nie płacisz nam ani grosza",
                            desc: "Nasze wynagrodzenie pochodzi bezpośrednio z wynegocjowanych upustów u dostawców i ekip."
                        },
                        {
                            icon: Percent,
                            title: "Do 25% taniej niż w detalu",
                            desc: "Dzięki skali naszych zleceń otrzymujemy ceny niedostępne dla klientów indywidualnych."
                        },
                        {
                            icon: Sparkles,
                            title: "Ekspert w cenie standardu",
                            desc: "Płacisz cenę rynkową lub niższą, otrzymując pełną opiekę i weryfikację jakości gratis."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand-turquoise/10 text-brand-turquoise flex items-center justify-center mb-6">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl mb-4 text-brand-navy">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Visual explanation line */}
                <div className="mt-20 p-8 bg-brand-navy rounded-3xl text-brand-white flex flex-col md:row items-center justify-between gap-8 border border-brand-turquoise/20">
                    <div className="flex-1">
                        <h3 className="text-2xl mb-2 italic">Win-Win w praktyce:</h3>
                        <p className="text-brand-white/70">Współpracujemy tylko z tymi, którzy dzielą się zyskiem z oszczędności, a nie z podnoszenia cen.</p>
                    </div>
                    <div className="flex items-center gap-4 text-2xl font-bold">
                        <span className="line-through text-brand-white/40">Cena Detaliczna</span>
                        <ArrowRight className="text-brand-turquoise" />
                        <span className="text-brand-turquoise">Cena WeRafika + Nasz Nadzór</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ArrowRight = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
)
