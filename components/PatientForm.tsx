
import React, { useState } from 'react';
import { PatientFormData, Gender, PrayerType } from '../types';

interface PatientFormProps {
  onSubmit: (data: PatientFormData) => void;
  initialData?: PatientFormData; // For editing, not used in this version
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const initialFormState: PatientFormData = {
    fullName: '',
    idNumber: '',
    age: '',
    gender: Gender.PREFER_NOT_TO_SAY,
    contactPhone: '',
    contactEmail: '',
    problemDescription: '',
    dateOfVisit: new Date().toISOString().split('T')[0], // Default to today
    prayerType: PrayerType.GENERAL_PRAYER,
    prayerTypeOther: '',
    notes: '',
    ministerAttending: '',
  };

  const [formData, setFormData] = useState<PatientFormData>(initialFormState);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof PatientFormData, string>>>({});

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof PatientFormData, string>> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.idNumber.trim()) errors.idNumber = "ID/Passport/Permit is required.";
    if (formData.age !== '' && (isNaN(Number(formData.age)) || Number(formData.age) <= 0)) {
      errors.age = "Age must be a positive number.";
    }
    if (!formData.problemDescription.trim()) errors.problemDescription = "Problem/Illness description is required.";
    if (!formData.dateOfVisit) errors.dateOfVisit = "Date of visit is required.";
    if (formData.prayerType === PrayerType.OTHER && !formData.prayerTypeOther?.trim()) {
        errors.prayerTypeOther = "Please specify other prayer type.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof PatientFormData]) {
        setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData(initialFormState); // Reset form after submission
    }
  };
  
  const inputClass = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  const labelClass = "block text-sm font-medium text-gray-700";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-4">Patient Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} required />
          {formErrors.fullName && <p className={errorClass}>{formErrors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="idNumber" className={labelClass}>ID/Passport/Permit No. <span className="text-red-500">*</span></label>
          <input type="text" name="idNumber" id="idNumber" value={formData.idNumber} onChange={handleChange} className={inputClass} required />
          {formErrors.idNumber && <p className={errorClass}>{formErrors.idNumber}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="age" className={labelClass}>Age</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className={inputClass} min="0" />
          {formErrors.age && <p className={errorClass}>{formErrors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender" className={labelClass}>Gender</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
            {Object.values(Gender).map(gender => <option key={gender} value={gender}>{gender}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactPhone" className={labelClass}>Contact Phone</label>
          <input type="tel" name="contactPhone" id="contactPhone" value={formData.contactPhone} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="contactEmail" className={labelClass}>Contact Email</label>
          <input type="email" name="contactEmail" id="contactEmail" value={formData.contactEmail} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="problemDescription" className={labelClass}>Problem/Illness Description <span className="text-red-500">*</span></label>
        <textarea name="problemDescription" id="problemDescription" rows={3} value={formData.problemDescription} onChange={handleChange} className={inputClass} required></textarea>
        {formErrors.problemDescription && <p className={errorClass}>{formErrors.problemDescription}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateOfVisit" className={labelClass}>Date of Visit <span className="text-red-500">*</span></label>
          <input type="date" name="dateOfVisit" id="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} className={inputClass} required />
          {formErrors.dateOfVisit && <p className={errorClass}>{formErrors.dateOfVisit}</p>}
        </div>
        <div>
          <label htmlFor="prayerType" className={labelClass}>Prayer Type</label>
          <select name="prayerType" id="prayerType" value={formData.prayerType} onChange={handleChange} className={inputClass}>
            {Object.values(PrayerType).map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>
      
      {formData.prayerType === PrayerType.OTHER && (
        <div>
          <label htmlFor="prayerTypeOther" className={labelClass}>Specify Other Prayer Type <span className="text-red-500">*</span></label>
          <input type="text" name="prayerTypeOther" id="prayerTypeOther" value={formData.prayerTypeOther} onChange={handleChange} className={inputClass} required />
          {formErrors.prayerTypeOther && <p className={errorClass}>{formErrors.prayerTypeOther}</p>}
        </div>
      )}

      <div>
        <label htmlFor="notes" className={labelClass}>Notes/Comments</label>
        <textarea name="notes" id="notes" rows={3} value={formData.notes} onChange={handleChange} className={inputClass}></textarea>
      </div>
      <div>
        <label htmlFor="ministerAttending" className={labelClass}>Minister Attending (Optional)</label>
        <input type="text" name="ministerAttending" id="ministerAttending" value={formData.ministerAttending} onChange={handleChange} className={inputClass} />
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button type="submit" className="ml-3 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Save Record
          </button>
        </div>
      </div>
    </form>
  );
};

export default PatientForm;
