// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Crée le contexte avec les valeurs par défaut
const AuthContext = createContext({
  user: null,
  isAdmin: false,
  login: () => {},
  logout: () => {}
});

// 2. Le Provider qui enveloppe toute l’app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Au montage, on peut récupérer l’utilisateur stocké en localStorage (ou cookie)
  useEffect(() => {
    const stored = window.localStorage.getItem('currentUser');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Fonction pour “connecter” : tu appelleras ton API login, ici on simule
  const login = (userData) => {
    window.localStorage.setItem('currentUser', JSON.stringify(userData));
    setUser(userData);
  };

  // Fonction pour “déconnecter”
  const logout = () => {
    window.localStorage.removeItem('currentUser');
    setUser(null);
  };

  // Détermine si c’est un admin (selon ton schéma : role === 'admin')
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook pour y accéder facilement
export function useAuth() {
  return useContext(AuthContext);
}
