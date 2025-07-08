import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

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
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Secrétariat Permanent',
        'Rue 737 Porte 419',
        'Banankabougou, Bamako, Mali'
      ]
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
      details: [
        'Lundi - Vendredi: 8h00 - 17h00',
        'Samedi: 8h00 - 12h00',
        'Dimanche: Fermé'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Elmehdi Ag WAKINA',
      position: 'Président',
      description: 'Responsable de la direction stratégique et de la représentation de la PONAH'
    },
    {
      name: 'Moussa A DIALLO',
      position: 'Vice-Président',
      description: 'Appui à la direction et coordination des activités'
    },
    {
      name: 'Dianguina SOUMARE',
      position: 'Secrétaire Général',
      description: 'Gestion administrative et coordination des organes'
    },
    {
      name: 'Alidji Guitteye',
      position: 'Trésorier Général',
      description: 'Gestion financière et comptable de la plateforme'
    }
  ];

  const quickLinks = [
    {
      title: 'Adhésion à la PONAH',
      description: 'Informations sur le processus d\'adhésion pour les ONG nationales',
      action: 'Voir les critères'
    },
    {
      title: 'Partenariats',
      description: 'Opportunités de collaboration avec la PONAH',
      action: 'Nous contacter'
    },
    {
      title: 'Formations',
      description: 'Programmes de renforcement des capacités disponibles',
      action: 'En savoir plus'
    },
    {
      title: 'Support technique',
      description: 'Assistance technique pour les membres',
      action: 'Demander de l\'aide'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et vous accompagner dans vos démarches
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Coordonnées</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et échanger avec notre équipe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et carte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nom de votre organisation"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Carte et informations supplémentaires */}
            <div className="space-y-8">
              {/* Carte */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre Localisation</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Carte interactive à venir</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Banankabougou, Bamako, Mali
                    </p>
                  </div>
                </div>
              </div>

              {/* Liens rapides */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Liens Rapides</h3>
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-gray-900">{link.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium">
                        {link.action} →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe dirigeante */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe Dirigeante</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rencontrez les responsables qui dirigent la PONAH
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus courantes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Comment adhérer à la PONAH ?
              </h3>
              <p className="text-gray-600 mb-4">
                L'adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais 
                d'adhésion (50 000 FCFA) et l'engagement à payer la cotisation annuelle.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                Voir les détails →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quels sont les avantages d'être membre ?
              </h3>
              <p className="text-gray-600 mb-4">
                Accès aux formations, participation aux mécanismes de coordination, 
                opportunités de financement, et renforcement des capacités.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                En savoir plus →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Comment collaborer avec la PONAH ?
              </h3>
              <p className="text-gray-600 mb-4">
                Nous sommes ouverts aux partenariats avec les organisations internationales, 
                les bailleurs de fonds et les institutions gouvernementales.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                Nous contacter →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Où intervient la PONAH ?
              </h3>
              <p className="text-gray-600 mb-4">
                La PONAH couvre l'ensemble du territoire malien avec ses 130+ ONG membres 
                réparties dans toutes les régions du pays.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                Voir la carte →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

