import React from 'react';
import { RegistrationState } from '../../models/models';
import { Header, Text, FormField, RadioButtonGroup } from 'grommet';
import axios from 'axios';

interface Communities {
  district?: string;
  status: 'loading' | 'success' | 'failure' | 'clean';
  communities?: string[];
  error?: any;
}

const AddressForm = (props: {
  state: RegistrationState;
  setState: (st: RegistrationState) => void;
}): JSX.Element => {
  const [communities, setCommunities] = React.useState<Communities>({
    status: 'clean',
  });

  React.useEffect(() => {
    const fetchCommunities = async () => {
      const response = await axios({
        method: 'GET',
        url: `https://us-east1-epi-belize.cloudfunctions.net/Locations?district=${communities.district}`,
      });
      console.dir({ response });
    };
    if (communities.status == 'loading') {
      fetchCommunities();
    }
  }, [communities]);

  return (
    <>
      <Header>
        <Text size={'xlarge'}>Address In Belize</Text>
      </Header>
      <FormField
        name={'district'}
        label={'District'}
        onChange={(v) =>
          setCommunities({
            ...communities,
            status: 'loading',
            district: v.target.value,
          })
        }
        required
      >
        <RadioButtonGroup
          name={'district'}
          options={[
            'Belize',
            'Cayo',
            'Stann Creek',
            'Corozal',
            'Toledo',
            'Orange Walk',
          ]}
        />
      </FormField>
      <FormField
        name={'accommodationName'}
        label={'Gold Standard Hotel'}
        placeholder={'Gold Standard Hotel'}
      />
      <FormField name={'address'} label={'Street'} placeholder={'Street'} />
    </>
  );
};

export default AddressForm;
