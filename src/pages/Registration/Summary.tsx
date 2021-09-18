import React from 'react';
import FormContainer from '../../components/FormContainer/FormContainer';
import {
  Box,
  Card,
  CardBody,
  DataTable,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Redirect } from 'react-router-dom';
import { useRegistration } from '../../providers/RegistrationProvider';
import {
  Address,
  FormState,
  PersonalInfo,
  TravelInfo,
} from '../../models/models';
import differenceInYears from 'date-fns/differenceInYears';
import parseISO from 'date-fns/parseISO';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { RouteComponentProps } from '@reach/router';

const CompanionInfo = (props: {
  companion: PersonalInfo;
  key: string;
}): JSX.Element => {
  const { companion } = props;
  const now = new Date();
  let age = -1;
  if (companion.dob) {
    const dob = parseISO(companion.dob);
    if (dob.getDate() != NaN) {
      age = differenceInYears(now, dob);
    }
  }

  return (
    <Card
      background={{
        color: 'light-1',
        opacity: true,
      }}
      width={'large'}
      round={'medium'}
      elevation={'small'}
    >
      <CardBody>
        <Box
          direction={'column'}
          gap={'xxsmall'}
          pad={'small'}
          justify={'evenly'}
        >
          <Heading level={4}>{companion.fullName}</Heading>
          {age > -1 && (
            <Box direction={'row'} gap={'medium'}>
              <Text>{age} years old</Text> | <Text>{companion.gender}</Text>
            </Box>
          )}
          {age < 0 && (
            <Box direction={'row'} gap={'medium'}>
              <Text>Age is not available</Text> |{' '}
              <Text>{companion.gender}</Text>
            </Box>
          )}
        </Box>
      </CardBody>
    </Card>
  );
};

const CompanionsComponent = (props: {
  companions: PersonalInfo[];
}): JSX.Element => {
  const { companions } = props;
  const groupColumns = [
    { property: 'name', header: <Text>Name</Text>, primary: true },
    { property: 'age', header: <Text>Age</Text> },
    { property: 'gender', header: <Text>Gender</Text> },
  ];
  const tableData = companions.map((companion) => {
    const now = new Date();
    let age = -1;
    if (companion.dob) {
      const dob = parseISO(companion.dob);
      if (dob.getDate() != NaN) {
        age = differenceInYears(now, dob);
      }
    }
    return { name: companion.fullName, gender: companion.gender, age: age };
  });

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box gap={'large'} pad={'small'}>
          {(size == 'small' || size == 'medium') && (
            <Box gap={'medium'} fill responsive>
              {companions.map((companion) => (
                <CompanionInfo
                  companion={companion}
                  key={companion.id ?? 'should-not-be-empty'}
                />
              ))}
            </Box>
          )}
          {(size == 'large' || size == 'xlarge') && (
            <Box
              background={{
                color: 'light-1',
                opacity: true,
              }}
              round={'medium'}
              elevation={'small'}
              pad={'medium'}
              align={'center'}
              fill
            >
              <Heading level={4}>Companions</Heading>
              <DataTable
                columns={groupColumns}
                data={tableData}
                pad={{ horizontal: 'small', vertical: 'xsmall' }}
                background={{
                  header: { color: 'dark-3', opacity: 'strong' },
                  body: ['light-1', 'light-3'],
                }}
                border={{ body: 'bottom' }}
              />
            </Box>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

const Summary = (props: RouteComponentProps): JSX.Element => {
  const {
    companions,
    personalInfo,
    arrivalInfo,
    address,
    setAddress,
    setPersonalInfo,
    setArrivalInfo,
    setCompanions,
  } = useRegistration();
  const [next, setNext] = React.useState<string>('');
  const [formState, setFormState] = React.useState<FormState>({
    status: 'entry',
  });

  React.useEffect(() => {
    if (formState.status == 'saving') {
      if (personalInfo) personalInfo.portOfEntry = arrivalInfo?.portOfEntry;
      const data: {
        personalInfo: PersonalInfo;
        address: Address;
        arrivalInfo: TravelInfo;
        companions: PersonalInfo[];
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
        companions: companions ?? [],
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
              setCompanions?.([]);
              setFormState({ status: 'success' });
            } else {
              setFormState({ status: 'failure' });
            }
          })
          .catch(() => setFormState({ status: 'failure' }));
      } else {
        console.error('the API URL could not be found');
        setFormState({ status: 'failure' });
      }
    }
  }, [formState]);

  if (formState.status == 'success') {
    return <Redirect to={'/success'} />;
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

  if (formState.status === 'entry' && !personalInfo?.id) {
    return <Redirect to={'/registration'} />;
  }

  if (next === 'companion') {
    return <Redirect to={'/companion'} />;
  }

  if (next === 'registration') {
    return <Redirect to={'/registration'} />;
  }

  if (formState.status == 'saving') {
    return <Spinner size={400} />;
  }

  return (
    <FormContainer>
      <Box pad={'medium'} gap={'large'} fill>
        <Box
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
          fill
        >
          <Heading>{personalInfo?.fullName}</Heading>
          <Heading level={'3'}>Thank you for filling the application!</Heading>
          <Box
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'brand'}
            responsive={true}
            onClick={() => setFormState({ status: 'saving' })}
          >
            <Text size={'large'}>Submit Registration</Text>
          </Box>
          <Box
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'purple'}
            responsive={true}
            margin={'large'}
            gap={'medium'}
            role={'register'}
            onClick={() => setNext('companion')}
          >
            <Text size={'large'} color={'white'}>
              Register Another Visitor
            </Text>
          </Box>
        </Box>
        <Box
          justify={'center'}
          align={'center'}
          role={'companions'}
          height={'medium'}
          wrap
          responsive
        >
          {companions != undefined && (
            <CompanionsComponent companions={companions} />
          )}
        </Box>
      </Box>
    </FormContainer>
  );
};

export default Summary;
