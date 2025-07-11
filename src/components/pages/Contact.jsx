// src/components/pages/Contact.jsx
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
    alert('Votre message a été envoyé avec succès !')
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    })
  }

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
  ]

  const quickLinks = [
    {
      title: 'À Propos',
      description: 'En savoir plus sur la PONAH et notre mission',
      action: 'Découvrir →',
      url: '/apropos'
    },
    {
      title: 'Nos Membres',
      description: 'Consultez la liste complète des ONG adhérentes',
      action: 'Voir la liste →',
      url: '/membres'
    },
    {
      title: 'Nos Activités',
      description: 'Découvrez nos projets et interventions',
      action: 'Explorer →',
      url: '/activites'
    },
    {
      title: 'Publications',
      description: 'Accédez à nos rapports et études',
      action: 'Accéder →',
      url: '/publications'
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Hero */}
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
                <div className="space-y-1">
                  {info.details.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Envoi de message */}
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" /> Envoyer le message
              </button>
            </form>
          </div>

          {/* Liens rapides & FAQ & Équipe */}
          <div className="space-y-8">
            {/* Notre Équipe Dirigeante */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre Équipe Dirigeante</h3>
              <p className="text-gray-600 mb-6">Rencontrez les responsables qui dirigent la PONAH</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'El Mehdi Ag WAKINA', role: 'Président' },
                  { name: 'Moussa A DIALLO', role: 'Vice-Président' },
                  { name: 'Dainguina SOUMARE', role: 'Secrétaire Général' },
                  { name: 'Ali­dji Guti­taye', role: 'Trésorier Général' }
                ].map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions Fréquentes */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions Fréquentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    q: 'Comment adhérer à la PONAH ?',
                    a: "L'adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d'adhésion (50 000 FCFA) et l'engagement à payer la cotisation annuelle."
                  },
                  {
                    q: "Quels sont les avantages d'être membre ?",
                    a: "Accès aux formations, participation aux mécanismes de coordination, opportunités de financement et renforcement des capacités."
                  },
                  {
                    q: 'Comment collaborer avec la PONAH ?',
                    a: "Nous sommes ouverts aux partenariats avec les organisations internationales, les bailleurs de fonds et les instituts gouvernementaux."
                  },
                  {
                    q: 'Où intervient la PONAH ?',
                    a: "La PONAH couvre l’ensemble du territoire malien avec ses 130+ ONG membres réparties dans toutes les régions du pays."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-gray-900 mb-1">{faq.q}</h4>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens Rapides */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Liens Rapides</h3>
              <div className="space-y-4">
                {quickLinks.map((link, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-gray-900">{link.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                    <Link to={link.url} className="text-primary hover:text-primary/80 text-sm font-medium">
                      {link.action}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
