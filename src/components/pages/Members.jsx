import React, { useState } from 'react';
import { Users, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = membersData.filter((member) =>
    member.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.acronyme && member.acronyme.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Membres</h1>
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Rechercher une ONG..."
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer border"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">
                  {member.acronyme || member.nom}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">{selectedMember.nom}</h2>
            <ul className="text-sm space-y-2">
              <li><strong>Acronyme:</strong> {selectedMember.acronyme}</li>
              <li><strong>Date de création:</strong> {selectedMember.date_creation}</li>
              <li><strong>N° Accord Cadre:</strong> {selectedMember.accord_cadre}</li>
              <li><strong>Adresse:</strong> {selectedMember.adresse}</li>
              <li><strong>Zone d'intervention:</strong> {selectedMember.zones}</li>
              <li><strong>Domaines d'intervention:</strong> {selectedMember.domaines}</li>
              <li><strong>Responsable:</strong> {selectedMember.responsable}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
