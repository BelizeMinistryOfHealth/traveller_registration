import React from 'react';
import { Box, Button, Form, Heading, ResponsiveContext, Text } from 'grommet';
import { useRegistration } from '../../providers/RegistrationProvider';
import { useHistory } from 'react-router-dom';
import AddressForm from '../../components/AddressForm/AddressForm';
import Spinner from '../../components/Spinner/Spinner';
import FormContainer from '../../components/FormContainer/FormContainer';
import { Address, PersonalInfo, TravelInfo } from '../../models/models';
import axios from 'axios';

interface FormState {
  status: 'saving' | 'success' | 'failure' | 'entry';
}

const AddressPage = () => {
  const {
    personalInfo,
    address,
    setAddress,
    arrivalInfo,
    setPersonalInfo,
    setArrivalInfo,
  } = useRegistration();
  const [formState, setFormState] = React.useState<FormState>({
    status: 'entry',
  });
  const history = useHistory();

  const submit = (e: { value: any }) => {
    setFormState({ status: 'saving' });
  };

  React.useEffect(() => {
    if (formState.status == 'saving') {
      const data: {
        personalInfo: PersonalInfo;
        address: Address;
        arrivalInfo: TravelInfo;
      } = {
        personalInfo: personalInfo as PersonalInfo,
        arrivalInfo: arrivalInfo as TravelInfo,
        address: {
          id: personalInfo?.id as string,
          accommodationName: address?.accommodationName ?? '',
          address: {
            id: address?.communityId ?? '',
            address: address?.street ?? '',
            community: {
              id: address?.communityId ?? '',
              name: address?.name ?? '',
              district: address?.district ?? '',
            },
          },
        },
      };
      const body = JSON.stringify(data);
      const { REACT_APP_API } = process.env;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      if (REACT_APP_API) {
        axios
          .post(REACT_APP_API, body, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then((r) => {
            if (r.status == 200) {
              setAddress?.({});
              setPersonalInfo?.({});
              setArrivalInfo?.({});
              setFormState({ status: 'success' });
            } else {
              setFormState({ status: 'failure' });
            }
          })
          .catch((_) => setFormState({ status: 'failure' }));
      } else {
        console.error('the API URL could not be found');
        setFormState({ status: 'failure' });
      }

      console.log({ data });
    }
  }, [formState]);

  if (formState.status == 'saving') {
    return (
      <FormContainer>
        <Heading>Saving...</Heading>
        <Spinner size={400} />
      </FormContainer>
    );
  }

  if (formState.status == 'success') {
    return (
      <FormContainer>
        <Box pad={'medium'} gap={'large'}>
          <Box
            gridArea={'pInfo'}
            gap={'xxsmall'}
            pad={'small'}
            width={'large'}
            round={'medium'}
            elevation={'small'}
            justify={'center'}
            align={'center'}
            background={{
              color: 'light-1',
              opacity: true,
            }}
          >
            <Heading>Congratulations</Heading>
            <Heading level={'3'}>
              Thank you for filling the application!
            </Heading>
            <Box
              width={'medium'}
              height={'xsmall'}
              round={'medium'}
              align={'center'}
              justify={'center'}
              background={'brand'}
              responsive={true}
              onClick={() => history.push('/registration')}
            >
              <Text size={'large'}>Register Another Visitor?</Text>
            </Box>
          </Box>
        </Box>
      </FormContainer>
    );
  }

  if (formState.status == 'failure') {
    return (
      <FormContainer>
        <Box pad={'medium'} gap={'large'}>
          <Box
            gridArea={'pInfo'}
            gap={'xxsmall'}
            pad={'small'}
            width={'large'}
            round={'medium'}
            elevation={'small'}
            background={{
              color: 'light-1',
              opacity: true,
            }}
          >
            <Heading>Oooops! An Error Occurred</Heading>
            <Heading level={'3'}>We Apologize For The Inconvenience!</Heading>
          </Box>
        </Box>
      </FormContainer>
    );
  }

  if (!personalInfo?.id) {
    history.push('/registration');
  }

  return (
    <FormContainer>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Form
            value={address}
            onChange={setAddress}
            onSubmit={(e) => submit(e)}
          >
            {size == 'small' && (
              <Box pad={'medium'} gap={'large'}>
                <Box
                  gridArea={'pInfo'}
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
              </Box>
            )}
            {size == 'small' && (
              <Box pad={'medium'} gap={'large'}>
                <Box
                  gridArea={'pInfo'}
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
              </Box>
            )}

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
          </Form>
        )}
      </ResponsiveContext.Consumer>
    </FormContainer>
  );
};

export default AddressPage;
