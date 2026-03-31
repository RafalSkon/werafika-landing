import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReferences } from '../hooks/useReferences';
import { ArrowLeft, Quote, Building2, Calendar, MapPin, ChevronRight, Share2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ReferenceDetail = () => {
  const { id } = useParams();
  const { getReferenceById, loading } = useReferences();
  const reference = getReferenceById(id);

  if (loading) return null;
  if (!reference) return <div className="p-20 text-center">Nie znaleziono referencji.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={reference.heroImage || reference.image} 
          className="w-full h-full object-cover"
          alt={reference.company}
        />
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Link to="/referencje" className="inline-flex items-center gap-2 text-brand-turquoise/80 hover:text-brand-turquoise transition-colors font-bold uppercase tracking-widest text-xs mb-8">
                    <ArrowLeft size={16} />
                    Wróć do listy Partnerów
                </Link>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-brand-white mb-6 uppercase tracking-tight"
                >
                    Case Study: <span className="text-brand-turquoise">{reference.company}</span>
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-6 text-brand-white/70 text-sm font-bold uppercase tracking-widest"
                >
                    <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-brand-turquoise" />
                        {reference.company}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-brand-turquoise" />
                        {reference.date}
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Text Content */}
                <div className="lg:col-span-12">
                    <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-brand-gray -mt-40 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-8">
                                <h2 className="text-3xl font-display font-black text-brand-navy mb-8 flex items-center gap-4">
                                    <span className="w-12 h-1 text-brand-turquoise block" />
                                    Opis Współpracy
                                </h2>
                                <div className="prose prose-lg text-brand-navy/70 leading-loose max-w-none space-y-6">
                                    <p className="text-xl font-medium text-brand-navy/90 italic border-l-4 border-brand-turquoise pl-6 mb-8 py-2">
                                        "{reference.description?.substring(0, 150)}..."
                                    </p>
                                    <p>{reference.description}</p>
                                    <p>{reference.description.split('.').reverse().join('. ')}</p>
                                </div>
                            </div>
                            
                            {/* Sidebar Info */}
                            <div className="md:col-span-4 bg-brand-navy p-10 rounded-3xl text-brand-white">
                                <h3 className="text-xl font-display font-black mb-6 text-brand-turquoise uppercase tracking-widest flex items-center gap-3">
                                    Inwestor
                                </h3>
                                <div className="flex items-center gap-4 mb-8">
                                    <img 
                                        src={reference.image} 
                                        alt={reference.name} 
                                        className="w-16 h-16 rounded-2xl border-2 border-brand-turquoise object-cover"
                                    />
                                    <div>
                                        <p className="font-black text-lg">{reference.name}</p>
                                        <p className="text-brand-turquoise text-sm">{reference.company}</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-brand-white/40 text-xs font-bold uppercase mb-1">Status Projektu</p>
                                        <p className="font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            Ukończono pomyślnie
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-brand-white/40 text-xs font-bold uppercase mb-1">Typ Inwestycji</p>
                                        <p className="font-bold">Optymalizacja Procesów / Rozbudowa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="lg:col-span-12">
                    <h2 className="text-3xl font-display font-black text-brand-navy mb-12 text-center uppercase tracking-widest">
                        Galeria <span className="text-brand-turquoise">Inwestycji</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reference.gallery && reference.gallery.length > 0 ? (
                            reference.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-brand-gray group relative"
                                >
                                    <img 
                                        src={img} 
                                        alt={`Inwestycja ${i + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))
                        ) : (
                            <div className="p-10 text-center col-span-full text-brand-navy/30">Brak dodatkowych zdjęć inwestycji.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
