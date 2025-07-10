import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => setSelectedArticle(article);
  const closeModal = () => setSelectedArticle(null);

  const news = [
    {
      id: 1,
      title: 'Validation de la Stratégie Nationale de Localisation',
      excerpt: 'Les 9 axes stratégiques pour l\'élaboration de la Stratégie Nationale de Localisation ont été validés lors de l\'atelier de restitution.',
      content: `L'atelier de restitution de l\'étude du Baromètre de la Localisation, tenu les 29 et 30 octobre 2024 au CICB, a marqué une étape importante dans le processus de localisation de l\'aide humanitaire au Mali.

Sous la présidence du Ministre de la Santé et du Développement Social, cet événement a réuni tous les acteurs clés de l\'écosystème humanitaire malien. Les résultats de l\'étude ont porté sur six dimensions essentielles : la capacité, la coordination, le financement, le partenariat, la participation, et la politique, influence et plaidoyer.

Les neuf axes stratégiques validés sont :
1. Cadre contextuel et légal
2. Mécanismes de coordination
3. Partenariat
4. Mécanismes de financement
5. Renforcement des capacités
6. Participation
7. Plaidoyer et communication
8. Mise en œuvre de la stratégie
9. Mécanisme de suivi évaluation et de révision

Une feuille de route a été élaborée pour guider l\'élaboration de la stratégie nationale, avec un calendrier précis allant jusqu\'à juin 2025 pour la validation finale.`,
      date: '30 octobre 2024',
      category: 'strategie',
      readTime: '5 min',
      featured: true,
      image: '/images/news1-new.jpg'
    },
    // Ajoute ici les autres articles AVEC leur texte complet (comme pour le premier)
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
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Suivez les dernières nouvelles et développements de la PONAH
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">À la Une</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center"><Tag className="w-4 h-4 mr-1" />{categories.find(c => c.id === article.category)?.label}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{article.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button onClick={() => openModal(article)} className="text-primary font-medium inline-flex items-center group">
                    Lire la suite <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Toutes les Actualités</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  selectedCategory === category.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                    <span>{categories.find(c => c.id === article.category)?.label}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <button onClick={() => openModal(article)} className="text-primary hover:text-primary/80 text-sm font-medium">
                      Lire la suite
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center mt-12 text-gray-500">Aucune actualité ne correspond à cette catégorie.</div>
          )}
        </div>
      </section>

      {/* Modale */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full mx-4 rounded-lg overflow-auto max-h-[90vh] relative p-6">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">×</button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              <Calendar className="inline w-4 h-4 mr-1" /> {selectedArticle.date} &nbsp;&nbsp;
              <Clock className="inline w-4 h-4 mr-1" /> {selectedArticle.readTime}
            </p>
            <div className="text-gray-800 whitespace-pre-line">{selectedArticle.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
