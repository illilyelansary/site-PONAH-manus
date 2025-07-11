import React, { useState } from 'react';
import { Search, Users, X } from 'lucide-react';
import membersData from '../../data/membersData';
import { useAuth } from '../../contexts/AuthContext';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '', fullName: '', dateCreation: '', accordCadre: '',
    zoneIntervention: '', adresse: '', responsable: '',
    fonction: '', telephone: '', email: '', recent: false
  });
  const { user, token } = useAuth();

  const filteredMembers = membersData.filter(member =>
    member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const recentMembers = membersData.filter(member => member.recent);
  const totalMembers = membersData.length;
  const totalRecent = recentMembers.length;
  const uniqueZones = [...new Set(membersData.map(m => m.zoneIntervention).filter(Boolean))].length;

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce membre ?")) return;
    try {
      const res = await fetch(`https://ponah-backend.onrender.com/api/members/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Échec de la suppression');
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleAddChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMember({ ...newMember, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://ponah-backend.onrender.com/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newMember)
      });
      if (!res.ok) throw new Error("Erreur lors de l'ajout du membre");
      alert("Membre ajouté avec succès !");
      setShowAddForm(false);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Plus de {totalMembers} ONG nationales et locales unies pour l'action humanitaire au Mali
        </p>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">{totalMembers}</div>
            <div className="text-gray-600">ONG Membres</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-secondary mb-2">{uniqueZones}</div>
            <div className="text-gray-600">Zones d'intervention</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-accent mb-2">{totalRecent}</div>
            <div className="text-gray-600">Nouveaux Membres 2025</div>
          </div>
        </div>
      </section>

      {/* Bouton admin */}
      {user && (
        <div className="flex justify-end max-w-7xl mx-auto px-4">
          <button onClick={() => setShowAddForm(true)} className="bg-green-600 text-white px-4 py-2 rounded">
            Ajouter un membre
          </button>
        </div>
      )}

      {/* Liste membres */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une ONG..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modale membre */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg relative p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedMember.fullName}</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Date de création:</strong> {selectedMember.dateCreation}</p>
              <p><strong>N° Accord Cadre:</strong> {selectedMember.accordCadre}</p>
              <p><strong>Zone d’intervention:</strong> {selectedMember.zoneIntervention}</p>
              <p><strong>Adresse:</strong> {selectedMember.adresse}</p>
              <p><strong>Responsable:</strong> {selectedMember.responsable}</p>
              <p><strong>Fonction:</strong> {selectedMember.fonction}</p>
              <p><strong>Téléphone:</strong> {selectedMember.telephone}</p>
              <p><strong>Email:</strong> {selectedMember.email}</p>
              {user && (
                <button
                  onClick={() => handleDelete(selectedMember._id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                >
                  Supprimer ce membre
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Formulaire ajout */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg p-6 rounded shadow relative">
            <button className="absolute top-4 right-4" onClick={() => setShowAddForm(false)}><X /></button>
            <h3 className="text-xl font-bold mb-4">Ajouter un nouveau membre</h3>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              {Object.keys(newMember).map(key => (
                key !== '_id' && key !== 'recent' ? (
                  <input
                    key={key}
                    name={key}
                    placeholder={key}
                    value={newMember[key] || ''}
                    onChange={handleAddChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                ) : key === 'recent' ? (
                  <label key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      name="recent"
                      checked={newMember.recent}
                      onChange={handleAddChange}
                      className="mr-2"
                    />
                    Nouveau membre 2025
                  </label>
                ) : null
              ))}
              <button type="submit" className="w-full bg-primary text-white py-2 rounded">Ajouter</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
