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

export interface Address {
  community?: Community;
  address?: string;
  accommodationName?: string;
}

export interface Community {
  id: string;
  name: string;
  district: string;
}

export type RegistrationState = PersonalInfo & TravelInfo & Address;

// export interface RegistrationProps {
//   /// Personal Info
//   firstName?: string;
//   middleName?: string;
//   lastName?: string;
//   dob?: string;
//   gender?: 'Female' | 'Male';
//   nationality?: string;
//   passportNumber?: string;
//   phoneNumbers?: string;
//   occupation?: string;
//   email?: string;
//   /// Travel Info
//   dateOfArrival?: string;
//   dateOfDeparture?: string;
//   dateOfEmbarkation?: string;
//   countryOfEmbarkation?: string;
//   travelOrigin?: string;
//   contactPerson?: string;
//   contactPersonPhoneNumber?: string;
//   contactPersonEmail?: string;
//   vesselNumber?: string;
//   modeOfTravel?: 'air' | 'land' | 'sea';
//   purposeOfTrip?:
//     | 'Tourist'
//     | 'Business'
//     | 'Student'
//     | 'Resident'
//     | 'Diplomat'
//     | 'Official';
// }
