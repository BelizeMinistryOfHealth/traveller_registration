import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box, Form, Button, grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import {
  Address,
  PersonalInfo,
  RegistrationState,
  TravelInfo,
} from '../../models/models';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { useRegistration } from '../../providers/RegistrationProvider';
import { useHistory } from 'react-router-dom';

const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
});

const generateId = (formData: PersonalInfo): string => {
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

const saveRegistration = async (formData: RegistrationState) => {
  // const body = JSON.stringify({ personalInfo, arrivalInfo, address });
  // const { REACT_APP_API } = process.env;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // await axios.post(REACT_APP_API, body, {
  //   headers: { 'Content-Type': 'application/json' },
  // });
  return 'OK';
};

interface FormStatus {
  status: 'success' | 'clean' | 'saving' | 'error';
}

interface FormState {
  currentPage: 'personalInfo' | 'travelInfo' | 'address' | 'saving' | 'saved';
}

const Registration = (): JSX.Element => {
  const { personalInfo, setPersonalInfo } = useRegistration();
  const history = useHistory();

  const [formStatus, setFormStatus] = React.useState<FormStatus>({
    status: 'clean',
  });

  const submit = () => {
    setPersonalInfo?.({
      ...personalInfo,
      id: generateId(personalInfo as PersonalInfo),
      fullName: `${personalInfo?.firstName} ${personalInfo?.middleName ?? ''} ${
        personalInfo?.lastName
      }`.trim(),
      dob: format(parseISO(personalInfo?.dob as string), 'yyyy-MM-dd'),
    });
    history.push('/travelInfo');
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
          value={personalInfo}
          onChange={setPersonalInfo}
          onSubmit={() => submit()}
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
              <PersonalInfoForm />
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
                label={'Next'}
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
