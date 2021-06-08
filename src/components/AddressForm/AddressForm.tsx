import React from 'react';
import { Community, RegistrationState } from '../../models/models';
import { Header, Text, FormField, RadioButtonGroup, Select } from 'grommet';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

interface Communities {
  district?: string;
  status: 'loading' | 'success' | 'failure' | 'clean';
  communities: Community[];
  error?: any;
}

const AddressForm = (props: {
  state: RegistrationState;
  setState: (st: RegistrationState) => void;
}): JSX.Element => {
  const [communities, setCommunities] = React.useState<Communities>({
    status: 'loading',
    communities: [],
  });

  const [selectedCommunity, setSelectedCommunity] = React.useState<number>();

  React.useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://us-east1-epi-belize.cloudfunctions.net/Locations?district=${communities.district}`,
        });
        console.dir({ response });
        setCommunities({
          ...communities,
          status: 'success',
          communities: response.data.reverse(),
        });
      } catch (e) {
        setCommunities({ ...communities, status: 'failure', error: e });
      }
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
      {communities.status == 'loading' && <Spinner size={80} />}
      {communities.status == 'success' && communities.communities.length > 0 && (
        <FormField name={'community'} label={'Municipality'} required>
          <Select
            options={communities.communities}
            id={'communities'}
            name={'community'}
            placeholder={'Select'}
            labelKey={'name'}
            valueKey={{ key: 'id' }}
            onChange={({ option }) => {
              const comm = option;
              console.log({ option, comm });
              props.setState({ ...props.state, community: comm });
              if (comm) {
                const idx = communities.communities.findIndex(
                  (c) => c.name == comm.name
                );
                console.dir({ idx, comm });
                setSelectedCommunity(idx);
              }
            }}
          />
        </FormField>
      )}
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
