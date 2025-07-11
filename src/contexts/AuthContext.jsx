// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Au chargement, récupérer les infos depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const storedToken = localStorage.getItem('authToken');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Connexion : stocker user+token et mettre à jour le state
  const login = ({ user: u, token: t }) => {
    localStorage.setItem('currentUser', JSON.stringify(u));
    localStorage.setItem('authToken', t);
    setUser(u);
    setToken(t);
  };

  // Déconnexion : nettoyage
  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    setUser(null);
    setToken(null);
  };

  // Simple helper pour savoir si l'utilisateur est admin
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, token, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook pour consommer le contexte
export function useAuth() {
  return useContext(AuthContext);
}
