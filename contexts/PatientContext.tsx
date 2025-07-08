
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Patient, PatientFormData } from '../types';
import { generatePatientId } from '../utils/generatePatientId';

interface PatientContextType {
  patients: Patient[];
  addPatient: (patientData: PatientFormData) => Patient;
  getPatientById: (id: string) => Patient | undefined;
  isLoading: boolean;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'templeMountChurchRecords_patients';

export const PatientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedPatients = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedPatients) {
        setPatients(JSON.parse(storedPatients));
      }
    } catch (error) {
      console.error("Failed to load patients from localStorage:", error);
      // Optionally, clear corrupted data or notify user
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) { // Only save after initial load
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(patients));
      } catch (error) {
        console.error("Failed to save patients to localStorage:", error);
      }
    }
  }, [patients, isLoading]);

  const addPatient = (patientData: PatientFormData): Patient => {
    const newPatient: Patient = {
      ...patientData,
      id: generatePatientId(),
      age: patientData.age === '' ? '' : parseInt(String(patientData.age), 10), // Ensure age is number or ''
      createdAt: new Date().toISOString(),
    };
    setPatients(prevPatients => [...prevPatients, newPatient]);
    return newPatient;
  };

  const getPatientById = (id: string): Patient | undefined => {
    return patients.find(p => p.id === id);
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient, getPatientById, isLoading }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = (): PatientContextType => {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error('usePatientContext must be used within a PatientProvider');
  }
  return context;
};