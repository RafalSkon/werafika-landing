import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, Droplets, PenTool, BadgeCheck } from 'lucide-react'

export const Partners = () => {
    const steps = [
        { icon: HardHat, title: "Stan Surowy", desc: "Beton, mury, dachy – fundament Twojego bezpieczeństwa." },
        { icon: Droplets, title: "Instalacje", desc: "Elektryka, hydraulika, HVAC. Nowoczesne systemy inteligentne." },
        { icon: PenTool, title: "Wykończenia Premium", desc: "Malarze, stolarze, fliziarze. Jakość, która cieszy oko latami." },
    ]

    return (
        <section id="partnerzy" className="bg-brand-navy py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl mb-6">Nasza sieć <span className="text-brand-turquoise">zweryfikowanych</span> profesjonalistów</h2>
                        <p className="text-brand-white/70 text-lg">Każda firma w naszej sieci przeszła rygorystyczny proces "WeRafikacji" pod kątem rzetelności, terminowości i kultury pracy.</p>
                    </div>
                    <div className="bg-brand-turquoise/10 border border-brand-turquoise/30 p-6 rounded-2xl flex items-center gap-4">
                        <BadgeCheck className="text-brand-turquoise" size={40} />
                        <div className="text-brand-white">
                            <div className="text-xl font-bold">Standard WeRafikacji</div>
                            <p className="text-xs text-brand-white/60 uppercase tracking-widest">Gwarancja jakości</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-white/5 text-brand-turquoise flex items-center justify-center mb-8 group-hover:bg-brand-turquoise group-hover:text-brand-navy transition-all duration-300">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-2xl text-brand-white mb-4">{step.title}</h3>
                            <p className="text-brand-white/60 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-brand-white/40 mb-8 uppercase tracking-[0.2em] text-sm font-semibold">Zaufali nam liderzy rynku:</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Logos placeholder/placeholders */}
                        <div className="text-3xl font-display font-black text-brand-white">CONSTRUCTO</div>
                        <div className="text-3xl font-display font-black text-brand-white">BUILDER+</div>
                        <div className="text-3xl font-display font-black text-brand-white">PREMIUM_HOME</div>
                        <div className="text-3xl font-display font-black text-brand-white">ECO_INSTAL</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
