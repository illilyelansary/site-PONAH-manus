// src/components/pages/Admin.jsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const { login, signup, user } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password });
      } else {
        await signup({ name: form.name, email: form.email, password: form.password });
      }
      navigate('/'); // rediriger après succès
    } catch (err) {
      alert(err.message);
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Bienvenue, {user.name}</h2>
        <p>Vous êtes déjà connecté.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${mode==='login' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('login')}
        >Connexion</button>
        <button
          className={`px-4 py-2 rounded ${mode==='signup' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('signup')}
        >Inscription</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          {mode === 'login' ? 'Se connecter' : 'S’inscrire'}
        </button>
      </form>
    </div>
  );
}
