import React, { useState } from 'react';
import { useSiteContent } from '../../hooks/useSiteContent';
import { Save, Layout, Globe, Phone, Mail, MapPin, Type, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const SiteContentEditor = () => {
  const { siteContent, updateContent } = useSiteContent();
  const [localContent, setLocalContent] = useState(siteContent);
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = (section, field, value) => {
    setLocalContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFeatureUpdate = (idx, field, value) => {
    const newFeatures = [...localContent.hero.features];
    newFeatures[idx] = { ...newFeatures[idx], [field]: value };
    handleUpdate('hero', 'features', newFeatures);
  };

  const saveChanges = () => {
    setIsSaving(true);
    updateContent(localContent);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  const tabs = [
    { id: 'general', label: 'Ogólne', icon: Globe },
    { id: 'hero', label: 'Hero / Start', icon: Layout },
    { id: 'about', label: 'O nas', icon: Type },
    { id: 'lead', label: 'Formularz', icon: CheckCircle },
    { id: 'footer', label: 'Stopka / Dane', icon: MapPin },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-display font-black text-brand-navy">Edycja Treści</h2>
          <p className="text-gray-500">Zarządzaj tekstami i danymi kontaktowymi na całej stronie.</p>
        </div>
        <button
          onClick={saveChanges}
          disabled={isSaving}
          className="btn-primary flex items-center gap-2 px-8 py-3"
        >
          {isSaving ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <Save size={20} />
          )}
          {isSaving ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </div>

      {showSuccess && (
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center gap-3"
        >
          <CheckCircle size={20} />
          <span className="font-bold">Zmiany zostały zapisane pomyślnie!</span>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-white rounded-xl border border-gray-200 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id ? 'bg-brand-navy text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm">
        {/* GENERAL SECTION */}
        {activeTab === 'general' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Ustawienia Nawigacji</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Przycisk CTA (Navbar)</label>
                  <input
                    type="text"
                    value={localContent.navbar.ctaText}
                    onChange={(e) => handleUpdate('navbar', 'ctaText', e.target.value)}
                    className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        {activeTab === 'hero' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Górny Badge (nad tytułem)</label>
                <input
                  type="text"
                  value={localContent.hero.badge}
                  onChange={(e) => handleUpdate('hero', 'badge', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł Główny (część 1)</label>
                <input
                  type="text"
                  value={localContent.hero.titleMain}
                  onChange={(e) => handleUpdate('hero', 'titleMain', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł Główny (część wyróżniona)</label>
                <input
                  type="text"
                  value={localContent.hero.titleSpan}
                  onChange={(e) => handleUpdate('hero', 'titleSpan', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Podtytuł (Opis)</label>
                <textarea
                  value={localContent.hero.subtitle}
                  onChange={(e) => handleUpdate('hero', 'subtitle', e.target.value)}
                  rows="3"
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tekst przycisku CTA</label>
                <input
                  type="text"
                  value={localContent.hero.ctaText}
                  onChange={(e) => handleUpdate('hero', 'ctaText', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Cechy (Features)</h3>
              <div className="space-y-4">
                {localContent.hero.features.map((feature, idx) => (
                  <div key={idx} className="p-6 bg-brand-gray rounded-2xl grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tytuł cechy {idx + 1}</label>
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => handleFeatureUpdate(idx, 'title', e.target.value)}
                        className="w-full bg-white border-none rounded-lg py-2 px-3 focus:ring-2 focus:ring-brand-turquoise"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Opis cechy {idx + 1}</label>
                      <input
                        type="text"
                        value={feature.desc}
                        onChange={(e) => handleFeatureUpdate(idx, 'desc', e.target.value)}
                        className="w-full bg-white border-none rounded-lg py-2 px-3 focus:ring-2 focus:ring-brand-turquoise"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeTab === 'about' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Lata doświadczenia (np. 15L)</label>
                <input
                  type="text"
                  value={localContent.about.experienceYears}
                  onChange={(e) => handleUpdate('about', 'experienceYears', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł doświadczenia</label>
                <input
                  type="text"
                  value={localContent.about.experienceTitle}
                  onChange={(e) => handleUpdate('about', 'experienceTitle', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Cytat / Quote</label>
                <input
                  type="text"
                  value={localContent.about.quote}
                  onChange={(e) => handleUpdate('about', 'quote', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2 pt-4 border-t border-gray-100"></div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Misja - Główny Tytuł</label>
                <input
                  type="text"
                  value={localContent.about.mainTitle}
                  onChange={(e) => handleUpdate('about', 'mainTitle', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Misja - Tytuł Spra (wyróżnienie)</label>
                <input
                  type="text"
                  value={localContent.about.mainTitleSpan}
                  onChange={(e) => handleUpdate('about', 'mainTitleSpan', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Opis Akapit 1</label>
                <textarea
                  value={localContent.about.description1}
                  onChange={(e) => handleUpdate('about', 'description1', e.target.value)}
                  rows="3"
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Opis Akapit 2</label>
                <textarea
                  value={localContent.about.description2}
                  onChange={(e) => handleUpdate('about', 'description2', e.target.value)}
                  rows="3"
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Tekst końcowy (pogrubiony)</label>
                <input
                  type="text"
                  value={localContent.about.focusText}
                  onChange={(e) => handleUpdate('about', 'focusText', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
            </div>
          </div>
        )}

        {/* LEAD MAGNET SECTION */}
        {activeTab === 'lead' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł sekcji (część 1)</label>
                <input
                  type="text"
                  value={localContent.leadMagnet.title}
                  onChange={(e) => handleUpdate('leadMagnet', 'title', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł sekcji (część wyróżniona)</label>
                <input
                  type="text"
                  value={localContent.leadMagnet.titleSpan}
                  onChange={(e) => handleUpdate('leadMagnet', 'titleSpan', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Tytuł sekcji (końcówka)</label>
                <input
                  type="text"
                  value={localContent.leadMagnet.titleSuffix}
                  onChange={(e) => handleUpdate('leadMagnet', 'titleSuffix', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Podtytuł sekcji</label>
                <input
                  type="text"
                  value={localContent.leadMagnet.subtitle}
                  onChange={(e) => handleUpdate('leadMagnet', 'subtitle', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
            </div>
          </div>
        )}

        {/* FOOTER SECTION */}
        {activeTab === 'footer' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Opis Firmy w stopce</label>
                <textarea
                  value={localContent.footer.description}
                  onChange={(e) => handleUpdate('footer', 'description', e.target.value)}
                  rows="3"
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Phone size={14} className="text-brand-turquoise" /> Telefon
                </label>
                <input
                  type="text"
                  value={localContent.footer.phone}
                  onChange={(e) => handleUpdate('footer', 'phone', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail size={14} className="text-brand-turquoise" /> Email
                </label>
                <input
                  type="email"
                  value={localContent.footer.email}
                  onChange={(e) => handleUpdate('footer', 'email', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-brand-turquoise" /> Lokalizacje / Adresy
                </label>
                <input
                  type="text"
                  value={localContent.footer.locations}
                  onChange={(e) => handleUpdate('footer', 'locations', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Copyright (Prawa autorskie)</label>
                <input
                  type="text"
                  value={localContent.footer.copyright}
                  onChange={(e) => handleUpdate('footer', 'copyright', e.target.value)}
                  className="w-full bg-brand-gray border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-turquoise"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
