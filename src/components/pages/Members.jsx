import React, { useState } from 'react';
import { Search, Users, FileText, CreditCard, CheckCircle, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = membersData.filter(member =>
    member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentMembers = membersData.filter(member => member.recent === true);
  const totalMembers = membersData.length;
  const totalRecent = recentMembers.length;
  const uniqueZones = [...new Set(membersData.map(m => m.zoneIntervention).filter(Boolean))].length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Plus de {totalMembers} ONG nationales et locales unies pour l'action humanitaire au Mali
        </p>
      </section>

      {/* Statistiques */}
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

      {/* Nouveaux membres */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nouveaux Membres 2025</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous accueillons avec fierté ces nouvelles organisations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {recentMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <h3 className="font-semibold text-gray-900 text-sm">{member.fullName}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Barre de recherche + liste complète */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tous nos Membres</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez toutes les organisations qui composent notre plateforme
            </p>
          </div>

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
              )
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucune ONG trouvée pour "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Fenêtre Modale */}
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
            </div>
          </div>
        </div>
      )}

      {/* Section Devenir membre */}
      <section className="py-20 bg-primary/5 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rejoindre la PONAH</h2>
          <p className="text-lg text-gray-700 mb-6">
            Toute ONG nationale légalement constituée, intervenant dans le domaine humanitaire au Mali,
            et adhérant aux statuts et règlement intérieur de la PONAH, peut faire une demande d’adhésion.
          </p>
          <ul className="text-left max-w-2xl mx-auto text-gray-700 mb-6 list-disc list-inside">
            <li>Lettre de demande adressée au Président</li>
            <li>Copie de l’accord cadre</li>
            <li>Paiement de la cotisation annuelle et frais d’adhésion</li>
            <li>Engagement à respecter la charte des membres</li>
          </ul>
          <a
            href="mailto:ponah.mali@gmail.com"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
          >
            Demander l'adhésion
          </a>
        </div>
      </section>
    </div>
  );
};

export default Members;
