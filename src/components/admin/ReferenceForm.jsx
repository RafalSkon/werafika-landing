import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReferences } from '../../hooks/useReferences';
import { Save, X, Image as ImageIcon, User, Quote, CheckCircle, Plus, Trash2, Layout, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReferenceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    text: '',
    description: '',
    image: '',
    heroImage: '',
    gallery: []
  });
  const [galleryInput, setGalleryInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { addReference } = useReferences();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addReference(formData);
    setIsSuccess(true);
    setTimeout(() => navigate('/admin'), 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addGalleryImage = () => {
    if (galleryInput.trim()) {
      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, galleryInput.trim()]
      }));
      setGalleryInput('');
    }
  };

  const removeGalleryImage = (index) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={() => navigate('/admin')}
          className="p-3 bg-white text-brand-navy border border-brand-gray/50 rounded-xl hover:text-brand-turquoise transition-colors"
        >
          <X size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-display font-black text-brand-navy">Nowa Szczegółowa Referencja</h1>
          <p className="text-brand-navy/50">Dodaj case study partnera z galerią inwestycji</p>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl border border-brand-gray relative overflow-hidden">
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
          >
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-2xl font-black text-brand-navy mb-2">Pomyślnie dodano!</h3>
            <p className="text-brand-navy/50">Przekierowuję do listy...</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Osoba Kontaktowa</label>
              <div className="relative">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                  placeholder="np. Anna Kowalska"
                />
                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Firma / Partner</label>
              <div className="relative">
                <input
                  required
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                  placeholder="np. Tech Solutions Sp. z o.o."
                />
                <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Avatar/Logo (URL)</label>
              <div className="relative">
                <input
                  required
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                  placeholder="Link do zdjęcia osoby/logo"
                />
                <ImageIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Główne zdjęcie inwestycji/Hero (URL)</label>
              <div className="relative">
                <input
                  required
                  type="text"
                  name="heroImage"
                  value={formData.heroImage}
                  onChange={handleChange}
                  className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                  placeholder="Główne zdjęcie na podstronę"
                />
                <Layout size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Krótki Cytat (na stronę główną)</label>
            <div className="relative">
              <input
                required
                type="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                placeholder="np. Współpraca z WeRafika to czysta przyjemność..."
              />
              <Quote size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Szczegółowy Opis Case Study (podstrona)</label>
            <div className="relative">
              <textarea
                required
                name="description"
                rows={8}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium resize-none"
                placeholder="Tu wpisz długi opisz projektu, zakresu prac i roli partnera..."
              />
              <Quote size={20} className="absolute left-4 top-6 text-brand-navy/30" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-brand-navy/60 uppercase tracking-widest mb-3">Galeria Zdjęć Inwestycji</label>
            <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={galleryInput}
                        onChange={(e) => setGalleryInput(e.target.value)}
                        className="w-full bg-brand-gray/30 border border-brand-gray/50 rounded-2xl py-4 px-12 text-brand-navy focus:outline-none focus:border-brand-turquoise transition-all font-medium"
                        placeholder="Link do zdjęcia w galerii..."
                    />
                    <ImageIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" />
                </div>
                <button 
                  type="button"
                  onClick={addGalleryImage}
                  className="px-6 bg-brand-navy text-brand-white rounded-2xl hover:bg-brand-turquoise hover:text-brand-navy transition-all flex items-center gap-2"
                >
                    <Plus size={20} />
                    Dodaj
                </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-brand-gray group">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={() => removeGalleryImage(i)}
                          className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-brand-navy text-brand-white font-black py-5 px-8 rounded-2xl hover:bg-brand-turquoise hover:text-brand-navy transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Save size={24} />
              Zapisz Studium Przypadku
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-8 bg-brand-gray text-brand-navy font-bold rounded-2xl hover:bg-brand-gray/80 transition-colors"
            >
              Anuluj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
