import React from 'react';
import { DateInput, FormField, Header, RadioButtonGroup, Text } from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { TravelInfo } from '../../models/models';

interface TravelInfoProps {
  travelInfo: TravelInfo;
}

const TravelInfoForm = (props: TravelInfoProps): JSX.Element => {
  return (
    <>
      <Header>
        <Text size={'xlarge'}>Travel Information</Text>
      </Header>
      <FormField
        name={'travelInfo.dateOfDeparture'}
        label={'Departure Date'}
        required
      >
        <DateInput name={'travelInfo.dateOfDeparture'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField
        name={'travelInfo.dateOfEmbarkation'}
        label={'Date of Embarkation'}
        required
      >
        <DateInput
          name={'travelInfo.dateOfEmbarkation'}
          format={'yyyy-mm-dd'}
        />
      </FormField>
      <FormField
        name={'travelInfo.arrivalDate'}
        label={'Arrival Date'}
        required
      >
        <DateInput name={'travelInfo.arrivalDate'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField
        placeholder={'Vessel #'}
        name={'travelInfo.vesselNumber'}
        label={'Vessel Number'}
        required
      />
      <FormField
        name={'travelInfo.countryOfEmbarkation'}
        label={'Country Of Embarkation'}
        required
      >
        <ReactFlagsSelect
          selected={props.travelInfo.countryOfEmbarkation ?? ''}
          onSelect={(countryCode: string) => {
            console.log(countryCode);
            // setFormData({ ...formData, nationality: countryCode });
          }}
        />
      </FormField>
      <FormField
        placeholder={'Travel Origin'}
        name={'travelInfo.travelOrigin'}
        label={'Travel Origin'}
        required
      />
      <FormField
        placeholder={'Contact Person'}
        name={'travelInfo.contact Person'}
        label={'Contact Person'}
        required
      />
      <FormField
        placeholder={'Contact Person Phone #'}
        name={'travelInfo.contactPersonPhoneNumber'}
        label={'Contact Person Phone #'}
        required
      />
      <FormField
        placeholder={'Mode Of Travel'}
        name={'travelInfo.modeOfTravel'}
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
        name={'travelInfo.purposeOfTrip'}
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
