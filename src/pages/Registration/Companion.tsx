import React from 'react';
import { Box, Button, Form, Grommet, ResponsiveContext } from 'grommet';
import { formTheme } from '../../themes';
import { PersonalInfo } from '../../models/models';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';

const Companion = (): JSX.Element => {
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfo>({});
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
            <Form value={personalInfo} onChange={setPersonalInfo}>
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
              </Box>
            </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default Companion;
