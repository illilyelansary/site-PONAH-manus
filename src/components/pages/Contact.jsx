// src/components/pages/Contact.jsx
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
      details: ['Lundi - Vendredi : 8h00 - 17h00', 'Samedi : 8h00 - 12h00', 'Dimanche : Fermé']
    }
  ];

  const quickLinks = [
    {
      title: 'Adhésion à la PONAH',
      description: "Informations sur le processus d'adhésion pour les ONG nationales",
      action: 'Voir les critères',
      url: '/membres'
    },
    {
      title: 'Partenariats',
      description: 'Opportunités de collaboration avec la PONAH',
      action: 'Nous contacter',
      url: '/contact'
    },
    {
      title: 'Formations',
      description: 'Programmes de renforcement des capacités disponibles',
      action: 'En savoir plus',
      url: '/formations'
    },
    {
      title: 'Support technique',
      description: 'Assistance technique pour les membres',
      action: "Demander de l'aide",
      url: '/support'
    }
  ];

  const team = [
    {
      name: 'Elmehdi Ag WAKINA',
      role: 'Président',
      description: 'Responsable de la direction stratégique et de la représentation de la PONAH'
    },
    {
      name: 'Moussa A DIALLO',
      role: 'Vice-Président',
      description: "Appui à la direction et coordination des activités"
    },
    {
      name: 'Diangina SOUMARÉ',
      role: 'Secrétaire Général',
      description: "Gestion administrative et coordination des organes"
    },
    {
      name: 'Alidji Guitteye',
      role: 'Trésorier Général',
      description: 'Gestion financière et comptable de la plateforme'
    }
  ];

  const faqs = [
    {
      question: 'Comment adhérer à la PONAH ?',
      answer: "L’adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d’adhésion (50 000 FCFA) et l’engagement à payer la cotisation annuelle.",
      linkText: 'Voir les détails →',
      linkUrl: '/membres'
    },
    {
      question: 'Quels sont les avantages d’être membre ?',
      answer: 'Accès aux formations, participation aux mécanismes de coordination, opportunités de financement, et renforcement des capacités.',
      linkText: 'En savoir plus →',
      linkUrl: '/apropos'
    },
    {
      question: 'Comment collaborer avec la PONAH ?',
      answer: 'Nous sommes ouverts aux partenariats avec les organisations internationales, les bailleurs de fonds et les institutions gouvernementales.',
      linkText: 'Nous contacter →',
      linkUrl: '/contact'
    },
    {
      question: 'Où intervient la PONAH ?',
      answer: 'La PONAH couvre l’ensemble du territoire malien avec ses 130+ ONG membres réparties dans toutes les régions du pays.',
      linkText: 'Voir la carte →',
      linkUrl: '/apropos'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg md:text-xl">Nous sommes là pour répondre à vos questions et vous accompagner</p>
      </section>

      {/* Coordonnées */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {contactInfo.map((info, idx) => (
            <div key={idx}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((d, i) => (
                <p key={i} className="text-gray-600">{d}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="contact@exemple.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-2">Organisation</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Nom de votre organisation"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet *</label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="adhesion">Demande d'adhésion</option>
                <option value="partenariat">Partenariat</option>
                <option value="formation">Formation</option>
                <option value="information">Information</option>
                <option value="support">Support technique</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Décrivez votre demande..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center hover:bg-primary/90 transition"
            >
              <Send className="mr-2" /> Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Notre Équipe Dirigeante */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Notre Équipe Dirigeante</h2>
          <p className="text-gray-600 mt-2">Rencontrez les responsables qui dirigent la PONAH</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Questions Fréquentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Questions Fréquentes</h2>
          <p className="text-gray-600 mt-2">Trouvez rapidement des réponses aux questions les plus courantes</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md text-left">
              <h4 className="font-semibold mb-2">{faq.question}</h4>
              <p className="text-gray-600 mb-4">{faq.answer}</p>
              <Link to={faq.linkUrl} className="text-primary font-medium">
                {faq.linkText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Liens Rapides */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">Liens Rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickLinks.map((link, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-primary">
                <h4 className="font-semibold mb-2">{link.title}</h4>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <Link to={link.url} className="text-primary font-medium">
                  {link.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
