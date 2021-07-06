import { format } from 'date-fns';

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
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  fullName?: string;
  dob?: string;
  gender?: 'Female' | 'Male';
  nationality?: string;
  passportNumber?: string;
  phoneNumbers?: string;
  occupation?: string;
  email?: string;
  portOfEntry?: string;
}

export type PurposeOfTrip =
  | 'Tourist'
  | 'Business'
  | 'Student'
  | 'Resident'
  | 'Diplomat'
  | 'Official';

export interface TravelInfo {
  id?: string;
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
  purposeOfTrip?: PurposeOfTrip;
  portOfEntry?: string;
}

export interface AddressInBelize {
  id: string;
  address: string;
  community?: Community;
}

export interface Address {
  id: string;
  address?: AddressInBelize;
  accommodationName: string;
}

export interface AddressFormData {
  accommodationName?: string;
}

export interface AddressCommunity {
  cid?: string;
  name?: string;
  district?: string;
}

export interface Community {
  id: string;
  name: string;
  district: string;
}

export interface RawAddress {
  communityId?: string;
  name?: string;
  district?: string;
  accommodationName?: string;
  street?: string;
}

export type RegistrationState = PersonalInfo &
  TravelInfo &
  AddressFormData &
  AddressCommunity;

export const generateId = (formData: PersonalInfo): string => {
  let fname = formData.firstName;
  if (fname && fname?.length > 3) {
    fname = fname?.substring(0, 3);
  }
  let lname = formData.lastName;
  if (lname && lname?.length > 3) {
    lname = lname?.substring(0, 3);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const arrivalDate = format(new Date(), 'yyyy-MM-dd');

  return `${arrivalDate}#${fname}-${lname}#${formData.passportNumber}`;
};

export interface FormState {
  status: 'saving' | 'success' | 'failure' | 'entry';
}
