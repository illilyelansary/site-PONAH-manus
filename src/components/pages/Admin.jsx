// src/components/pages/Admin.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Members from './Members';
import { useAuth } from '../../contexts/AuthContext';

export default function Admin() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    // Simple admin login: you could integrate real auth here
    login({ name: username, role: 'admin' });
  };

  // If not logged in, show login form
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Connexion Admin</h2>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-medium"
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  // If logged in as admin, render Members management
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-end p-4">
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Déconnexion
        </button>
      </div>
      <Members />
    </div>
  );
}
