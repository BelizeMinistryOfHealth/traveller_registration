import React from 'react';
import { DateInput, FormField, Header, RadioButtonGroup, Text } from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { ports } from '../../models/models';
import { useRegistration } from '../../providers/RegistrationProvider';

const TravelInfoForm = (): JSX.Element => {
  const { personalInfo, arrivalInfo, setArrivalInfo } = useRegistration();
  return (
    <>
      <Header>
        <Text size={'xlarge'}>
          Travel Information | {personalInfo?.fullName}
        </Text>
      </Header>
      <FormField
        placeholder={'Port of Arrival'}
        name={'portOfEntry'}
        label={'Port of Arrival'}
        required
      >
        <RadioButtonGroup name={'portOfEntry'} options={ports} />
      </FormField>
      <FormField
        name={'dateOfEmbarkation'}
        label={'Date of Embarkation'}
        required
      >
        <DateInput name={'dateOfEmbarkation'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField
        name={'dateOfArrival'}
        label={'Date of Arrival in Belize'}
        required
      >
        <DateInput name={'dateOfArrival'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField name={'dateOfDeparture'} label={'Departure Date from Belize'}>
        <DateInput name={'dateOfDeparture'} format={'yyyy-mm-dd'} />
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
          searchable={true}
          selected={arrivalInfo?.countryOfEmbarkation ?? ''}
          onSelect={(countryCode: string) => {
            setArrivalInfo?.({
              ...arrivalInfo,
              countryOfEmbarkation: countryCode,
            });
          }}
        />
      </FormField>
      <FormField
        placeholder={'City/Port/Airport your trip originated from'}
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
            'Medical',
            'Official',
            'Sport',
            'Intransit',
            'Second Home Owner',
          ]}
        />
      </FormField>
    </>
  );
};

export default TravelInfoForm;
