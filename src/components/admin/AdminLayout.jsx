import React, { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, LayoutDashboard, PlusCircle, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminLayout = ({ children }) => {
  const { isAuthenticated, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-turquoise/20 border-t-brand-turquoise rounded-full animate-spin" />
      </div>
    );
  }

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Dodaj Referencję', path: '/admin/nowa', icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-brand-gray flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy shrink-0 hidden md:flex flex-col border-r border-brand-white/10">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-brand-turquoise/20 rounded-lg flex items-center justify-center">
              <span className="text-brand-turquoise font-black text-sm">W</span>
            </div>
            <span className="text-brand-white font-display font-black">WeRafika <span className="text-brand-turquoise text-xs opacity-50">Admin</span></span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-brand-turquoise text-brand-navy font-bold' 
                      : 'text-brand-white/60 hover:text-brand-white hover:bg-brand-white/5'
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-brand-white/5">
          <button 
            onClick={logout}
            className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors px-4 py-3 w-full"
          >
            <LogOut size={20} />
            Wyloguj
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-brand-gray/50 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-brand-navy/50">
            <span>Admin</span>
            <ChevronRight size={16} />
            <span className="text-brand-navy font-bold">{location.pathname === '/admin' ? 'Dashboard' : 'Nowa Referencja'}</span>
          </div>

          <Link 
            to="/" 
            className="flex items-center gap-2 text-brand-navy hover:text-brand-turquoise transition-colors font-semibold"
          >
            <Globe size={18} />
            Strona Główna
          </Link>
        </header>

        <section className="flex-1 overflow-y-auto p-8 bg-brand-gray/30">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </section>
      </main>
    </div>
  );
};
