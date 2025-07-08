
import React from 'react';
import { Link } from 'react-router-dom';
import { usePatientContext } from '../contexts/PatientContext';
import PatientCard from '../components/PatientCard';
import { PlusIcon } from '../constants';

const HomePage: React.FC = () => {
  const { patients, isLoading } = usePatientContext();

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading records...</p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Patient Records</h1>
        <Link
          to="/add"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New Record
        </Link>
      </div>

      {patients.length === 0 ? (
        <div className="text-center py-12 bg-white shadow-md rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No patient records found.</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding a new patient record.</p>
          <div className="mt-6">
            <Link
              to="/add"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
              Add New Record
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.slice().sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map(patient => ( // Sort by newest first
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
