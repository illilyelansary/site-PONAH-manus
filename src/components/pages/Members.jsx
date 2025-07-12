
import React, { useEffect, useState } from 'react';
import MembersMenuPopup from '../components/common/MembersMenuPopup';
import { exportMembersToPDF } from '../utils/exportUtils';
import { useAuth } from '../../contexts/AuthContext';

export default function Members() {
  const { token } = useAuth();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error('Erreur lors du chargement des membres', err));
  }, []);

  const handleEdit = (member) => {
    console.log("Édition du membre :", member);
  };

  const handleDelete = async (id) => {
    if (confirm("Confirmer la suppression ?")) {
      try {
        await fetch(`/api/members/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        setMembers(members.filter(m => m._id !== id));
      } catch (err) {
        alert("Erreur lors de la suppression");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des membres</h2>
      <button
        onClick={() => exportMembersToPDF(members)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Exporter tous les membres en PDF
      </button>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Zone</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">{member.zone}</td>
              <td className="border px-4 py-2">
                <MembersMenuPopup
                  member={member}
                  onEdit={() => handleEdit(member)}
                  onDelete={() => handleDelete(member._id)}
                  onExportSingle={() => exportMembersToPDF([member])}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
