export interface PersonalInfo {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  gender?: 'Female' | 'Male';
  nationality?: string;
  passportNumber?: string;
  phoneNumbers?: string;
  occupation?: string;
  email?: string;
}

export interface TravelInfo {
  dateOfArrival?: string;
  dateOfDeparture?: string;
  dateOfEmbarkation?: string;
  countryOfEmbarkation?: string;
  travelOrigin?: string;
  contactPerson?: string;
  contactPersonPhoneNumber?: string;
  contactPersonEmail?: string;
  vesselNumber?: string;
  modeOfTravel?: 'air' | 'land' | 'sea';
  purposeOfTrip?:
    | 'Tourist'
    | 'Business'
    | 'Student'
    | 'Resident'
    | 'Diplomat'
    | 'Official';
}
