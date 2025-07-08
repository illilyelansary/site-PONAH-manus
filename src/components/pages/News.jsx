import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const news = [
    {
      id: 1,
      title: 'Validation de la Stratégie Nationale de Localisation',
      excerpt: 'Les 9 axes stratégiques pour l\'élaboration de la Stratégie Nationale de Localisation ont été validés lors de l\'atelier de restitution.',
      content: `...`,
      date: '30 octobre 2024',
      category: 'strategie',
      readTime: '5 min',
      featured: true,
      image: '/images/news/strategie-localisation.jpg'
    },
    {
      id: 2,
      title: 'Formation de 360 acteurs sur la gestion des risques de sécurité',
      excerpt: 'Dans le cadre du projet PARTAGE, 72 OSC ont bénéficié d\'une formation complète sur la gestion des risques sécuritaires.',
      content: `...`,
      date: '15 décembre 2024',
      category: 'formation',
      readTime: '4 min',
      featured: true,
      image: '/images/news/formation-securite.jpg'
    },
    {
      id: 3,
      title: 'Mission de plaidoyer fructueuse au Qatar',
      excerpt: 'La mission conjointe FONGIM-PONAH au Qatar a permis d\'obtenir des promesses de financement et de développer de nouveaux partenariats.',
      content: `...`,
      date: '20 septembre 2024',
      category: 'plaidoyer',
      readTime: '3 min',
      featured: false,
      image: '/images/news/plaidoyer-qatar.jpg'
    },
    {
      id: 4,
      title: 'Lancement du Baromètre de la Localisation',
      excerpt: 'L\'atelier de lancement du baromètre de la localisation a posé les bases méthodologiques pour évaluer les progrès de la localisation au Mali.',
      content: `...`,
      date: '30 mai 2024',
      category: 'recherche',
      readTime: '4 min',
      featured: false,
      image: '/images/news/barometre-localisation.jpg'
    },
    {
      id: 5,
      title: 'Table Ronde sur l\'état d\'avancement des recommandations',
      excerpt: 'La PONAH a organisé une table ronde pour évaluer la mise en œuvre des 13 recommandations du Forum National sur la localisation.',
      content: `...`,
      date: '3 mai 2024',
      category: 'coordination',
      readTime: '3 min',
      featured: false,
      image: '/images/news/table-ronde.jpg'
    },
    {
      id: 6,
      title: 'Création officielle de la PONAH',
      excerpt: 'La Plateforme des ONG Nationales Actives dans l\'Humanitaire a été officiellement créée et enregistrée.',
      content: `...`,
      date: '18 janvier 2024',
      category: 'institutionnel',
      readTime: '4 min',
      featured: false,
      image: '/images/news/creation-ponah.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes les actualités', count: news.length },
    { id: 'strategie', label: 'Stratégie', count: news.filter(n => n.category === 'strategie').length },
    { id: 'formation', label: 'Formation', count: news.filter(n => n.category === 'formation').length },
    { id: 'plaidoyer', label: 'Plaidoyer', count: news.filter(n => n.category === 'plaidoyer').length },
    { id: 'recherche', label: 'Recherche', count: news.filter(n => n.category === 'recherche').length },
    { id: 'coordination', label: 'Coordination', count: news.filter(n => n.category === 'coordination').length },
    { id: 'institutionnel', label: 'Institutionnel', count: news.filter(n => n.category === 'institutionnel').length }
  ];

  const filteredNews = selectedCategory === 'all' ? news : news.filter(article => article.category === selectedCategory);
  const featuredNews = news.filter(article => article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Suivez les dernières nouvelles et développements de la PONAH
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À la Une</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Les actualités les plus importantes de la PONAH
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-left">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{article.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium group">
                    Lire la suite
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Toutes les Actualités</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explorez nos actualités par catégorie
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border border-gray-300'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredNews.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Lire plus
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune actualité trouvée</h3>
              <p className="text-gray-500">
                Aucune actualité ne correspond à cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Restez informé de nos actualités
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles 
              et mises à jour de la PONAH directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
