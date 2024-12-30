

import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="p-3 text-left">Patient ID</th>
        <th className="p-3 text-left">Full Name</th>
        <th className="p-3 text-left">Gender</th>
        <th className="p-3 text-left">Age</th>
        <th className="p-3 text-left">Visit Date</th>
        <th className="p-3 text-left">Service Type</th>
        <th className="p-3 text-left">Diagnosis</th>
        <th className="p-3 text-left">Status</th>
        <th className="p-3 text-left">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;