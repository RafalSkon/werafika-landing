import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useReferences } from '../hooks/useReferences';
import { ArrowLeft, ArrowUpRight, Search, Globe, Building2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ReferencesPage = () => {
  const { references, loading } = useReferences();

  if (loading) return null;

  return (
    <div className="min-h-screen bg-brand-gray/50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-brand-turquoise/5 blur-3xl opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-turquoise/10 border border-brand-turquoise/20 text-brand-turquoise text-sm font-bold uppercase tracking-widest mb-6"
            >
                <Globe size={16} />
                Portfolio Partnerów
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display font-black text-brand-white mb-6"
            >
                Nasze <span className="text-brand-turquoise">Realizacje i Referencje</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-brand-white/70 max-w-2xl mx-auto"
            >
                Zobacz szczegółowe studia przypadków, projekty i inwestycje, które zrealizowaliśmy wspólnie z naszymi kluczowymi partnerami biznesowymi.
            </motion.p>
        </div>
      </section>

      {/* Grid of Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-brand-gray"
              >
                {/* Image Container */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={ref.heroImage || ref.image} 
                    alt={ref.company} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-brand-turquoise font-black text-xs uppercase tracking-widest mb-1">
                            <Building2 size={14} />
                            {ref.company}
                        </div>
                        <h3 className="text-2xl font-display font-black text-brand-white">{ref.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-brand-navy/70 leading-relaxed line-clamp-3 mb-8">
                    {ref.description || ref.text}
                  </p>
                  
                  <Link 
                    to={`/referencje/${ref.id}`}
                    className="inline-flex items-center gap-2 text-brand-navy font-black group-hover:text-brand-turquoise transition-colors uppercase tracking-widest text-sm"
                  >
                    Zobacz studium przypadku
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
