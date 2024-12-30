const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let patients = [
  {
    id: 'P-001',
    fullName: 'John Doe',
    gender: 'Male',
    age: 45,
    visitDate: '2024-12-20',
    serviceType: 'OPD',
    diagnosis: 'Diabetes',
    status: 'Complete'
  },
  {
    id: 'P-002',
    fullName: 'Jane Roe',
    gender: 'Female',
    age: 29,
    visitDate: '2024-12-21',
    serviceType: 'Maternity',
    diagnosis: 'Healthy',
    status: 'Incomplete'
  }
];


// Get all patients
app.get('/api/patients', (req, res) => {
  res.json(patients);
});



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});