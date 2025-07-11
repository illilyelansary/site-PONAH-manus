
import React, { useState } from 'react';
import { Search, Users, FileText, CreditCard, CheckCircle, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    fullName: '',
    dateCreation: '',
    accordCadre: '',
    zoneIntervention: '',
    adresse: '',
    responsable: '',
    fonction: '',
    telephone: '',
    email: ''
  });

  const filteredMembers = membersData.filter(member =>
    member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleAddMember = () => {
    if (newMember.name) {
      membersData.push(newMember);
      setNewMember({
        name: '',
        fullName: '',
        dateCreation: '',
        accordCadre: '',
        zoneIntervention: '',
        adresse: '',
        responsable: '',
        fonction: '',
        telephone: '',
        email: ''
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Nos Membres</h1>
        <p className="text-xl">ONG nationales et locales unies pour l'action humanitaire au Mali</p>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-primary">{membersData.length}</div>
            <p>ONG Membres</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-secondary">
              {[...new Set(membersData.map(m => m.zoneIntervention))].length}
            </div>
            <p>Zones d'intervention</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-accent">
              {membersData.filter(m => m.recent).length}
            </div>
            <p>Nouveaux Membres</p>
          </div>
        </div>
      </section>

      {/* Recherche */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une ONG..."
              className="pl-10 pr-4 py-2 border rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Liste */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredMembers.map((member, index) => (
            <div key={index} onClick={() => setSelectedMember(member)} className="bg-white shadow p-4 rounded cursor-pointer">
              <div className="flex items-center">
                <Users className="text-primary mr-2" />
                <h3>{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button onClick={() => setSelectedMember(null)} className="absolute top-2 right-2">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedMember.fullName}</h2>
            <p><strong>Date de création:</strong> {selectedMember.dateCreation}</p>
            <p><strong>N° Accord Cadre:</strong> {selectedMember.accordCadre}</p>
            <p><strong>Zone:</strong> {selectedMember.zoneIntervention}</p>
            <p><strong>Adresse:</strong> {selectedMember.adresse}</p>
            <p><strong>Responsable:</strong> {selectedMember.responsable}</p>
            <p><strong>Fonction:</strong> {selectedMember.fonction}</p>
            <p><strong>Téléphone:</strong> {selectedMember.telephone}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
          </div>
        </div>
      )}

      {/* Devenir membre */}
      <section className="py-16 bg-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Devenir membre</h2>
        <p className="max-w-xl mx-auto mb-6">
          Toute ONG nationale légalement constituée et active peut rejoindre la PONAH après avoir soumis :
        </p>
        <ul className="text-left max-w-xl mx-auto mb-6 list-disc list-inside">
          <li>Lettre de demande adressée au président</li>
          <li>Copie de l'accord cadre</li>
          <li>Paiement des frais d'adhésion et cotisation annuelle</li>
          <li>Acceptation de la charte et des statuts</li>
        </ul>
        <a href="mailto:ponah.mali@gmail.com" className="bg-primary text-white px-6 py-3 rounded">Faire une demande</a>
      </section>

      {/* Formulaire ajout */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Ajouter un membre</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(newMember).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key}
              value={newMember[key]}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={handleAddMember} className="bg-primary text-white px-6 py-2 rounded">Ajouter</button>
        </div>
      </section>
    </div>
  );
};

export default Members;
