
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
  PREFER_NOT_TO_SAY = 'Prefer not to say',
}

export enum PrayerType {
  DELIVERANCE = 'Deliverance',
  HEALING = 'Healing',
  COUNSELING = 'Counseling',
  GENERAL_PRAYER = 'General Prayer',
  OTHER = 'Other',
}

export interface Patient {
  id: string; // Unique identifier, e.g., PRAY-2024-abcdef
  fullName: string;
  idNumber: string; // ID/Passport/Permit
  age: number | '';
  gender: Gender;
  contactPhone?: string;
  contactEmail?: string;
  problemDescription: string;
  dateOfVisit: string; // YYYY-MM-DD
  prayerType: PrayerType;
  prayerTypeOther?: string; // If PrayerType.OTHER
  notes?: string;
  ministerAttending?: string;
  createdAt: string; // ISO date string
}

export interface PatientFormData {
  fullName: string;
  idNumber: string;
  age: string; // string for form input, will be converted
  gender: Gender;
  contactPhone?: string;
  contactEmail?: string;
  problemDescription: string;
  dateOfVisit: string;
  prayerType: PrayerType;
  prayerTypeOther?: string;
  notes?: string;
  ministerAttending?: string;
}
