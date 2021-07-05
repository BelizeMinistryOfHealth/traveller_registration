import React, { SetStateAction } from 'react';
import { PersonalInfo, RawAddress, TravelInfo } from '../models/models';
import { FormState } from '../../formState';

export interface RegistrationData {
  personalInfo?: PersonalInfo;
  setPersonalInfo?: React.Dispatch<SetStateAction<PersonalInfo>>;
  arrivalInfo?: TravelInfo;
  setArrivalInfo?: React.Dispatch<SetStateAction<TravelInfo>>;
  address?: RawAddress;
  setAddress?: React.Dispatch<SetStateAction<RawAddress>>;
  formState?: FormState;
  setFormState?: React.Dispatch<SetStateAction<FormState>>;
  companions?: PersonalInfo[];
  setCompanions?: React.Dispatch<SetStateAction<PersonalInfo[]>>;
}

export const RegistrationContext = React.createContext<RegistrationData>({});

export const useRegistration = () => React.useContext(RegistrationContext);

export type RegistrationProviderProps = {
  children: React.ReactNode;
};

/**
 * RegistrationProvider provides a way to keep state across different pages in a
 * multi-form registration flow.
 * @param props
 * @constructor
 */
export const RegistrationProvider = (props: RegistrationProviderProps) => {
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfo>({});
  const [arrivalInfo, setArrivalInfo] = React.useState<TravelInfo>({});
  const [address, setAddress] = React.useState<RawAddress>({});
  const [companions, setCompanions] = React.useState<PersonalInfo[]>([]);
  const [formState, setFormState] = React.useState<FormState>({
    currentPage: 'personalInfo',
  });

  return (
    <RegistrationContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        arrivalInfo,
        setArrivalInfo,
        address,
        setAddress,
        formState,
        setFormState,
        companions,
        setCompanions,
      }}
    >
      {props.children}
    </RegistrationContext.Provider>
  );
};
