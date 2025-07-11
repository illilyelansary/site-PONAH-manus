// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { title: 'Accueil', to: '/' },
    { title: 'À Propos', to: '/apropos' },
    { title: 'Nos Membres', to: '/membres' },
    { title: 'Nos Activités', to: '/activites' },
    { title: 'Publications', to: '/publications' },
    { title: 'Actualités', to: '/actualites' },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & description */}
        <div>
          <h3 className="text-xl font-bold mb-4">PONAH</h3>
          <p>Plateforme des ONG Nationales Actives dans l'Humanitaire au Mali</p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold mb-2">Liens rapides</h4>
          <ul>
            {quickLinks.map(link => (
              <li key={link.title} className="mb-1">
                <Link to={link.to} className="hover:underline">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: ponah.mali@gmail.com</p>
          <p>Téléphone: +223 XX XX XX XX</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} PONAH. Tous droits réservés.
      </div>
    </footer>
  );
}
