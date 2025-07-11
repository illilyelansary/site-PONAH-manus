// src/components/pages/Members.jsx
import React, { useState, useEffect } from 'react';
import { Search, Users, X } from 'lucide-react';

const API = 'https://ponah-backend.onrender.com/members';

export default function Members() {
  // States
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    dateCreation: '',
    accordCadre: '',
    zoneIntervention: '',
    adresse: '',
    responsable: '',
    fonction: '',
    telephone: '',
    email: '',
    recent: true
  });

  // 1. Charger les membres depuis le backend
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error('Erreur chargement membres :', err));
  }, []);

  // 2. Requête POST pour ajouter un membre
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Échec de l’enregistrement');
      // Mettre à jour localement sans recharger
      setMembers(prev => [...prev, formData]);
      // Réinitialiser le form
      setFormData({
        name: '',
        fullName: '',
        dateCreation: '',
        accordCadre: '',
        zoneIntervention: '',
        adresse: '',
        responsable: '',
        fonction: '',
        telephone: '',
        email: '',
        recent: true
      });
      alert('Membre ajouté !');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout du membre');
    }
  };

  // 3. Gestion des champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(fd => ({
      ...fd,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 4. Filtrage pour la recherche
  const filtered = members.filter(m =>
    m.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 5. Calcul statistiques
  const totalMembers = members.length;
  const recentCount = members.filter(m => m.recent).length;
  const uniqueZones = [...new Set(members.map(m => m.zoneIntervention).filter(Boolean))].length;

  return (
    <div className="min-h-screen">

      {/* Hero & Statistiques */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Membres</h1>
        <p className="mb-8">{totalMembers} ONG nationales et locales unies pour l'action humanitaire au Mali</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{totalMembers}</div>
            <div>Membres</div>
          </div>
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{uniqueZones}</div>
            <div>Zones</div>
          </div>
          <div className="bg-white/20 p-6 rounded">
            <div className="text-3xl font-bold">{recentCount}</div>
            <div>Nouveaux 2024</div>
          </div>
        </div>
      </section>

      {/* Nouveaux Membres */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nouveaux Membres 2024</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.filter(m => m.recent).map((m,i) => (
            <div key={i}
                 onClick={() => setSelectedMember(m)}
                 className="p-4 border-l-4 border-primary rounded shadow cursor-pointer hover:bg-gray-50">
              <h3 className="font-semibold">{m.fullName}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Recherche */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une ONG..."
            className="w-full pl-10 pr-4 py-2 border rounded"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Liste des Membres */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((m,i) => (
            <div key={i}
                 onClick={() => setSelectedMember(m)}
                 className="p-4 bg-white rounded shadow hover:shadow-md cursor-pointer">
              <div className="flex items-center space-x-2">
                <Users className="text-primary" />
                <span className="font-medium">{m.name}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center col-span-full">Aucun membre trouvé.</p>}
        </div>
      </section>

      {/* Modal Détails */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-lg w-full">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedMember.fullName}</h2>
            <ul className="space-y-1 text-sm">
              <li><strong>Nom court :</strong> {selectedMember.name}</li>
              <li><strong>Date :</strong> {selectedMember.dateCreation}</li>
              <li><strong>Accord cadre :</strong> {selectedMember.accordCadre}</li>
              <li><strong>Zone :</strong> {selectedMember.zoneIntervention}</li>
              <li><strong>Adresse :</strong> {selectedMember.adresse}</li>
              <li><strong>Responsable :</strong> {selectedMember.responsable}</li>
              <li><strong>Fonction :</strong> {selectedMember.fonction}</li>
              <li><strong>Téléphone :</strong> {selectedMember.telephone}</li>
              <li><strong>Email :</strong> {selectedMember.email}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Devenir membre (section statique) */}
      <section className="py-16 bg-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoindre la PONAH</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Toute ONG nationale légalement constituée et intervenant dans l’humanitaire peut adhérer en fournissant :
        </p>
        <ul className="max-w-2xl mx-auto list-disc list-inside text-left mb-6">
          <li>Lettre de demande adressée au Président</li>
          <li>Copie de l’accord cadre</li>
          <li>Paiement de la cotisation et frais d’adhésion</li>
          <li>Acceptation des statuts et de la charte</li>
        </ul>
      </section>

      {/* Formulaire d’ajout (connecté au backend) */}
      <section className="py-8 bg-white px-4">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">Ajouter un nouveau membre</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name','fullName','dateCreation','accordCadre','zoneIntervention','adresse','responsable','fonction','telephone','email'].map(f => (
              <input
                key={f}
                name={f}
                type="text"
                placeholder={f.charAt(0).toUpperCase()+f.slice(1)}
                value={formData[f]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            ))}
            <label className="flex items-center space-x-2">
              <input
                name="recent"
                type="checkbox"
                checked={formData.recent}
                onChange={handleChange}
              />
              <span>Adhérent récent</span>
            </label>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded">
              Enregistrer le membre
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
