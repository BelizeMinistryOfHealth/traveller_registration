import React from 'react';
import { DateInput, FormField, Header, RadioButtonGroup, Text } from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { RegistrationState } from '../../models/models';

const TravelInfoForm = (props: {
  state: RegistrationState;
  setState: (st: RegistrationState) => void;
}): JSX.Element => {
  return (
    <>
      <Header>
        <Text size={'xlarge'}>Travel Information</Text>
      </Header>
      <FormField name={'dateOfDeparture'} label={'Departure Date'} required>
        <DateInput name={'dateOfDeparture'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField
        name={'dateOfEmbarkation'}
        label={'Date of Embarkation'}
        required
      >
        <DateInput name={'dateOfEmbarkation'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField name={'arrivalDate'} label={'Arrival Date'} required>
        <DateInput name={'arrivalDate'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField
        placeholder={'Vessel #'}
        name={'vesselNumber'}
        label={'Vessel Number'}
        required
      />
      <FormField
        name={'countryOfEmbarkation'}
        label={'Country Of Embarkation'}
        required
      >
        <ReactFlagsSelect
          selected={props.state.countryOfEmbarkation ?? ''}
          onSelect={(countryCode: string) => {
            console.log(countryCode);
            props.setState({
              ...props.state,
              countryOfEmbarkation: countryCode,
            });
          }}
        />
      </FormField>
      <FormField
        placeholder={'Travel Origin'}
        name={'travelOrigin'}
        label={'Travel Origin'}
        required
      />
      <FormField
        placeholder={'Contact Person'}
        name={'contactPerson'}
        label={'Contact Person'}
        required
      />
      <FormField
        placeholder={'Contact Person Phone #'}
        name={'contactPersonPhoneNumber'}
        label={'Contact Person Phone #'}
        required
      />
      <FormField
        placeholder={'Mode Of Travel'}
        name={'modeOfTravel'}
        label={'Mode of Travel'}
        required
      >
        <RadioButtonGroup
          name={'modeOfTravel'}
          options={['air', 'sea', 'land']}
          direction={'row'}
        />
      </FormField>

      <FormField
        placeholder={'Purpose Of Trip'}
        name={'purposeOfTrip'}
        label={'Purpose of Trip'}
        required
      >
        <RadioButtonGroup
          name={'purposeOfTrip'}
          options={[
            'Tourist',
            'Business',
            'Student',
            'Resident',
            'Diplomat',
            'Official',
          ]}
        />
      </FormField>
    </>
  );
};

export default TravelInfoForm;
