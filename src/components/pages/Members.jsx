// src/components/pages/Members.jsx
import React, { useState, useEffect } from 'react';
import { Search, Users, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import membersDataStatic from '../../data/membersData';

const API = 'https://ponah-backend.onrender.com/api/members';

export default function Members() {
  const { isAdmin } = useAuth();              // ← récupère le flag admin
  const [members, setMembers] = useState(membersDataStatic);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name:'', fullName:'', dateCreation:'',
    accordCadre:'', zoneIntervention:'',
    adresse:'', responsable:'', fonction:'',
    telephone:'', email:'', recent:true
  });

  // Charge et fusionne statique + backend
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        const existing = new Set(membersDataStatic.map(m => m.id));
        const backOnly = data.filter(m => !existing.has(m.id));
        setMembers([...membersDataStatic, ...backOnly]);
      })
      .catch(console.error);
  }, []);

  // Ajout (accessible aux admins seulement)
  const handleSubmit = async e => {
    e.preventDefault();
    if (!isAdmin) return;                     // ← blocage côté UI
    try {
      const res = await fetch(API, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error();
      const created = await res.json();
      setMembers(m => [...m, created]);
      setFormData({ name:'', fullName:'', dateCreation:'',
                    accordCadre:'', zoneIntervention:'',
                    adresse:'', responsable:'', fonction:'',
                    telephone:'', email:'', recent:true });
      alert('Membre ajouté !');
    } catch {
      alert('Erreur lors de l’ajout du membre.');
    }
  };

  // Suppression (accessible aux admins seulement)
  const handleDelete = async id => {
    if (!isAdmin || !window.confirm("Confirmez la suppression ?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method:'DELETE' });
      if (!res.ok) throw new Error();
      setMembers(m => m.filter(x => x.id !== id));
      if (selectedMember?.id === id) setSelectedMember(null);
    } catch {
      alert("Erreur lors de la suppression.");
    }
  };

  // … le reste du composant (recherche, liste, modale, statistiques) …

  return (
    <div className="min-h-screen">
      {/* … Hero, Stats, Nouveaux Membres, Recherche, Liste … */}

      {/* Suppression sur chaque carte */}
      <section className="py-8">
        <div className="grid gap-6 max-w-6xl mx-auto">
          {members.filter(m=>m.name).map(m => (
            <div key={m.id} className="relative p-4 bg-white rounded shadow">
              {isAdmin && (
                <button
                  onClick={() => handleDelete(m.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Supprimer"
                >🗑️</button>
              )}
              <div onClick={() => setSelectedMember(m)} className="cursor-pointer flex items-center">
                <Users className="text-primary mr-2" />
                <span>{m.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire d’ajout, visible seulement aux admins */}
      {isAdmin && (
        <section className="py-8 bg-white px-4">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Ajouter un nouveau membre</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                'name','fullName','dateCreation','accordCadre',
                'zoneIntervention','adresse','responsable',
                'fonction','telephone','email'
              ].map(f => (
                <input
                  key={f}
                  name={f}
                  type="text"
                  placeholder={f.charAt(0).toUpperCase()+f.slice(1)}
                  value={formData[f]}
                  onChange={e => setFormData(fd => ({ ...fd, [f]: e.target.value }))}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              ))}
              <label className="flex items-center space-x-2">
                <input
                  name="recent"
                  type="checkbox"
                  checked={formData.recent}
                  onChange={e => setFormData(fd => ({ ...fd, recent: e.target.checked }))}
                />
                <span>Adhérent récent</span>
              </label>
              <button type="submit" className="w-full bg-primary text-white py-2 rounded">
                Enregistrer le membre
              </button>
            </form>
          </div>
        </section>
      )}

      {/* … Modale de détails et section “Rejoindre la PONAH” … */}
    </div>
  );
}
