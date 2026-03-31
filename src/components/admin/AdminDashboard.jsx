import React, { useState } from 'react';
import { useReferences } from '../../hooks/useReferences';
import { Trash2, Edit2, Plus, Star, Search, User, Settings, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiteContentEditor } from './SiteContentEditor';

export const AdminDashboard = () => {
    const { references, loading, deleteReference } = useReferences();
    const [activeTab, setActiveTab] = useState('references');

    if (loading) return null;

    return (
        <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-brand-gray pb-2">
                <button
                    onClick={() => setActiveTab('references')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === 'references' ? 'bg-brand-navy text-brand-white shadow-lg' : 'text-brand-navy/40 hover:text-brand-navy hover:bg-brand-gray/20'
                        }`}
                >
                    <MessageSquare size={18} />
                    Referencje
                </button>
                <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-all ${activeTab === 'settings' ? 'bg-brand-navy text-brand-white shadow-lg' : 'text-brand-navy/40 hover:text-brand-navy hover:bg-brand-gray/20'
                        }`}
                >
                    <Settings size={18} />
                    Treść Strony
                </button>
            </div>

            {activeTab === 'references' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-display font-black text-brand-navy">Referencje</h1>
                            <p className="text-brand-navy/50 mt-1">Zarządzaj opiniami klientów na stronie głównej</p>
                        </div>
                        <Link
                            to="/admin/nowa"
                            className="flex items-center gap-2 bg-brand-navy text-brand-white px-6 py-3 rounded-xl hover:bg-brand-turquoise hover:text-brand-navy transition-all font-bold shadow-lg"
                        >
                            <Plus size={20} />
                            Dodaj Nową
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-brand-gray overflow-hidden">
                        <div className="p-6 border-b border-brand-gray bg-brand-gray/10 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-bold text-brand-navy uppercase tracking-wider">
                                <Star className="text-brand-turquoise" size={16} fill="currentColor" />
                                Lista Opinii ({references.length})
                            </div>
                        </div>

                        <div className="divide-y divide-brand-gray">
                            {references.length === 0 ? (
                                <div className="p-20 text-center text-brand-navy/30">
                                    Brak referencji. Kliknij "Dodaj Nową" aby zacząć.
                                </div>
                            ) : (
                                references.map((ref) => (
                                    <div key={ref.id} className="p-6 hover:bg-brand-gray/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-gray/50 bg-brand-gray shrink-0">
                                                {ref.image ? (
                                                    <img src={ref.image} alt={ref.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-brand-navy/20">
                                                        <User size={32} />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-navy text-lg">{ref.name}</h3>
                                                <p className="text-sm text-brand-turquoise font-medium uppercase tracking-tight">{ref.company}</p>
                                                <p className="text-sm text-brand-navy/60 mt-1 line-clamp-2 max-w-lg italic">
                                                    "{ref.text}"
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                                            <button
                                                onClick={() => deleteReference(ref.id)}
                                                className="p-3 text-brand-navy/30 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                title="Usuń"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <SiteContentEditor />
                </div>
            )}
        </div>
    );
};
