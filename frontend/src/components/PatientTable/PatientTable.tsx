// src/components/PatientTable.tsx
import React, { useState, useEffect } from 'react';
import PatientForm from './PatientForm.tsx';
import { Patient } from '../../types/patient'; 
import '../../styles/styles.css'

const PatientTable: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | undefined>();

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleCreate = async (patientData: Omit<Patient, 'id'>) => {
    try {
      const response = await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });
      
      if (response.ok) {
        fetchPatients();
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  const handleUpdate = async (patientData: Omit<Patient, 'id'>) => {
    if (!editingPatient) return;

    try {
      const response = await fetch(`http://localhost:5000/api/patients/${editingPatient.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      if (response.ok) {
        fetchPatients();
        setShowForm(false);
        setEditingPatient(undefined);
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPatients();
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Patient Records</h1>
        <button 
          className="btn btn-success"
          onClick={() => {
            setEditingPatient(undefined);
            setShowForm(true);
          }}
        >
          Add New Patient
        </button>
      </div>

      {showForm && (
        <PatientForm
          onSubmit={editingPatient ? handleUpdate : handleCreate}
          onCancel={() => {
            setShowForm(false);
            setEditingPatient(undefined);
          }}
          initialData={editingPatient}
        />
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Visit Date</th>
              <th>Service Type</th>
              <th>Diagnosis</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.fullName}</td>
                <td>{patient.gender}</td>
                <td>{patient.age}</td>
                <td>{patient.visitDate}</td>
                <td>{patient.serviceType}</td>
                <td>{patient.diagnosis}</td>
                <td>
                  <span className={`status-${patient.status.toLowerCase()}`}>
                    {patient.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setEditingPatient(patient);
                      setShowForm(true);
                    }}
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;

