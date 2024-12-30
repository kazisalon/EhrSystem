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
  
  export type CreatePatientDto = Omit<Patient, 'id'>;