import { motion } from 'framer-motion'
import { Shield, TrendingDown, ClipboardCheck, ArrowRight } from 'lucide-react'

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/src/assets/hero-bg.png"
                    alt="Premium Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-90"></div>
            </div>

            <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-brand-turquoise/20 text-brand-turquoise text-sm font-bold tracking-wider uppercase mb-6 border border-brand-turquoise/30">
                        Profesjonalny Nadzór Remontowy
                    </span>
                    <h1 className="text-5xl md:text-7xl text-brand-white leading-tight mb-6">
                        Remont, który <span className="text-brand-turquoise italic">spłaca się sam.</span>
                    </h1>
                    <p className="text-xl text-brand-white/80 mb-10 leading-relaxed max-w-xl">
                        Twoje <span className="text-brand-turquoise font-bold">0 zł</span> za profesjonalny nadzór. Wykorzystaj nasze 15-letnie doświadczenie i hurtowe rabaty. My weryfikujemy ekipy i negocjujemy ceny, Ty zyskujesz święty spokój.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#lead-magnet" className="btn-primary flex items-center justify-center gap-2">
                            Bezpłatna analiza kosztorysu <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex justify-end"
                >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-sm">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { icon: Shield, title: 'Zweryfikowane ekipy', desc: 'Tylko rzetelni wykonawcy' },
                                { icon: TrendingDown, title: 'Hurtowe rabaty', desc: 'Ceny niższe o 10-25%' },
                                { icon: ClipboardCheck, title: 'Stały kosztorys', desc: 'Brak ukrytych kosztów' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="p-2 rounded-lg bg-brand-turquoise/20 text-brand-turquoise">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-brand-white text-lg">{item.title}</h4>
                                        <p className="text-brand-white/60 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
                <span className="text-brand-white/40 text-xs uppercase tracking-widest">Scrolluj w dół</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-brand-turquoise to-transparent"></div>
            </div>
        </section>
    )
}
