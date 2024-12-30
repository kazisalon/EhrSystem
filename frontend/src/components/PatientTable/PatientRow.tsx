

// src/components/PatientTable/TableRow.tsx
import React from 'react';
import { Patient } from '../../types/patient';

interface TableRowProps {
  patient: Patient;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ patient, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700">
      <td className="p-3">{patient.id}</td>
      <td className="p-3">{patient.fullName}</td>
      <td className="p-3">{patient.gender}</td>
      <td className="p-3">{patient.age}</td>
      <td className="p-3">{patient.visitDate}</td>
      <td className="p-3">{patient.serviceType}</td>
      <td className="p-3">{patient.diagnosis}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded ${
            patient.status === 'Complete'
              ? 'bg-green-600 text-white'
              : 'bg-yellow-500 text-black'
          }`}
        >
          {patient.status}
        </span>
      </td>
      <td className="p-3">
        <button
          onClick={() => onEdit(patient.id)}
          className="mr-2 text-blue-400 hover:text-blue-600"
        >
          View/Edit
        </button>
        {patient.status === 'Incomplete' && (
          <button
            onClick={() => onDelete(patient.id)}
            className="text-red-400 hover:text-red-600"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
