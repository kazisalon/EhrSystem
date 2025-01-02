// src/components/PatientForm.tsx
import React, { useState, useEffect } from 'react';
import { Patient } from '../../types/patient'; 
import '../../styles/styles.css'

interface PatientFormProps {
  onSubmit: (patient: Omit<Patient, 'id'>) => void;
  onCancel: () => void;
  initialData?: Patient;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    age: '',
    visitDate: '',
    serviceType: '',
    diagnosis: '',
    status: 'Incomplete'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        age: initialData.age.toString()
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit({
    // //   ...formData,
    // //   age: parseInt(formData.age)
    // });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              className="form-control"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              className="form-control"
              value={formData.gender}
              onChange={e => setFormData({ ...formData, gender: e.target.value as 'Male' | 'Female' })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              className="form-control"
              value={formData.age}
              onChange={e => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Visit Date:</label>
            <input
              type="date"
              className="form-control"
              value={formData.visitDate}
              onChange={e => setFormData({ ...formData, visitDate: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Service Type:</label>
            <input
              type="text"
              className="form-control"
              value={formData.serviceType}
              onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Diagnosis:</label>
            <input
              type="text"
              className="form-control"
              value={formData.diagnosis}
              onChange={e => setFormData({ ...formData, diagnosis: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              className="form-control"
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value as 'Complete' | 'Incomplete' })}
            >
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {initialData ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;