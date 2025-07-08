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
    { name: 'AMAPROS' }, { name: 'AMCFE' }, { name: 'AMSODE' },
    { name: 'AMSS', url: 'https://www.ong-amss.org' },
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

  const recentMembers = [
    'Association pour le Développement et d\'Appui aux Initiatives Villageoises (ADAIV)',
    'Association pour la Promotion de la Formation et l\'Emploi des Jeunes (A.Pro.F.E.J)',
    'ONG Carrefour Développement (CAR.D)',
    'Association Subaahi Gumo (ASG)',
    'Association pour la Promotion des Filles déscolarisées au Mali (A.PRO.FI.D.Mali)',
    'Association Pour le Service de la Nation (APSN)',
    'Union pour un Avenir écologique et Solidaire (UAVES)',
    'Association pour le Développement, Solidarité et la Paix au Mali (ADSPM)',
    'Action pour le Développement du Mali (ADM)',
    'Farafina Kuna Wolo (Afrique Jeunes)',
    'Collectif cri du cœur (CCC)',
    'Groupe de Recherche Action de Formation pour le Développement (GRAFODEL)'
  ];

  const adhesionSteps = [
    {
      icon: FileText,
      title: 'Demande d\'adhésion',
      description: 'Soumettre une demande timbrée adressée au Président de la PONAH'
    },
    {
      icon: CheckCircle,
      title: 'Accord Cadre',
      description: 'Fournir l\'Accord Cadre de votre organisation'
    },
    {
      icon: CreditCard,
      title: 'Frais d\'adhésion',
      description: 'Libérer les frais d\'adhésion de 50 000 FCFA (non remboursable)'
    },
    {
      icon: Users,
      title: 'Cotisation annuelle',
      description: 'S\'engager à payer la cotisation annuelle de 50 000 FCFA'
    }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Plus de 130 ONG nationales et locales unies pour l'action humanitaire au Mali
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">130+</div>
            <div className="text-gray-600">ONG Membres</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-secondary mb-2">11</div>
            <div className="text-gray-600">Régions Couvertes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-accent mb-2">13</div>
            <div className="text-gray-600">Domaines d'Intervention</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Nouveaux Membres 2024</div>
          </div>
        </div>
      </section>

      {/* Nouveaux membres */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nouveaux Membres 2024</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous accueillons avec fierté ces nouvelles organisations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {recentMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="font-semibold text-gray-900 text-sm">{member}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Barre de recherche + liste */}
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
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
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
      </section>

      {/* Adhésion */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rejoindre la PONAH</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L'adhésion à la PONAH est libre et volontaire pour toute ONG nationale qui accepte nos statuts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {adhesionSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm text-primary font-medium mb-2">Étape {index + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Critères */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Critères d'Adhésion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Être une ONG nationale légalement reconnue',
              'Intervenir dans le domaine humanitaire',
              'Accepter les statuts et règlement intérieur',
              'Disposer d\'un Accord Cadre valide',
              'S\'acquitter des frais d\'adhésion et cotisations',
              'Respecter la charte des membres'
            ].map((critere, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{critere}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="mailto:ponah.mali@gmail.com"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Demander l'adhésion
          </a>
        </div>
      </section>
    </div>
  );
};

export default Members;
