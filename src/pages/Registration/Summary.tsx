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
import { PersonalInfo } from '../../models/models';
import differenceInYears from 'date-fns/differenceInYears';
import parseISO from 'date-fns/parseISO';

// interface FormState {
//   status: 'saving' | 'success' | 'failure' | 'entry';
// }

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
        <Box direction={'column'} gap={'small'} pad={'small'}>
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
        <Box gap={'large'}>
          {(size == 'small' || size == 'medium') && (
            <>
              {companions.map((companion) => (
                <CompanionInfo
                  companion={companion}
                  key={companion.id ?? 'should-not-be-empty'}
                />
              ))}
            </>
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

const Summary = (): JSX.Element => {
  const { companions } = useRegistration();
  const [next, setNext] = React.useState<string>('');

  if (next === 'companion') {
    return <Redirect to={'/companion'} />;
  }

  if (next === 'registration') {
    return <Redirect to={'/registration'} />;
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
          <Heading>Congratulations</Heading>
          <Heading level={'3'}>Thank you for filling the application!</Heading>
          <Box
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'brand'}
            responsive={true}
            onClick={() => setNext('/registration')}
          >
            <Text size={'large'}>Submit Registration</Text>
          </Box>
          <Heading level={'5'}>Or</Heading>
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
