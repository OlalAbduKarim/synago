import React from 'react';
import { Patient } from '../types';
import { QRCodeSVG as QRCode } from 'qrcode.react';
import { ChurchLogoPlaceholder } from '../constants';

interface PrintableReportProps {
  patient: Patient;
}

const PrintableReport: React.FC<PrintableReportProps> = ({ patient }) => {
  const reportUrl = `${window.location.origin}${window.location.pathname}#/patient/${patient.id}`;

  const DetailItem: React.FC<{label: string; value?: string | number | null}> = ({label, value}) => (
    value ? (
      <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-600">{label}:</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
      </div>
    ) : null
  );

  return (
    <div id="printable-area" className="bg-white p-6 sm:p-8 font-sans">
      <header className="mb-6 pb-4 border-b-2 border-gray-300 flex justify-between items-start">
        <div>
          <ChurchLogoPlaceholder className="text-blue-700 fill-current h-16 w-auto" />
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Healing Prayer Record</h1>
        </div>
        <div className="text-right">
          {patient.id && <QRCode value={reportUrl} size={80} level="H" />}
          <p className="text-xs text-gray-500 mt-1">ID: {patient.id}</p>
          <p className="text-xs text-gray-500">Printed: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Patient Details</h2>
        <dl className="divide-y divide-gray-200">
          <DetailItem label="Full Name" value={patient.fullName} />
          <DetailItem label="ID/Passport/Permit" value={patient.idNumber} />
          {patient.age && <DetailItem label="Age" value={String(patient.age)} />}
          <DetailItem label="Gender" value={patient.gender} />
          {patient.contactPhone && <DetailItem label="Contact Phone" value={patient.contactPhone} />}
          {patient.contactEmail && <DetailItem label="Contact Email" value={patient.contactEmail} />}
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Visit & Prayer Information</h2>
        <dl className="divide-y divide-gray-200">
          <DetailItem label="Date of Visit" value={new Date(patient.dateOfVisit).toLocaleDateString()} />
          <DetailItem label="Problem/Illness Description" value={patient.problemDescription} />
          <DetailItem 
            label="Prayer Type" 
            value={patient.prayerType === 'Other' && patient.prayerTypeOther ? `${patient.prayerType} - ${patient.prayerTypeOther}` : patient.prayerType} 
          />
          {patient.ministerAttending && <DetailItem label="Minister Attending" value={patient.ministerAttending} />}
          {patient.notes && <DetailItem label="Notes/Comments" value={patient.notes} />}
        </dl>
      </section>

      <footer className="mt-10 pt-6 border-t-2 border-gray-300 text-center text-xs text-gray-500">
        <p>"Heal me, O Lord, and I shall be healed; save me, and I shall be saved, for you are my praise." - Jeremiah 17:14</p>
        <p className="mt-1">This record is confidential. Please handle with care.</p>
      </footer>
    </div>
  );
};

export default PrintableReport;