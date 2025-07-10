import React, { useState } from 'react';
import { Users, X } from 'lucide-react';
import membersData from '../data/members_data_full.json';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = membersData.filter(member =>
    member.denomination?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.acronyme?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Nos Membres</h1>

      {/* Barre de recherche */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Rechercher une ONG..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Liste des membres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-sm">
                  {member.denomination || member.acronyme}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-primary"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-primary mb-4">
              {selectedMember.denomination}
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Acronyme :</strong> {selectedMember.acronyme}</li>
              <li><strong>Date de création :</strong> {selectedMember.date_creation}</li>
              <li><strong>Accord Cadre :</strong> {selectedMember.accord_cadre}</li>
              <li><strong>Zones d'intervention :</strong> {selectedMember.zone_intervention}</li>
              <li><strong>Adresse :</strong> {selectedMember.adresse_physique}</li>
              <li><strong>Responsable :</strong> {selectedMember.responsable}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
