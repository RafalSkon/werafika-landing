import React from 'react'

export const AboutUs = () => {
    return (
        <section id="o-nas" className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square bg-brand-gray rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent"></div>
                        <div className="p-12 h-full flex flex-col justify-end">
                            <div className="text-8xl font-black text-brand-turquoise absolute top-4 left-4 opacity-10">15L</div>
                            <h3 className="text-3xl text-brand-navy mb-4">15 lat na placu budowy.</h3>
                            <p className="text-brand-navy/60 font-semibold italic text-xl">"Widzieliśmy już wszystko – od genialnych wizji po największe błędy wykonawcze."</p>
                        </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-8 -right-8 bg-brand-turquoise text-brand-navy p-8 rounded-2xl shadow-xl border-4 border-white">
                        <div className="text-4xl font-black">200+</div>
                        <div className="text-sm font-bold uppercase tracking-widest">Projektów rocznie</div>
                    </div>
                </div>

                <div>
                    <span className="text-brand-marine font-bold uppercase tracking-widest text-sm mb-4 block">Nasza misja</span>
                    <h2 className="text-4xl md:text-5xl text-brand-navy mb-8">Ekspercka wiedza, która odwraca <span className="text-brand-turquoise">układ sił.</span></h2>
                    <div className="space-y-6 text-gray-600 text-lg">
                        <p>
                            Przez lata obserwowaliśmy, jak inwestorzy przepłacają za materiały i walczą z nierzetelnymi ekipami. Postanowiliśmy to zmienić.
                        </p>
                        <p>
                            WeRafika powstała jako tarcza dla Inwestora. Znamy każdą sztuczkę wykonawców, wiemy gdzie szukać realnych oszczędności bez straty na jakości i jak wynegocjować warunki, których nie dostaniesz "z ulicy".
                        </p>
                        <p className="font-bold text-brand-navy">
                            Naszą pasją jest rzetelne budowanie. Naszym celem – Twój spokój i finanse.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
