import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box, Form, Button, grommet, Grommet } from 'grommet';
import TravelInfoForm from '../../components/TravelInfoForm/TravelInfoForm';
import { deepMerge } from 'grommet/utils';
import {
  Address,
  PersonalInfo,
  RegistrationState,
  TravelInfo,
} from '../../models/models';
import AddressForm from '../../components/AddressForm/AddressForm';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
});

const generateId = (formData: RegistrationState): string => {
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
  const arrivalDate = format(parseISO(formData?.dateOfArrival), 'yyyy-MM-dd');

  return `${arrivalDate}#${fname}#${lname}#${formData.passportNumber}`;
};

const saveRegistration = async (formData: RegistrationState) => {
  const id = generateId(formData);
  const personalInfo: PersonalInfo = {
    id,
    firstName: formData.firstName,
    middleName: formData.middleName,
    lastName: formData.lastName,
    dob: formData.dob,
    gender: formData.gender,
    nationality: formData.nationality,
    passportNumber: formData.passportNumber,
    phoneNumbers: formData.phoneNumbers,
    occupation: formData.occupation,
    email: formData.email,
    portOfEntry: formData.portOfEntry,
  };

  const arrivalInfo: TravelInfo = {
    id,
    dateOfArrival: formData.dateOfArrival,
    dateOfDeparture: formData.dateOfDeparture,
    dateOfEmbarkation: formData.dateOfEmbarkation,
    countryOfEmbarkation: formData.countryOfEmbarkation,
    travelOrigin: formData.travelOrigin,
    contactPerson: formData.contactPerson,
    contactPersonEmail: formData.contactPersonEmail,
    contactPersonPhoneNumber: formData.contactPersonPhoneNumber,
    vesselNumber: formData.vesselNumber,
    modeOfTravel: formData.modeOfTravel,
    purposeOfTrip: formData.purposeOfTrip,
    portOfEntry: formData.portOfEntry,
  };

  const address: Address = {
    id,
    community: formData.community,
    address: formData.address,
    accommodationName: formData.accommodationName,
  };

  const body = JSON.stringify({ personalInfo, arrivalInfo, address });
  const { REACT_APP_API } = process.env;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await axios.post(REACT_APP_API, body, {
    headers: { 'Content-Type': 'application/json' },
  });
  return 'OK';
};

interface FormStatus {
  status: 'success' | 'clean' | 'saving' | 'error';
}

const Registration = (): JSX.Element => {
  const [formData, setFormData] = React.useState<RegistrationState>({
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    passportNumber: '',
  });

  const [formStatus, setFormStatus] = React.useState<FormStatus>({
    status: 'clean',
  });

  React.useEffect(() => {
    if (formStatus.status == 'saving') {
      saveRegistration(formData)
        .then((_) => {
          setFormStatus({ status: 'success' });
        })
        .catch((err) => {
          console.error(err);
          setFormStatus({ status: 'error' });
        });
    }
  }, [formStatus]);

  const onChange = (nextValue: RegistrationState) => {
    setFormData(nextValue);
  };

  if (formStatus.status == 'saving') {
    return (
      <Grommet theme={formTheme} background={{ color: 'light-6' }} full>
        <Box
          fill
          pad={'medium'}
          gap={'large'}
          align={'center'}
          responsive={true}
          background={{ color: 'light-6' }}
        >
          <Spinner size={244} />
        </Box>
      </Grommet>
    );
  }

  return (
    <Grommet theme={formTheme} background={{ color: 'light-6' }}>
      <Box
        fill
        pad={'medium'}
        gap={'large'}
        align={'center'}
        responsive={true}
        background={{ color: 'light-6' }}
      >
        <Form
          value={formData}
          onChange={(value: RegistrationState) => onChange(value)}
          onSubmit={(e) => {
            console.log(e.value);
            console.log(format(parseISO(`${e.value.dob}`), 'yyyy-MM-dd'));
            setFormStatus({ status: 'saving' });
          }}
        >
          <Box pad={'medium'} gap={'large'}>
            <Box
              gridArea={'pInfo'}
              gap={'large'}
              pad={'large'}
              width={'large'}
              round={'medium'}
              background={{
                color: 'light-1',
                opacity: true,
              }}
            >
              <PersonalInfoForm state={formData} setState={setFormData} />
            </Box>
            <Box
              gridArea={'travelInfo'}
              responsive={true}
              width={'large'}
              gap={'medium'}
              round={'medium'}
              pad={'large'}
              background={{
                color: 'light-1',
                opacity: true,
              }}
            >
              <TravelInfoForm state={formData} setState={setFormData} />
            </Box>
            <Box
              gridArea={'travelInfo'}
              responsive={true}
              width={'large'}
              gap={'medium'}
              round={'medium'}
              pad={'large'}
              background={{
                color: 'light-1',
                opacity: true,
              }}
            >
              <AddressForm state={formData} setState={setFormData} />
            </Box>
            <Box
              align={'center'}
              pad={'large'}
              round={'medium'}
              background={{
                color: 'light-1',
                opacity: true,
              }}
            >
              <Button
                size={'large'}
                type={'submit'}
                label={'Save'}
                alignSelf={'center'}
              />
            </Box>
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
};

export default Registration;
