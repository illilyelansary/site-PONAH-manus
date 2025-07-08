import React, { useState } from 'react';
import { Search, Users, FileText, CreditCard, CheckCircle } from 'lucide-react';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    { name: 'AADECOM' }, { name: 'AADI' }, { name: 'AAFDRK' }, { name: 'AAKLMFE' },
    { name: 'ACD' }, { name: 'AEPPDGJR (HONNEY)' }, { name: 'ACESEM' }, { name: 'ADAIV' },
    { name: 'ADCOPS' }, { name: 'ADD MALI' }, { name: 'ADDF-MALI' }, { name: 'ADENORD' },
    { name: 'ADICOM' }, { name: 'ADIL-MALI' }, { name: 'ADT' }, { name: 'AFAD' },
    { name: 'AFDP' }, { name: 'AFEM' }, { name: 'AID-ZL' }, { name: 'AJA-MALI' },
    { name: 'AJDM' }, { name: 'RED' }, { name: 'AMADE-PELCODE' }, { name: 'AMALED' },
    { name: 'AMAPROS' }, { name: 'AMCFE' }, { name: 'AMSODE' }, { name: 'AMSS', url: 'https://www.ong-amss.org' },
    { name: 'APEP' }, { name: 'APHALOG' }, { name: 'APIF' }, { name: 'A.PRO.F.E.J' },
    { name: 'APROFID' }, { name: 'APSM' }, { name: 'APSN' }, { name: 'ARDIL' },
    { name: 'ARDS' }, { name: 'ASDAP' }, { name: 'ASDEMIN' }, { name: 'ASG' },
    { name: 'ASPODLCE' }, { name: 'ASREF' }, { name: 'ASSADDEC' }, { name: 'ASSAHSSAL' },
    { name: 'ASSOPROFEN' }, { name: 'AVENIR' }, { name: 'AVS' }, { name: 'AZHAR' },
    { name: 'CAEB' }, { name: 'CARD' }, { name: 'CASE SAHEL' }, { name: 'CERCA' },
    { name: 'CRADI' }, { name: 'DDRNAS' }, { name: "EFES N'TAMADRITE" }, { name: 'EFFAD' },
    { name: 'ENDA-MALI' }, { name: 'ERADD' }, { name: 'FEDE' }, { name: 'FORJEC' },
    { name: 'GARDEL' }, { name: 'GRADECOM' }, { name: 'GREFFA' }, { name: 'GROUPE GOURMA' },
    { name: 'HELP-SAHEL' }, { name: 'IMADEL' }, { name: 'OMAES' }, { name: 'OMPIDES' },
    { name: 'OPEN-MALI' }, { name: 'PADI' }, { name: 'PIEAPCD' }, { name: 'RAC' },
    { name: 'STOP-SAHEL' }, { name: 'TASSAGHT' }, { name: 'THINK PEACE' }, { name: 'TILALTE' },
    { name: 'WALE' }, { name: 'Windila Konda (WK)' }, { name: 'WOIYO KONDEYE' }, { name: 'YA-G-TU' }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher une ONG..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 text-sm hover:underline"
                  >
                    {member.name}
                  </a>
                ) : (
                  <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Aucune ONG trouvée pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Members;
