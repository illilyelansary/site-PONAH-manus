import React, { useState } from 'react';
import { Search, Users, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = membersData.filter(member =>
    member.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.acronyme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Section titre */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Membres</h1>
          <p className="text-xl md:text-2xl">Découvrez les ONG membres de la PONAH</p>
        </div>
      </section>

      {/* Barre de recherche */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une ONG..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Liste des membres */}
      <section className="pb-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow cursor-pointer border hover:shadow-md"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{member.nom}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Fenêtre modale */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-primary mb-4">{selectedMember.nom}</h2>
            <p><strong>Acronyme:</strong> {selectedMember.acronyme}</p>
            <p><strong>Date de création:</strong> {selectedMember.date_creation}</p>
            <p><strong>Numéro d'accord cadre:</strong> {selectedMember.accord_cadre}</p>
            <p><strong>Adresse:</strong> {selectedMember.adresse}</p>
            <p><strong>Zones d'intervention:</strong> {selectedMember.zones}</p>
            <p><strong>Domaines d'intervention:</strong> {selectedMember.domaines}</p>
            <p><strong>Responsable:</strong> {selectedMember.responsable}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
