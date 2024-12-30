
  // src/types/patient.ts
  export interface Patient {
    id: string;
    fullName: string;
    gender: 'Male' | 'Female';
    age: number;
    visitDate: string;
    serviceType: string;
    diagnosis: string;
    status: 'Complete' | 'Incomplete';
  }
  
  
  
   // src/App.tsx
 import React from 'react';
 import PatientTable from './components/PatientTable/PatientTable'; 
 import './styles/styles.css';
 
 const App: React.FC = () => {
   return (
     <div>
       <PatientTable />
     </div>
   );
 };
 
 export default App;