import React from 'react'
import { useSiteContent } from '../hooks/useSiteContent'

export const AboutUs = () => {
    const { siteContent } = useSiteContent()
    const { about } = siteContent

    return (
        <section id="o-nas" className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square bg-brand-gray rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent"></div>
                        <div className="p-12 h-full flex flex-col justify-end">
                            <div className="text-8xl font-black text-brand-turquoise absolute top-4 left-4 opacity-10">{about.experienceYears}</div>
                            <h3 className="text-3xl text-brand-navy mb-4">{about.experienceTitle}</h3>
                            <p className="text-brand-navy/60 font-semibold italic text-xl">"{about.quote}"</p>
                        </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-8 -right-8 bg-brand-turquoise text-brand-navy p-8 rounded-2xl shadow-xl border-4 border-white">
                        <div className="text-4xl font-black">{about.statsNumber}</div>
                        <div className="text-sm font-bold uppercase tracking-widest">{about.statsLabel}</div>
                    </div>
                </div>

                <div>
                    <span className="text-brand-marine font-bold uppercase tracking-widest text-sm mb-4 block">{about.missionBadge}</span>
                    <h2 className="text-4xl md:text-5xl text-brand-navy mb-8">{about.mainTitle}<span className="text-brand-turquoise">{about.mainTitleSpan}</span></h2>
                    <div className="space-y-6 text-gray-600 text-lg">
                        <p>{about.description1}</p>
                        <p>{about.description2}</p>
                        <p className="font-bold text-brand-navy">
                            {about.focusText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
