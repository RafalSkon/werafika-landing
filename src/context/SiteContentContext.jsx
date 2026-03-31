import React, { createContext, useState, useEffect } from 'react';

const SiteContentContext = createContext();

const STORAGE_KEY = 'werafika_site_content';

const defaultContent = {
  navbar: {
    ctaText: 'Bezpłatna analiza',
    navItems: [
      { label: 'Model Win-Win', path: '/#model-win-win' },
      { label: 'Porównanie', path: '/#porównanie' },
      { label: 'O nas', path: '/#o-nas' },
      { label: 'Referencje', path: '/referencje' },
      { label: 'Analiza', path: '/#analiza' },
    ]
  },
  hero: {
    badge: 'Profesjonalny Nadzór Remontowy',
    titleMain: 'Remont, który ',
    titleSpan: 'spłaca się sam.',
    subtitle: 'Twoje 0 zł za profesjonalny nadzór. Wykorzystaj nasze 15-letnie doświadczenie i hurtowe rabaty. My weryfikujemy ekipy i negocjujemy ceny, Ty zyskujesz święty spokój.',
    ctaText: 'Bezpłatna analiza kosztorysu',
    scrollText: 'Scrolluj w dół',
    features: [
      { title: 'Zweryfikowane ekipy', desc: 'Tylko rzetelni wykonawcy' },
      { title: 'Hurtowe rabaty', desc: 'Ceny niższe o 10-25%' },
      { title: 'Stały kosztorys', desc: 'Brak ukrytych kosztów' }
    ]
  },
  about: {
    experienceYears: '15L',
    experienceTitle: '15 lat na placu budowy.',
    quote: 'Widzieliśmy już wszystko – od genialnych wizji po największe błędy wykonawcze.',
    statsNumber: '200+',
    statsLabel: 'Projektów rocznie',
    missionBadge: 'Nasza misja',
    mainTitle: 'Ekspercka wiedza, która odwraca ',
    mainTitleSpan: 'układ sił.',
    description1: 'Przez lata obserwowaliśmy, jak inwestorzy przepłacają za materiały i walczą z nierzetelnymi ekipami. Postanowiliśmy to zmienić.',
    description2: 'WeRafika powstała jako tarcza dla Inwestora. Znamy każdą sztuczkę wykonawców, wiemy gdzie szukać realnych oszczędności bez straty na jakości i jak wynegocjować warunki, których nie dostaniesz "z ulicy".',
    focusText: 'Naszą pasją jest rzetelne budowanie. Naszym celem – Twój spokój i finanse.'
  },
  leadMagnet: {
    title: 'Skrojony na ',
    titleSpan: 'miarę',
    titleSuffix: ' kosztorys.',
    subtitle: 'Przejdź przez 4 kroki, a my obliczymy Twoje realne oszczędności.'
  },
  footer: {
    description: 'Profesjonalny nadzór i optymalizacja kosztów remontu. Budujemy zaufanie na każdym metrze kwadratowym Twojej inwestycji.',
    phone: '+48 123 456 789',
    email: 'kontakt@werafika.pl',
    locations: 'Kraków / Warszawa / Wrocław',
    copyright: '© 2024 WeRafika. Wszystkie prawa zastrzeżone.'
  }
};

export const SiteContentProvider = ({ children }) => {
  const [siteContent, setSiteContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSiteContent(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse site content', e);
        setSiteContent(defaultContent);
      }
    }
    setIsLoading(false);
  }, []);

  const updateContent = (newContent) => {
    setSiteContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const updateSection = (section, data) => {
    const updated = { ...siteContent, [section]: { ...siteContent[section], ...data } };
    updateContent(updated);
  };

  return (
    <SiteContentContext.Provider value={{ siteContent, updateContent, updateSection, isLoading }}>
      {children}
    </SiteContentContext.Provider>
  );
};

export default SiteContentContext;
