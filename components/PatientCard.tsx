
import React from 'react';
import { Link } from 'react-router-dom';
import { Patient } from '../types';
import { UserIcon } from '../constants';

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <Link to={`/patient/${patient.id}`} className="block hover:no-underline">
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
            <UserIcon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{patient.fullName}</h3>
            <p className="text-sm text-gray-500">{patient.idNumber}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p><strong className="text-gray-600">Problem:</strong> <span className="text-gray-700 truncate">{patient.problemDescription.substring(0,50)}{patient.problemDescription.length > 50 ? '...' : ''}</span></p>
          <p><strong className="text-gray-600">Date of Visit:</strong> <span className="text-gray-700">{new Date(patient.dateOfVisit).toLocaleDateString()}</span></p>
          <p><strong className="text-gray-600">Prayer Type:</strong> <span className="text-gray-700">{patient.prayerType}{patient.prayerType === 'Other' && patient.prayerTypeOther ? ` (${patient.prayerTypeOther})`: ''}</span></p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-right">
            <span className="text-xs text-indigo-600 font-semibold hover:text-indigo-800">View Details &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default PatientCard;
