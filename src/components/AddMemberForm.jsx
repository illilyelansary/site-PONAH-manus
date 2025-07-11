import React, { useState } from 'react';

const AddMemberForm = ({ onAddMember }) => {
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    responsable: '',
    fonction: '',
    telephone: '',
    email: '',
    adresse: '',
    dateCreation: '',
    zoneIntervention: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isRecent = parseInt(formData.dateCreation?.split('-')[0], 10) >= 2024;
    onAddMember({ ...formData, recent: isRecent });
    setFormData({
      name: '',
      fullName: '',
      responsable: '',
      fonction: '',
      telephone: '',
      email: '',
      adresse: '',
      dateCreation: '',
      zoneIntervention: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ajouter un Membre</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Acronyme (ex: AMSS)" value={formData.name} onChange={handleChange} required className="input" />
        <input type="text" name="fullName" placeholder="Nom complet de l'ONG" value={formData.fullName} onChange={handleChange} required className="input" />
        <input type="text" name="responsable" placeholder="Nom du Responsable" value={formData.responsable} onChange={handleChange} className="input" />
        <input type="text" name="fonction" placeholder="Fonction" value={formData.fonction} onChange={handleChange} className="input" />
        <input type="text" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} className="input" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
        <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} className="input" />
        <input type="date" name="dateCreation" placeholder="Date de création" value={formData.dateCreation} onChange={handleChange} className="input" />
        <input type="text" name="zoneIntervention" placeholder="Zone d’intervention" value={formData.zoneIntervention} onChange={handleChange} className="input" />
      </div>
      <button type="submit" className="mt-6 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition">Ajouter le membre</button>
    </form>
  );
};

export default AddMemberForm;