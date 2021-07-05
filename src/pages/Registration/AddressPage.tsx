import React from 'react';
import { Box, Button, Form, ResponsiveContext, Grommet } from 'grommet';
import { useRegistration } from '../../providers/RegistrationProvider';
import { Redirect, useHistory } from 'react-router-dom';
import AddressForm from '../../components/AddressForm/AddressForm';
import { formTheme } from '../../themes';

interface FormState {
  status: 'saving' | 'success' | 'failure' | 'entry';
}

const AddressPage = (): JSX.Element => {
  const { personalInfo, address, setAddress } = useRegistration();
  const [formState, setFormState] = React.useState<FormState>({
    status: 'entry',
  });
  const history = useHistory();

  const submit = () => {
    setAddress?.({ ...address });
    setFormState({ status: 'success' });
  };

  if (!personalInfo?.id) {
    return <Redirect to={'/registration'} />;
  }

  if (formState.status === 'success') {
    return <Redirect to={'/summary'} />;
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
            <Form
              value={address}
              onChange={setAddress}
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
                    <AddressForm />
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
                      onClick={() => history.push('/travelInfo')}
                    />
                    <Button
                      size={'large'}
                      type={'submit'}
                      label={'Save'}
                      alignSelf={'center'}
                    />
                  </Box>
                </Box>
              )}
              {size == 'medium' && (
                <Box pad={'medium'} gap={'large'}>
                  <Box
                    gap={'large'}
                    pad={'large'}
                    width={'medium'}
                    round={'medium'}
                    elevation={'small'}
                    background={{
                      color: 'light-1',
                      opacity: true,
                    }}
                  >
                    <AddressForm />
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
                      onClick={() => history.push('/travelInfo')}
                    />
                    <Button
                      size={'large'}
                      type={'submit'}
                      label={'Save'}
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
                    pad={'large'}
                    width={'large'}
                    round={'medium'}
                    elevation={'small'}
                    background={{
                      color: 'light-1',
                      opacity: true,
                    }}
                  >
                    <AddressForm />
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
                      onClick={() => history.push('/travelInfo')}
                    />
                    <Button
                      size={'large'}
                      type={'submit'}
                      label={'Save'}
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
                    pad={'large'}
                    width={'large'}
                    round={'medium'}
                    elevation={'small'}
                    background={{
                      color: 'light-1',
                      opacity: true,
                    }}
                  >
                    <AddressForm />
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
                      onClick={() => history.push('/travelInfo')}
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

export default AddressPage;
