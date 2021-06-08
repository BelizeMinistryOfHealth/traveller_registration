export const ports = [
  'Northern Border',
  'Western Border',
  'PGIA',
  'Union',
  'Botes',
  'Dangriga Town Pier',
  'Independence',
  'Punta Gorda',
  'Jalacte',
  'Other',
  'DK/NS',
];

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
  portOfEntry?: string;
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
  portOfEntry?: string;
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
