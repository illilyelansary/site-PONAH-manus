// src/components/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoPonah from '../assets/LogoPonah.png';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, login, logout } = useAuth();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/apropos' },
    { name: 'Nos Membres', href: '/membres' },
    { name: 'Nos Activités', href: '/activites' },
    { name: 'Publications', href: '/publications' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={LogoPonah} alt="Logo PONAH" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">PONAH</h1>
                <p className="text-sm text-gray-600">Plateforme des ONG Nationales</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Bouton admin */}
            {isAdmin && (
              user
                ? <button onClick={logout} className="px-3 py-2 text-sm font-medium text-red-600">
                    Déconnexion
                  </button>
                : <button onClick={() => login({ name: 'Admin', role: 'admin' })} className="px-3 py-2 text-sm font-medium text-green-600">
                    Connexion Admin
                  </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Bouton admin mobile */}
              {isAdmin && (
                user
                  ? <button
                      onClick={() => { logout(); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-2 text-red-600"
                    >
                      Déconnexion
                    </button>
                  : <button
                      onClick={() => { login({ name: 'Admin', role: 'admin' }); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-2 text-green-600"
                    >
                      Connexion Admin
                    </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
