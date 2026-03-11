import React from 'react'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export const ComparisonTable = () => {
    const rows = [
        { label: "Wybór ekipy", solo: "Przypadek, ogłoszenia, ryzyko", withUs: "Selekcja z puli 50+ zweryfikowanych firm" },
        { label: "Ceny materiałów", solo: "Detaliczne (standard sklepowe)", withUs: "Hurtowe (zniżki projektowe do 25%)" },
        { label: "Kosztorys", solo: "Niepewność, 'wyjdzie w praniu'", withUs: "Stała cena, gwarancja rzetelności" },
        { label: "Czas inwestora", solo: "Dziesiątki godzin na budowie i w sklepach", withUs: "Spokój i raporty w telefonie" },
        { label: "Jakość wykonania", solo: "Loteria, trudne reklamacje", withUs: "Odbiór ekspercki, 'WeRafikacja'" },
    ]

    return (
        <section id="porównanie" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-brand-navy mb-4">Samodzielnie vs. <span className="text-brand-turquoise">Wsparcie WeRafika</span></h2>
                <p className="text-gray-600">Zobacz, dlaczego ponad 200 inwestorów wybrało naszą drogę.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="py-6 px-4 border-b border-gray-100">Cechy</th>
                            <th className="py-6 px-4 border-b border-gray-100 text-gray-400">Samodzielny remont</th>
                            <th className="py-6 px-4 border-b border-gray-100 bg-brand-navy text-brand-white rounded-t-2xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-brand-turquoise">We</span>Rafika
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx} className="group hover:bg-brand-gray/50 transition-colors">
                                <td className="py-6 px-4 border-b border-gray-100 font-semibold">{row.label}</td>
                                <td className="py-6 px-4 border-b border-gray-100 text-gray-500 flex items-center gap-2">
                                    <X size={16} className="text-red-400 shrink-0" /> {row.solo}
                                </td>
                                <td className={`py-6 px-4 border-b border-gray-100 ${idx === rows.length - 1 ? 'rounded-b-2xl' : ''} bg-brand-navy text-brand-white/90`}>
                                    <div className="flex items-center gap-2 capitalize">
                                        <Check size={16} className="text-brand-turquoise shrink-0" /> {row.withUs}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-gray-400 italic">* Na podstawie analizy 200+ zrealizowanych inwestycji w latach 2022-2024.</p>
            </div>
        </section>
    )
}
