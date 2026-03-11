import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, FileText } from 'lucide-react'

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'Mieszkanie',
        hasCostEstimate: false,
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się w ciągu 24h.')
    }

    return (
        <section id="kontakt" className="bg-brand-gray py-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-5 border border-gray-100">
                    <div className="md:col-span-2 bg-brand-navy p-10 text-brand-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl mb-6">Zrób pierwszy krok.</h2>
                            <p className="text-brand-white/60 mb-8">Wyślij nam informacje o swoim projekcie, a my przygotujemy wstępną analizę możliwości oszczędności.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-turquoise/20 text-brand-turquoise flex items-center justify-center shrink-0">
                                        <FileText size={20} />
                                    </div>
                                    <p className="text-sm">Bezpłatna weryfikacja kosztorysu</p>
                                </div>
                                {/* More items? */}
                            </div>
                        </div>

                        <div className="pt-10 border-t border-white/10">
                            <div className="text-2xl font-black text-brand-turquoise mb-2">WeRafika</div>
                            <p className="text-sm text-brand-white/40 leading-relaxed">Twoje wsparcie na placu budowy.<br />Pon-Pt: 8:00 - 18:00</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="md:col-span-3 p-10 md:p-14">
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-2">Imię i Nazwisko</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise transition-all"
                                    placeholder="Jan Kowalski"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-2">Telefon</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise transition-all"
                                    placeholder="+48 000 000 000"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-brand-navy mb-2">Typ inwestycji</label>
                            <select
                                className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise transition-all appearance-none"
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            >
                                <option>Mieszkanie (wykończenie)</option>
                                <option>Dom (stan deweloperski)</option>
                                <option>Budowa domu od podstaw</option>
                                <option>Inwestycja komercyjna</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded border-none bg-brand-gray text-brand-turquoise focus:ring-brand-turquoise"
                                    onChange={(e) => setFormData({ ...formData, hasCostEstimate: e.target.checked })}
                                />
                                <span className="text-sm font-bold text-brand-navy group-hover:text-brand-turquoise transition-colors">Mam już kosztorys od innej firmy (WeRafikuj moje koszty)</span>
                            </label>
                        </div>

                        <div className="mb-10">
                            <label className="block text-sm font-bold text-brand-navy mb-2">Opis projektu (opcjonalnie)</label>
                            <textarea
                                rows="4"
                                className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise transition-all"
                                placeholder="Napisz kilka słów o metrażu, lokalizacji..."
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg">
                            WeRafikuj moje koszty <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
