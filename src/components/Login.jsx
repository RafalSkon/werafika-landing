import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Błędne hasło. Spróbuj ponownie.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-brand-navy-light/50 p-8 rounded-3xl border border-brand-white/10 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-turquoise/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-brand-turquoise/30">
            <Lock className="w-8 h-8 text-brand-turquoise" />
          </div>
          <h2 className="text-2xl font-display font-black text-brand-white">Panel Administratora</h2>
          <p className="text-brand-white/60 text-sm mt-2">Zaloguj się, aby zarządzać referencjami</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brand-white/80 mb-2">Hasło Panelu</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-navy border border-brand-white/10 rounded-xl py-3 px-12 text-brand-white focus:outline-none focus:border-brand-turquoise transition-colors"
                placeholder="Wpisz hasło..."
                autoFocus
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-white/30" />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-500 text-sm"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </motion.div>
          )}

          <button type="submit" className="btn-primary w-full py-4 text-brand-navy">
            Zaloguj się
          </button>
        </form>

        <p className="text-center mt-8 text-brand-white/30 text-xs uppercase tracking-widest">
          WeRafika &copy; 2024
        </p>
      </motion.div>
    </div>
  );
};
