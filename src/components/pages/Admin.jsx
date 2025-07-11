// src/components/pages/Admin.jsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Admin() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' ou 'register'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        // Connexion
        await login({ email: formData.email, password: formData.password });
        // Redirection ou message de succès géré par votre AuthContext
      } else {
        // Inscription
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Les mots de passe ne correspondent pas");
        }
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        // Vous pouvez enchaîner sur la connexion automatique, ou inviter l'utilisateur à se connecter
        setMode('login');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          {mode === 'login' ? 'Connexion Admin' : 'Inscription Admin'}
        </h2>

        {/* Toggle login / register */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => { setMode('login'); setError(''); }}
            className={`px-4 py-2 rounded ${
              mode === 'login' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => { setMode('register'); setError(''); }}
            className={`px-4 py-2 rounded ${
              mode === 'register' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            Inscription
          </button>
        </div>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={loading}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              disabled={loading}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:outline-none"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                disabled={loading}
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            {loading
              ? 'Veuillez patienter...'
              : mode === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}
