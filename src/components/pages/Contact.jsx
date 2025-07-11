// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  // État pour l'ouverture/fermeture des FAQs
  const [openFaq, setOpenFaq] = useState({});

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
    { icon: MapPin, title: 'Adresse', details: ['Secrétariat Permanent', 'Rue 737 Porte 419', 'Banankabougou, Bamako, Mali'] },
    { icon: Phone, title: 'Téléphone', details: ['+223 79 37 16 43'] },
    { icon: Mail, title: 'Email', details: ['ponah.mali@gmail.com'] },
    { icon: Clock, title: 'Horaires', details: ['Lundi - Vendredi: 8h00 - 17h00', 'Samedi: 8h00 - 12h00', 'Dimanche: Fermé'] },
  ];

  const quickLinks = [
    { title: 'À Propos', url: '/apropos', action: 'En savoir plus' },
    { title: 'Nos Membres', url: '/membres', action: 'Voir la liste' },
    { title: 'Nos Activités', url: '/activites', action: 'Découvrir' },
    { title: 'Publications', url: '/publications', action: 'Explorer' },
    { title: 'Actualités', url: '/actualites', action: 'Lire' },
  ];

  const equipe = [
    { name: 'El Mehdi Ag WAKINA', role: 'Président', email: 'mehdi.wakina@ponah.org' },
    { name: 'Fatoumata DIALLO', role: 'Secrétaire Générale', email: 'fatou.diallo@ponah.org' },
    { name: 'Mahamadou TRAORÉ', role: 'Trésorier', email: 'mahamadou.traore@ponah.org' },
  ];

  const faqs = [
    { q: 'Comment adhérer à la PONAH ?', a: 'Envoyez-nous une lettre de demande adressée au Président, avec copie de votre accord-cadre et vos justificatifs.' },
    { q: 'Quels sont les frais d’adhésion ?', a: 'La cotisation annuelle est de 50 000 FCFA. Les frais d’adhésion non remboursables sont de 50 000 FCFA.' },
    { q: 'Quels sont les critères d’éligibilité ?', a: 'Être une ONG nationale légalement constituée intervenant dans le domaine humanitaire au Mali et accepter nos statuts.' },
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Nous sommes là pour répondre à vos questions et vous accompagner dans vos démarches.
        </p>
      </section>

      {/* Coordonnées */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.details.map((d, j) => (
                <p key={j} className="text-gray-600">{d}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire & Carte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Nom complet *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text" name="name" required
                      className="w-full pl-10 pr-4 py-3 border rounded"
                      placeholder="Votre nom"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email" name="email" required
                      className="w-full pl-10 pr-4 py-3 border rounded"
                      placeholder="votre@email.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">Organisation</label>
                <input
                  type="text" name="organization"
                  className="w-full px-4 py-3 border rounded"
                  placeholder="Votre organisation"
                  value={formData.organization} onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2">Sujet *</label>
                <select
                  name="subject" required
                  className="w-full px-4 py-3 border rounded"
                  value={formData.subject} onChange={handleChange}
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
                <label className="block mb-2">Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    name="message" required rows={6}
                    className="w-full pl-10 pr-4 py-3 border rounded resize-none"
                    placeholder="Votre message..."
                    value={formData.message} onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 rounded flex justify-center items-center">
                <Send className="mr-2" /> Envoyer
              </button>
            </form>
          </div>

          {/* Carte & Liens rapides */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Notre Localisation</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
                <p className="text-gray-500 mt-2">Carte interactive bientôt disponible</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, i) => (
                  <li key={i} className="border-l-4 border-primary pl-4">
                    <Link to={link.url} className="font-medium text-gray-900">
                      {link.title}
                    </Link>
                    <p className="text-sm text-gray-600">{link.action} →</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Équipe dirigeante */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Équipe dirigeante</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipe.map((m, i) => (
            <div key={i} className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-primary mb-2">{m.role}</p>
              <a href={`mailto:${m.email}`} className="text-sm text-gray-600 hover:underline">{m.email}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-100"
                onClick={() => toggleFaq(i)}
              >
                <span className="font-medium">{f.q}</span>
                {openFaq[i] ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openFaq[i] && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;
