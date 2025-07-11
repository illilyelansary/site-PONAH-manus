```jsx
// src/components/pages/Members.jsx
import React, { useState, useEffect } from 'react';
import { Search, Users, CheckCircle, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import membersDataStatic from '../../data/membersData';

const API = 'https://ponah-backend.onrender.com/api/members';

export default function Members() {
  const { token, isAdmin } = useAuth();

  const [members, setMembers] = useState(membersDataStatic);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '', fullName: '', dateCreation: '',
    accordCadre: '', zoneIntervention: '',
    adresse: '', responsable: '', fonction: '',
    telephone: '', email: '', recent: true
  });

  // Charger et fusionner les membres du backend
  useEffect(() => {
    fetch(API, {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        const existingIds = new Set(membersDataStatic.map(m => m.id));
        const newOnes = data.filter(m => !existingIds.has(m.id));
        setMembers([...membersDataStatic, ...newOnes]);
      })
      .catch(console.error);
  }, [token]);

  // Ajout d’un membre (admin only)
  const handleSubmit = async e => {
    e.preventDefault();
    if (!isAdmin) return;
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error();
      const created = await res.json();
      setMembers(m => [...m, created]);
      setFormData({ name: '', fullName: '', dateCreation: '', accordCadre: '', zoneIntervention: '', adresse: '', responsable: '', fonction: '', telephone: '', email: '', recent: true });
      alert('Membre ajouté !');
    } catch {
      alert('Erreur lors de l’ajout du membre.');
    }
  };

  // Suppression d’un membre (admin only)
  const handleDelete = async id => {
    if (!isAdmin || !window.confirm('Confirmez-vous la suppression ?')) return;
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error();
      setMembers(m => m.filter(x => x.id !== id));
      if (selectedMember?.id === id) setSelectedMember(null);
    } catch {
      alert('Erreur lors de la suppression.');
    }
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(fd => ({ ...fd, [name]: type === 'checkbox' ? checked : value }));
  };

  const filtered = members.filter(m => m.name?.toLowerCase().includes(searchTerm.toLowerCase()));

  // Statistiques
  const total = members.length;
  const zones = [...new Set(members.map(m => m.zoneIntervention).filter(Boolean))].length;
  const recentCount = members.filter(m => m.recent).length;

  return (
    <div className="min-h-screen">

      {/* Hero & stats */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Membres</h1>
        <p className="mb-8">{total} ONG nationales et locales unies</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{total}</div>
            <div>Membres</div>
          </div>
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{zones}</div>
            <div>Zones</div>
          </div>
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{recentCount}</div>
            <div>Nouveaux 2024</div>
          </div>
        </div>
      </section>

      {/* Nouveaux Membres 2024 */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nouveaux Membres 2024</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.filter(m => m.recent).map(m => (
            <div key={m.id} onClick={() => setSelectedMember(m)} className="p-4 border-l-4 border-primary rounded shadow cursor-pointer hover:bg-gray-50">
              <h3 className="font-semibold">{m.fullName}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Recherche */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Rechercher une ONG..." className="w-full pl-10 pr-4 py-2 border rounded" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </section>

      {/* Liste des Membres */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(m => (
            <div key={m.id} className="relative p-4 bg-white rounded shadow hover:shadow-md">
              {isAdmin && (
                <button onClick={() => handleDelete(m.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">🗑️</button>
              )}
              <div onClick={() => setSelectedMember(m)} className="flex items-center space-x-2 cursor-pointer">
                <Users className="text-primary" /><span className="font-medium">{m.name}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="col-span-full text-center">Aucun membre trouvé.</p>}
        </div>
      </section>

      {/* Modale Détails */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-lg w-full">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setSelectedMember(null)}><X size={24} /></button>
            <h2 className="text-2xl font-bold mb-2">{selectedMember.fullName}</h2>
            <ul className="space-y-1 text-sm">
              {/* détails list */}
            </ul>
            {isAdmin && (
              <button onClick={() => { handleDelete(selectedMember.id); setSelectedMember(null); }} className="mt-4 w-full bg-red-500 text-white py-2 rounded">Supprimer ce membre</button>
            )}
          </div>
        </div>
      )}

      {/* Section Devenir membre */}
      <section className="py-16 bg-primary/5 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rejoindre la PONAH</h2>
          <p className="text-lg text-gray-700 mb-6">
            Toute ONG nationale légalement reconnue, intervenant dans le domaine humanitaire au Mali,
            et acceptant nos statuts et règlement intérieur, peut devenir membre de la PONAH.
          </p>
          <ul className="text-left max-w-2xl mx-auto text-gray-700 mb-6 list-disc list-inside">
            <li>Lettre de demande adressée au Président de la PONAH</li>
            <li>Copie de l’Accord Cadre de l’organisation</li>
            <li>Paiement des frais d’adhésion et cotisation annuelle</li>
            <li>Respect de la charte des membres</li>
          </ul>
          <a href="mailto:ponah.mali@gmail.com" className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium">
            Demander l'adhésion
          </a>
        </div>
      </section>

      {/* Formulaire d’ajout (admin only) */}
      {isAdmin && (
        <section className="py-8 bg-white px-4">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">Ajouter un nouveau membre</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name','fullName','dateCreation','accordCadre','zoneIntervention','adresse','responsable','fonction','telephone','email'].map(f => (
                <input key={f} name={f} type="text" placeholder={f.charAt(0).toUpperCase() + f.slice(1)} value={formData[f]} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              ))}
              <label className="flex items-center space-x-2">
                <input name="recent" type="checkbox" checked={formData.recent} onChange={handleChange} />
                <span>Adhérent récent</span>
              </label>
              <button type="submit" className="w-full bg-primary text-white py-2 rounded">Enregistrer le membre</button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
```
