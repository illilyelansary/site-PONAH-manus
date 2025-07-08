import React, { useState } from 'react';
import { Download, FileText, Calendar, Search, Filter, ExternalLink } from 'lucide-react';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      id: 1,
      title: 'Brochure de Présentation de la PONAH',
      description: 'Document de présentation officiel de la Plateforme des ONG Nationales Actives dans l\'Humanitaire.',
      category: 'brochure',
      date: '2024',
      type: 'PDF',
      size: '2.5 MB',
      pages: 8,
      downloadUrl: 'src/assets/Brochure PONA.pdf',
      featured: true
    },
    {
      id: 2,
      title: 'Rapport Annuel 2024',
      description: 'Récapitulatif complet des activités, réalisations, défis et leçons apprises de l\'année 2024.',
      category: 'rapport',
      date: 'Décembre 2024',
      type: 'PDF',
      size: '4.2 MB',
      pages: 45,
      downloadUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Document de Lobby Tour',
      description: 'Présentation de la situation humanitaire au Mali et recommandations pour la mobilisation des ressources.',
      category: 'plaidoyer',
      date: 'Juin 2024',
      type: 'PDF',
      size: '1.8 MB',
      pages: 15,
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Étude du Baromètre de la Localisation',
      description: 'Résultats de l\'étude de base sur la localisation des ONG nationales actives dans l\'humanitaire au Mali.',
      category: 'etude',
      date: 'Octobre 2024',
      type: 'PDF',
      size: '5.1 MB',
      pages: 62,
      downloadUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Statuts et Règlement Intérieur',
      description: 'Documents officiels régissant le fonctionnement de la PONAH.',
      category: 'juridique',
      date: 'Janvier 2024',
      type: 'PDF',
      size: '1.2 MB',
      pages: 18,
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Charte des Membres',
      description: 'Document définissant les droits, devoirs et engagements des membres de la PONAH.',
      category: 'juridique',
      date: 'Janvier 2024',
      type: 'PDF',
      size: '0.8 MB',
      pages: 6,
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'Guide de Gestion des Risques de Sécurité',
      description: 'Manuel pratique pour la gestion des risques sécuritaires dans les interventions humanitaires.',
      category: 'formation',
      date: 'Novembre 2024',
      type: 'PDF',
      size: '3.2 MB',
      pages: 28,
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Communiqué - Résultats du Baromètre',
      description: 'Communiqué de presse sur les résultats de l\'étude du baromètre de la localisation.',
      category: 'communique',
      date: 'Novembre 2024',
      type: 'PDF',
      size: '0.5 MB',
      pages: 3,
      downloadUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes les publications' },
    { id: 'rapport', label: 'Rapports' },
    { id: 'brochure', label: 'Brochures' },
    { id: 'etude', label: 'Études' },
    { id: 'formation', label: 'Formation' },
    { id: 'plaidoyer', label: 'Plaidoyer' },
    { id: 'juridique', label: 'Documents juridiques' },
    { id: 'communique', label: 'Communiqués' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPublications = publications.filter(pub => pub.featured);

  const stats = [
    { number: '8+', label: 'Publications disponibles' },
    { number: '200+', label: 'Pages de contenu' },
    { number: '4', label: 'Catégories principales' },
    { number: '2024', label: 'Année de création' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications & Ressources</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Accédez à nos rapports, études, guides et documents officiels
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications en vedette */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications en Vedette</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos documents les plus importants et récents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPublications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {categories.find(cat => cat.id === pub.category)?.label}
                    </span>
                    <span className="text-sm text-gray-500">{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{pub.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{pub.pages} pages</span>
                    <span>{pub.size}</span>
                    <span>{pub.type}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm flex-1 justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toutes les publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Toutes nos Publications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez notre bibliothèque complète de documents et ressources
            </p>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Barre de recherche */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher dans les publications..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Filtre par catégorie */}
              <div className="lg:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des publications */}
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {categories.find(cat => cat.id === pub.category)?.label}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {pub.date}
                      </span>
                      {pub.featured && (
                        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary/10 text-secondary">
                          En vedette
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-3">{pub.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {pub.pages} pages
                      </span>
                      <span>{pub.size}</span>
                      <span>{pub.type}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3 lg:ml-6">
                    <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Aperçu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune publication trouvée</h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section d'appel à l'action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'informations supplémentaires ?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour obtenir des documents spécifiques ou des informations complémentaires 
              sur nos activités et programmes.
            </p>
            <a
              href="mailto:ponah.mali@gmail.com"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;

