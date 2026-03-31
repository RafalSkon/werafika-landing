import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import {
    Home,
    Paintbrush,
    Construction,
    Zap,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    Upload,
    AlertCircle,
    Clock,
    Target,
    ShieldCheck
} from 'lucide-react'

const STEPS = [
    "Rodzaj i Skala",
    "Analiza Potrzeb",
    "Finanse i Audyt",
    "Kontakt"
]

export const LeadMagnetForm = () => {
    const { siteContent } = useSiteContent()
    const { leadMagnet } = siteContent
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        investmentType: '',
        area: '',
        location: '',
        stage: '',
        priority: '',
        timeline: '',
        hasCostEstimate: false,
        costEstimateFile: null,
        budget: '',
        description: '',
        name: '',
        phone: '',
        email: '',
        consent: false
    })

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

    const handleInvestmentSelect = (type) => {
        setFormData({ ...formData, investmentType: type })
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentStep < 4) {
            nextStep()
        } else {
            alert("Formularz wysłany! Skontaktujemy się wkrótce.")
            console.log(formData)
        }
    }

    const renderStepIcon = (stepNum) => {
        if (currentStep > stepNum) return <CheckCircle2 className="text-brand-turquoise" size={24} />
        return (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${currentStep === stepNum ? 'border-brand-turquoise bg-brand-turquoise text-brand-navy' : 'border-gray-200 text-gray-400'
                }`}>
                {stepNum}
            </div>
        )
    }

    return (
        <section id="lead-magnet" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl mb-4">{leadMagnet.title}<span className="text-brand-turquoise">{leadMagnet.titleSpan}</span>{leadMagnet.titleSuffix}</h2>
                    <p className="text-gray-600 text-lg">{leadMagnet.subtitle}</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-between items-center mb-12 relative px-4">
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
                    <div
                        className="absolute top-4 left-0 h-0.5 bg-brand-turquoise transition-all duration-500 -z-10"
                        style={{ width: `${(currentStep - 1) / 3 * 100}%` }}
                    ></div>
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 bg-white px-2">
                            {renderStepIcon(idx + 1)}
                            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${currentStep === idx + 1 ? 'text-brand-navy' : 'text-gray-400'
                                }`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="bg-brand-gray rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[500px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { id: 'dom', label: 'Budowa domu', icon: Home },
                                        { id: 'mieszkanie', label: 'Remont mieszkania', icon: Paintbrush },
                                        { id: 'deweloperski', label: 'Stan Deweloperski', icon: Construction },
                                        { id: 'instalacje', label: 'Instalacje (OZE)', icon: Zap },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => handleInvestmentSelect(item.id)}
                                            className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 text-center group ${formData.investmentType === item.id
                                                    ? 'border-brand-turquoise bg-brand-turquoise/5 text-brand-navy shadow-lg shadow-brand-turquoise/10'
                                                    : 'border-white bg-white hover:border-brand-turquoise/30'
                                                }`}
                                        >
                                            <item.icon className={`transition-colors ${formData.investmentType === item.id ? 'text-brand-turquoise' : 'text-gray-400 group-hover:text-brand-turquoise'}`} size={32} />
                                            <span className="font-bold text-sm leading-tight">{item.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-brand-navy mb-2">Przybliżony metraż inwestycji (m²)</label>
                                        <input
                                            type="number"
                                            required
                                            name="area"
                                            value={formData.area}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                            placeholder="np. 120"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-brand-navy mb-2">Lokalizacja (Miasto/Powiat)</label>
                                        <input
                                            type="text"
                                            required
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                            placeholder="np. Kraków"
                                        />
                                        <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Dzięki temu dobierzemy ekipy działające w Twoim regionie</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-4">Na jakim etapie jesteś?</label>
                                    <select
                                        name="stage"
                                        required
                                        value={formData.stage}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-brand-turquoise appearance-none"
                                    >
                                        <option value="">Wybierz etap...</option>
                                        <option value="pomysl">Mam pomysł, szukam wiedzy</option>
                                        <option value="projekt">Mam projekt, szukam ekipy</option>
                                        <option value="materialy">Kupiłem materiały, szukam tylko robocizny</option>
                                        <option value="budowa">W trakcie realizacji</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-4">Co jest dla Ciebie priorytetem?</label>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { id: 'cena', label: 'Najniższa cena', icon: AlertCircle },
                                            { id: 'jakosc', label: 'Najwyższa jakość wykonania', icon: ShieldCheck },
                                            { id: 'termin', label: 'Szybki termin realizacji', icon: Clock },
                                            { id: 'kompleksowa', label: 'Kompleksowa obsługa', icon: Target },
                                        ].map((item) => (
                                            <label key={item.id} className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${formData.priority === item.id ? 'border-brand-turquoise bg-white shadow-md' : 'border-transparent bg-white/50 hover:bg-white'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    name="priority"
                                                    value={item.id}
                                                    className="hidden"
                                                    onChange={handleInputChange}
                                                />
                                                <div className={`p-2 rounded-lg ${formData.priority === item.id ? 'bg-brand-turquoise text-brand-navy' : 'bg-gray-100 text-gray-400'}`}>
                                                    <item.icon size={20} />
                                                </div>
                                                <span className="font-bold text-brand-navy">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-2">Kiedy planujesz zacząć?</label>
                                    <input
                                        type="date"
                                        required
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                    />
                                </div>

                                <div className="p-4 bg-brand-turquoise/10 border border-brand-turquoise/20 rounded-xl flex gap-3">
                                    <AlertCircle className="text-brand-turquoise shrink-0" size={20} />
                                    <p className="text-xs text-brand-navy/70 leading-relaxed italic">
                                        <span className="font-bold">Expert Tip:</span> Dobrze dobrana ekipa oszczędza średnio 15% czasu trwania inwestycji.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-4">Czy posiadasz już wyceny od innych firm?</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, hasCostEstimate: true })}
                                            className={`flex-1 py-3 px-6 rounded-xl font-bold border-2 transition-all ${formData.hasCostEstimate ? 'border-brand-turquoise bg-brand-turquoise text-brand-navy' : 'border-white bg-white'}`}
                                        >
                                            TAK
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, hasCostEstimate: false })}
                                            className={`flex-1 py-3 px-6 rounded-xl font-bold border-2 transition-all ${!formData.hasCostEstimate ? 'border-brand-navy bg-brand-navy text-white' : 'border-white bg-white'}`}
                                        >
                                            NIE
                                        </button>
                                    </div>
                                </div>

                                {formData.hasCostEstimate && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="p-6 border-2 border-dashed border-gray-300 rounded-2xl bg-white text-center"
                                    >
                                        <Upload className="mx-auto text-gray-400 mb-4" size={32} />
                                        <p className="font-bold text-brand-navy mb-1">Wgraj kosztorys do weryfikacji</p>
                                        <p className="text-xs text-gray-400 mb-4">Pliki PDF, JPG lub PNG (Max 5MB)</p>
                                        <input type="file" className="hidden" id="file-upload" />
                                        <label htmlFor="file-upload" className="bg-brand-gray py-2 px-6 rounded-lg text-sm font-bold cursor-pointer hover:bg-gray-200 transition-colors">
                                            Wybierz plik
                                        </label>
                                        <p className="text-[10px] text-brand-marine mt-4 uppercase font-bold">Sprawdzimy, czy ceny nie są zawyżone.</p>
                                    </motion.div>
                                )}

                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-2">Przewidywany budżet całkowity</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                    >
                                        <option value="">Wybierz zakres...</option>
                                        <option value="<100k">&lt; 100 000 PLN</option>
                                        <option value="100-300k">100 000 - 300 000 PLN</option>
                                        <option value="300-500k">300 000 - 500 000 PLN</option>
                                        <option value=">500k">&gt; 500 000 PLN</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-navy mb-2">Opisz krótko swój projekt</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                        placeholder="np. dom parterowy, dach dwuspadowy, ogrzewanie podłogowe..."
                                    ></textarea>
                                </div>

                                <div className="p-4 bg-brand-marine/10 border border-brand-marine/20 rounded-xl flex gap-3">
                                    <CheckCircle2 className="text-brand-marine shrink-0" size={20} />
                                    <p className="text-xs text-brand-navy/70 leading-relaxed italic">
                                        <span className="font-bold">Expert Tip:</span> Weryfikacja kosztorysu pozwala naszym klientom zaoszczędzić średnio 8-12 tys. zł na samym starcie.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-brand-turquoise/20 text-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-6">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h3 className="text-2xl text-brand-navy mb-2">Bezpieczny Kontakt</h3>
                                    <p className="text-gray-500">To ostatni krok! Twoje dane są u nas bezpieczne.</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-brand-navy mb-2">Imię i Nazwisko</label>
                                        <input
                                            type="text"
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-brand-navy mb-2">Telefon</label>
                                            <input
                                                type="tel"
                                                required
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-brand-navy mb-2">E-mail</label>
                                            <input
                                                type="email"
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            required
                                            checked={formData.consent}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 rounded border-none bg-white text-brand-turquoise focus:ring-brand-turquoise"
                                        />
                                        <span className="text-xs text-gray-500 leading-relaxed font-semibold group-hover:text-brand-navy transition-colors">
                                            Zgadzam się na kontakt w celu przedstawienia darmowej analizy kosztów oraz przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                                        </span>
                                    </label>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
                        {currentStep > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-turquoise transition-colors"
                            >
                                <ChevronLeft size={20} /> Wróć
                            </button>
                        ) : <div></div>}

                        <button type="submit" className="btn-primary flex items-center gap-3">
                            {currentStep === 4 ? 'Wyślij zapytanie' : 'Dalej'} <ChevronRight size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
