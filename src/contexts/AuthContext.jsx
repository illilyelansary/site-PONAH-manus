// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const API_URL = 'https://ponah-backend.onrender.com/api/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('ponah_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('ponah_token'));
  const [loading, setLoading] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('ponah_token', token);
    } else {
      localStorage.removeItem('ponah_token');
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('ponah_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ponah_user');
    }
  }, [user]);

  // login
  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error('Identifiants invalides');
      const { token: jwt, user: userData } = await res.json();
      setToken(jwt);
      setUser(userData);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // register
  const register = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Erreur lors de l’inscription');
      }
      // on reçoit peut-être un token et user directement après inscription
      const { token: jwt, user: userData } = await res.json();
      setToken(jwt);
      setUser(userData);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook pour consommer facilement le contexte
export function useAuth() {
  return useContext(AuthContext);
}
