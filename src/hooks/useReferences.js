import { useState, useEffect } from 'react';

const STORAGE_KEY = 'werafika_references';

const defaultReferences = [
  {
    id: '1',
    name: 'Anna Kowalska',
    company: 'Tech Solutions Sp. z o.o.',
    text: 'Współpraca z WeRafika to była czysta przyjemność. Profesjonalne podejście i świetne efekty.',
    description: 'Tech Solutions to lider w dostarczaniu innowacyjnych rozwiązań dla przemysłu. Wspólnie zrealizowaliśmy projekt optymalizacji procesów logistycznych, który przyniósł wymierne korzyści w postaci oszczędności czasu i zasobów. Nasza rola polegała na przeprowadzeniu głębokiej analizy danych oraz wdrożeniu dedykowanych narzędzi analitycznych. Inwestycja obejmowała modernizację parku maszynowego oraz cyfryzację obiegu dokumentów.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    date: '2024-03-20'
  },
  {
    id: '2',
    name: 'Marek Nowak',
    company: 'E-commerce Group',
    text: 'Analiza, którą otrzymaliśmy, była niezwykle szczegółowa. Dzięki niej usprawniliśmy nasze procesy.',
    description: 'E-commerce Group zarządza siecią sklepów internetowych na całym świecie. Projekt dla tego partnera skupiał się na skalowaniu infrastruktury oraz optymalizacji ścieżki zakupowej klienta. Przeprowadzona przez nas analiza lejka sprzedażowego pozwoliła zidentyfikować krytyczne punkty, w których dochodziło do utraty konwersji. W wyniku wdrożonych rekomendacji, średnia wartość koszyka wzrosła o blisko 30%.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    date: '2024-02-15'
  }
];

export const useReferences = () => {
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setReferences(JSON.parse(stored));
    } else {
      setReferences(defaultReferences);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultReferences));
    }
    setLoading(false);
  }, []);

  const addReference = (ref) => {
    const newRef = { ...ref, id: Date.now().toString(), date: new Date().toISOString() };
    const updated = [...references, newRef];
    setReferences(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const updateReference = (id, updatedData) => {
    const updated = references.map(r => r.id === id ? { ...r, ...updatedData } : r);
    setReferences(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteReference = (id) => {
    const updated = references.filter(r => r.id !== id);
    setReferences(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getReferenceById = (id) => {
    return references.find(r => r.id === id);
  };

  return { references, loading, addReference, updateReference, deleteReference, getReferenceById };
};
