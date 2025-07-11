
import React, { useState } from 'react';
import { Search, Users, FileText, CreditCard, CheckCircle, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState(membersData);
  const [formData, setFormData] = useState({
    name: '', fullName: '', dateCreation: '', accordCadre: '', zoneIntervention: '',
    adresse: '', responsable: '', fonction: '', telephone: '', email: '', recent: false
  });

  const filteredMembers = members.filter(member =>
    member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers(prev => [...prev, formData]);
    setFormData({
      name: '', fullName: '', dateCreation: '', accordCadre: '', zoneIntervention: '',
      adresse: '', responsable: '', fonction: '', telephone: '', email: '', recent: false
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Plus de {members.length} ONG nationales et locales unies pour l'action humanitaire au Mali
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Ajouter un Membre</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name','fullName','dateCreation','accordCadre','zoneIntervention','adresse','responsable','fonction','telephone','email'].map(field => (
              <input
                key={field}
                type="text"
                placeholder={field}
                value={formData[field]}
                onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                className="w-full px-4 py-2 border rounded"
              />
            ))}
            <label className="block">
              <input type="checkbox" checked={formData.recent} onChange={(e) => setFormData({...formData, recent: e.target.checked})} />
              <span className="ml-2">Membre récent ?</span>
            </label>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Ajouter</button>
          </form>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une ONG..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member, index) => (
              member.name && (
                <div key={index} className="bg-white p-4 rounded shadow border hover:shadow-md cursor-pointer" onClick={() => setSelectedMember(member)}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg relative p-6">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500" onClick={() => setSelectedMember(null)}>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
