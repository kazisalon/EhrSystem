
// src/pages/PatientManagement.tsx
import React from 'react';
import PatientTable from '../components/PatientTable/PatientTable';  
import { Patient } from '../types/patient';  

const PatientManagement: React.FC = () => {
  // Sample data
  const samplePatients: Patient[] = [
    {
      id: 'P-001',
      fullName: 'John Doe',
      gender: 'Male',
      age: 45,
      visitDate: '2024-12-20',
      serviceType: 'OPD',
      diagnosis: 'Diabetes',
      status: 'Complete',
    },
    {
      id: 'P-002',
      fullName: 'Jane Roe',
      gender: 'Female',
      age: 29,
      visitDate: '2024-12-21',
      serviceType: 'Maternity',
      diagnosis: 'Healthy',
      status: 'Incomplete',
    },
  ];

  const handleEdit = (id: string) => {
    console.log(`Editing patient with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting patient with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Patient Records</h1>
        <PatientTable
          patients={samplePatients}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default PatientManagement;