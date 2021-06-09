import React from 'react';
import { Box, Grommet, Form, Button } from 'grommet';
import { formTheme } from '../../themes';
import { useRegistration } from '../../providers/RegistrationProvider';
import TravelInfoForm from '../../components/TravelInfoForm/TravelInfoForm';
import { useHistory } from 'react-router-dom';

const TravelInfoPage = () => {
  const { personalInfo, arrivalInfo, setArrivalInfo } = useRegistration();
  const history = useHistory();

  const submit = () => {
    setArrivalInfo?.({
      ...arrivalInfo,
      id: personalInfo?.id,
    });
    history.push('/address');
  };

  if (!personalInfo?.id) {
    history.push('/registration');
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
          value={arrivalInfo}
          onChange={setArrivalInfo}
          onSubmit={(_) => submit()}
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
              <TravelInfoForm />
            </Box>
            <Box
              direction={'row'}
              justify={'center'}
              align={'center'}
              pad={'large'}
              gap={'medium'}
              round={'medium'}
              background={{
                color: 'light-1',
                opacity: true,
              }}
            >
              <Button
                size={'large'}
                label={'Previous'}
                alignSelf={'center'}
                onClick={() => history.push('/registration')}
              />
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

export default TravelInfoPage;
