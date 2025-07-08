
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientForm from '../components/PatientForm';
import { usePatientContext } from '../contexts/PatientContext';
import { PatientFormData } from '../types';
import { toast } from 'react-toastify';

const AddPatientPage: React.FC = () => {
  const { addPatient } = usePatientContext();
  const navigate = useNavigate();

  const handleSubmit = (data: PatientFormData) => {
    const newPatient = addPatient(data);
    toast.success('Patient record added successfully!');
    navigate(`/patient/${newPatient.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Patient Record</h1>
      <PatientForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPatientPage;
