import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box, Form, Button, grommet, Grommet } from 'grommet';
import TravelInfoForm from '../../components/TravelInfoForm/TravelInfoForm';
import { deepMerge } from 'grommet/utils';
import { RegistrationState } from '../../models/models';
import AddressForm from '../../components/AddressForm/AddressForm';

const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
});

const Registration = (): JSX.Element => {
  const [formData, setFormData] = React.useState<RegistrationState>({
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    passportNumber: '',
  });

  const onChange = (nextValue: RegistrationState) => {
    // console.log(nextValue);
    setFormData(nextValue);
  };

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
          onSubmit={(e) => console.log(e.value)}
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
