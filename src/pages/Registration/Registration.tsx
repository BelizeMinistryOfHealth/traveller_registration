import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box, Form, Button, Grommet, ResponsiveContext } from 'grommet';
import { PersonalInfo } from '../../models/models';
import { format, parseISO } from 'date-fns';
import { useRegistration } from '../../providers/RegistrationProvider';
import { useHistory } from 'react-router-dom';
import { formTheme } from '../../themes';

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

const Registration = (): JSX.Element => {
  const { personalInfo, setPersonalInfo } = useRegistration();
  const history = useHistory();

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

  return (
    <Grommet theme={formTheme} background={{ color: 'light-6' }}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box
            fill
            pad={'medium'}
            gap={'large'}
            align={'center'}
            responsive={true}
            flex={'grow'}
            background={{ color: 'light-6' }}
          >
            <Form
              value={personalInfo}
              onChange={setPersonalInfo}
              onSubmit={() => submit()}
            >
              {size == 'small' && (
                <Box pad={'medium'} gap={'large'}>
                  <Box
                    gap={'large'}
                    pad={'medium'}
                    width={'medium'}
                    round={'medium'}
                    elevation={'small'}
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
              )}
              {size == 'medium' && (
                <Box pad={'medium'} gap={'large'}>
                  <Box
                    gridArea={'pInfo'}
                    gap={'large'}
                    pad={'medium'}
                    width={'medium'}
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
              )}
              {size == 'large' && (
                <Box pad={'medium'} gap={'large'}>
                  <Box
                    gridArea={'pInfo'}
                    gap={'large'}
                    pad={'medium'}
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
              )}
              {size == 'xlarge' && (
                <Box pad={'medium'} gap={'large'}>
                  <Box
                    gridArea={'pInfo'}
                    gap={'large'}
                    pad={'medium'}
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
              )}
            </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default Registration;
