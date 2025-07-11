
import React, { useState } from 'react';
import { Search, Users, FileText, CreditCard, CheckCircle, X } from 'lucide-react';
import membersData from '../../data/membersData';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = membersData.filter(member =>
    member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Plus de 130 ONG nationales et locales unies pour l'action humanitaire au Mali
          </p>
        </div>
      </section>
    </div>
  );
};

export default Members;
