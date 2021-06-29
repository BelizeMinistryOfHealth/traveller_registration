import React from 'react';
import { Community } from '../../models/models';
import { Header, Text, FormField, RadioButtonGroup, Select } from 'grommet';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useRegistration } from '../../providers/RegistrationProvider';

interface Communities {
  district?: string;
  status: 'loading' | 'success' | 'failure' | 'clean';
  communities: Community[];
  error?: any;
}

const AddressForm = (): JSX.Element => {
  const { personalInfo, address, setAddress } = useRegistration();
  const [communities, setCommunities] = React.useState<Communities>({
    status: 'loading',
    communities: [],
  });
  const [community, setCommunity] = React.useState<Community>();

  React.useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://us-east1-epi-belize.cloudfunctions.net/Locations?district=${communities.district}`,
        });
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
        <Text size={'xlarge'}>
          Address In Belize | {personalInfo?.fullName}
        </Text>
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
        <FormField name={'name'} label={'Municipality'} required>
          <Select
            options={communities.communities}
            id={'communities'}
            name={'name'}
            placeholder={'Select'}
            labelKey={'name'}
            valueKey={{ key: 'id' }}
            value={community}
            onChange={({ option }) => {
              const comm = option;
              if (comm) {
                const idx = communities.communities.findIndex(
                  (c) => c.name == comm.name
                );
                console.dir({ idx, comm });
                setAddress?.({
                  ...address,
                  communityId: comm.id,
                  name: comm.name,
                });
                setCommunity(comm);
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
      <FormField name={'street'} label={'Street'} placeholder={'Street'} />
    </>
  );
};

export default AddressForm;
