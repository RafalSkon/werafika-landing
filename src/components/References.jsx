import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReferences } from '../hooks/useReferences';

export const References = () => {
  const { references, loading } = useReferences();

  if (loading) return null;

  // Show only 3 latest references on landing page
  const featuredReferences = references.slice(0, 3);

  return (
    <section id="referencje" className="py-24 bg-brand-navy-light/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-brand-white mb-4"
          >
            Zaufali nam <span className="text-brand-turquoise">najlepsi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-white/70 max-w-2xl mx-auto"
          >
            Zobacz wybrane opinie naszych partnerów. Pełne studia przypadków znajdziesz na dedykowanej podstronie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReferences.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-navy p-8 rounded-2xl border border-brand-white/10 hover:border-brand-turquoise/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-turquoise text-brand-turquoise" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-brand-turquoise/20 group-hover:text-brand-turquoise/40 transition-colors" />
                  <p className="text-brand-white/80 italic leading-relaxed relative z-10">
                    "{ref.text}"
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img 
                  src={ref.image} 
                  alt={ref.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-turquoise/50"
                />
                <div>
                  <h4 className="font-bold text-brand-white">{ref.name}</h4>
                  <p className="text-sm text-brand-turquoise">{ref.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <Link 
              to="/referencje"
              className="inline-flex items-center gap-3 bg-brand-turquoise text-brand-navy font-black py-4 px-10 rounded-full hover:bg-brand-marine hover:text-brand-white transition-all transform hover:scale-105 shadow-xl"
            >
                Zobacz wszystkie realizacje
                <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </section>
  );
};

