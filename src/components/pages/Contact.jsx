import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Secrétariat Permanent', 'Rue 737 Porte 419', 'Banankabougou, Bamako, Mali']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+223 79 37 16 43']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ponah.mali@gmail.com']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi: 8h00 - 17h00', 'Samedi: 8h00 - 12h00', 'Dimanche: Fermé']
    }
  ];

  const quickLinks = [
    { title: 'Accueil', url: '/' },
    { title: 'À Propos', url: '/apropos' },
    { title: 'Nos Membres', url: '/membres' },
    { title: 'Nos Activités', url: '/activites' },
    { title: 'Publications', url: '/publications' },
    { title: 'Actualités', url: '/actualites' }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos démarches
          </p>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Coordonnées</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et échanger avec notre équipe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  {info.details.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire & Localisation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organisation</label>
                <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="adhesion">Demande d'adhésion</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="formation">Formation</option>
                  <option value="information">Demande d'information</option>
                  <option value="support">Support technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" /> Envoyer le message
              </button>
            </form>
          </div>

          {/* Localisation & Liens rapides */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre Localisation</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Carte interactive à venir</p>
                  <p className="text-sm text-gray-400 mt-2">Banankabougou, Bamako, Mali</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Liens Rapides</h3>
              <div className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4">
                    <Link to={link.url} className="text-primary hover:text-primary/80 font-medium">
                      {link.title} <ArrowRight className="inline-block w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Dirigeante & FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre Équipe Dirigeante</h2>
          <p className="text-center text-gray-600 mb-12">Rencontrez les responsables qui dirigent la PONAH</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Replace with actual team member data/components */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold">El Mehdi Ag WAKINA</h3>
              <p className="text-sm text-gray-500">Président</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold">Moussa A DIALLO</h3>
              <p className="text-sm text-gray-500">Vice-Président</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold">Dianguina SOUMARE</h3>
              <p className="text-sm text-gray-500">Secrétaire Général</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold">Alidji Guitteye</h3>
              <p className="text-sm text-gray-500">Trésorier Général</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Questions Fréquemment Posées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Comment adhérer à la PONAH ?</h4>
                <p className="text-gray-600 mb-2">L'adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d'adhésion (50 000 FCFA) et l'engagement à payer la cotisation annuelle.</p>
                <Link to="/membres" className="text-primary font-medium hover:underline">Voir les détails →</Link>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Quels sont les avantages d'être membre ?</h4>
                <p className="text-gray-600 mb-2">Accès aux formations, participation aux mécanismes de coordination, opportunités de financement et renforcement des capacités.</p>
                <Link to="/avis" className="text-primary font-medium hover:underline">En savoir plus →</Link>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Comment collaborer avec la PONAH ?</h4>
                <p className="text-gray-600 mb-2">Nous sommes ouverts aux partenariats avec les organisations internationales, bailleurs de fonds et institutions gouvernementales.</p>
                <Link to="/contact" className="text-primary font-medium hover:underline">Nous contacter →</Link>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Où intervient la PONAH ?</h4>
                <p className="text-gray-600 mb-2">La PONAH couvre l'ensemble du territoire malien avec ses 130+ ONG membres réparties dans toutes les régions.</p>
                <Link to="/carte" className="text-primary font-medium hover:underline">Voir la carte →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
