
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePatientContext } from '../contexts/PatientContext';
import PrintableReport from '../components/PrintableReport';
import { PrintIcon, UserIcon } from '../constants';

const PatientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPatientById, isLoading } = usePatientContext();

  const patient = id ? getPatientById(id) : undefined;

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading patient details...</p>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="text-center py-10 bg-white shadow-md rounded-lg p-8 animate-fadeIn">
        <UserIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-red-600">Patient Not Found</h2>
        <p className="text-gray-600 mt-2">The patient record you are looking for does not exist or may have been removed.</p>
        <Link to="/" className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  const DetailItemView: React.FC<{label: string; value?: string | number | null}> = ({label, value}) => (
    value || value === 0 ? ( // Check for 0 explicitly if it's a valid value (e.g. age)
      <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{String(value)}</dd>
      </div>
    ) : null
  );

  return (
    <div className="animate-fadeIn">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{patient.fullName}</h1>
                    <p className="text-md text-gray-500 mt-1">Record ID: {patient.id}</p>
                </div>
                <button
                    onClick={handlePrint}
                    className="mt-4 sm:mt-0 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out flex items-center no-print"
                >
                    <PrintIcon className="w-5 h-5 mr-2" />
                    Print Report Card
                </button>
            </div>
        </div>

        <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Patient Information</h2>
            <dl className="divide-y divide-gray-200">
                <DetailItemView label="ID/Passport/Permit" value={patient.idNumber} />
                {patient.age !== '' && <DetailItemView label="Age" value={patient.age} />}
                <DetailItemView label="Gender" value={patient.gender} />
                <DetailItemView label="Contact Phone" value={patient.contactPhone} />
                <DetailItemView label="Contact Email" value={patient.contactEmail} />
                <DetailItemView label="Date of Visit" value={new Date(patient.dateOfVisit).toLocaleDateString()} />
                <DetailItemView label="Problem/Illness Description" value={patient.problemDescription} />
                <DetailItemView 
                  label="Prayer Type" 
                  value={patient.prayerType === 'Other' && patient.prayerTypeOther ? `${patient.prayerType} - ${patient.prayerTypeOther}` : patient.prayerType} 
                />
                <DetailItemView label="Minister Attending" value={patient.ministerAttending} />
                <DetailItemView label="Notes/Comments" value={patient.notes} />
                <DetailItemView label="Record Created On" value={new Date(patient.createdAt).toLocaleString()} />
            </dl>
        </div>
      </div>

      {/* Hidden printable area wrapper - content is styled by @media print */}
      <div id="printable-area-wrapper" className="hidden">
        <PrintableReport patient={patient} />
      </div>
    </div>
  );
};

export default PatientDetailPage;
