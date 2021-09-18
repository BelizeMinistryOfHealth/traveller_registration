import React from 'react';
import { Box, Button, Form, Grommet, ResponsiveContext } from 'grommet';
import { formTheme } from '../../themes';
import { generateId, PersonalInfo, FormState } from '../../models/models';
import { format, parseISO } from 'date-fns';
import { useRegistration } from '../../providers/RegistrationProvider';
import { Redirect, useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import CompanionInfoForm from '../../components/CompanionInfoForm';
import { RouteComponentProps } from '@reach/router';

const Companion = (props: RouteComponentProps): JSX.Element => {
  const { companions, setCompanions } = useRegistration();
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfo>({});
  const [formState, setFormState] = React.useState<FormState>({
    status: 'entry',
  });
  const history = useHistory();

  const submit = () => {
    if (personalInfo.dob) {
      setPersonalInfo?.({
        ...personalInfo,
        id: generateId(personalInfo as PersonalInfo),
        fullName: `${personalInfo?.firstName} ${
          personalInfo?.middleName ?? ''
        } ${personalInfo?.lastName}`.trim(),
        dob: format(parseISO(personalInfo?.dob as string), 'yyyy-MM-dd'),
      });
      setFormState({ status: 'saving' });
    }
  };

  React.useEffect(() => {
    if (formState.status === 'saving') {
      // do something here
      const currentCompanions = companions ?? [];
      currentCompanions.push(personalInfo);
      setCompanions?.(currentCompanions);
      setFormState({ status: 'success' });
    }
  }, [formState, personalInfo]);
  if (formState.status === 'success') {
    return <Redirect to={'/summary'} />;
  }

  if (formState.status === 'saving') {
    return <Spinner size={400} />;
  }

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
            <Form onSubmit={() => submit()}>
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
                    {size}
                    <CompanionInfoForm
                      companionInfo={personalInfo}
                      setCompanionInfo={setPersonalInfo}
                    />
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
                    <CompanionInfoForm
                      companionInfo={personalInfo}
                      setCompanionInfo={setPersonalInfo}
                    />
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
                    <CompanionInfoForm
                      companionInfo={personalInfo}
                      setCompanionInfo={setPersonalInfo}
                    />
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
                    <CompanionInfoForm
                      companionInfo={personalInfo}
                      setCompanionInfo={setPersonalInfo}
                    />
                  </Box>

                  <Box
                    align={'center'}
                    pad={'large'}
                    gap={'medium'}
                    round={'medium'}
                    direction={'row'}
                    justify={'center'}
                    background={{
                      color: 'light-1',
                      opacity: true,
                    }}
                  >
                    <Button
                      size={'large'}
                      label={'Cancel'}
                      alignSelf={'center'}
                      onClick={() => history.push('/summary')}
                    />
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

export default Companion;
