import React from 'react';
import { DateInput, FormField, Heading, RadioButtonGroup, Text } from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { ports, PurposeOfTrip } from '../../models/models';
import { useRegistration } from '../../providers/RegistrationProvider';

const TravelInfoForm = (): JSX.Element => {
  const { personalInfo, arrivalInfo, setArrivalInfo } = useRegistration();
  return (
    <>
      <Heading>
        <Text size={'xlarge'}>
          Travel Information | {personalInfo?.fullName}
        </Text>
      </Heading>
      <FormField
        placeholder={'Port of Arrival'}
        name={'portOfEntry'}
        label={'Port of Arrival'}
        onChange={(e) =>
          setArrivalInfo?.({ ...arrivalInfo, portOfEntry: e.target.value })
        }
        required
      >
        <RadioButtonGroup name={'portOfEntry'} options={ports} />
      </FormField>
      <FormField
        name={'dateOfEmbarkation'}
        label={'Date of Embarkation'}
        required
      >
        <DateInput
          name={'dateOfEmbarkation'}
          format={'yyyy-mm-dd'}
          value={arrivalInfo?.dateOfEmbarkation}
          onChange={(e) =>
            setArrivalInfo?.({
              ...arrivalInfo,
              dateOfEmbarkation: e.value as string,
            })
          }
        />
      </FormField>
      <FormField
        name={'dateOfArrival'}
        label={'Date of Arrival in Belize'}
        required
      >
        <DateInput
          name={'dateOfArrival'}
          format={'yyyy-mm-dd'}
          value={arrivalInfo?.dateOfArrival}
          onChange={(e) =>
            setArrivalInfo?.({
              ...arrivalInfo,
              dateOfArrival: e.value as string,
            })
          }
        />
      </FormField>
      <FormField name={'dateOfDeparture'} label={'Departure Date from Belize'}>
        <DateInput
          name={'dateOfDeparture'}
          format={'yyyy-mm-dd'}
          value={arrivalInfo?.dateOfDeparture}
          onChange={(e) =>
            setArrivalInfo?.({
              ...arrivalInfo,
              dateOfDeparture: e.value as string,
            })
          }
        />
      </FormField>
      <FormField
        placeholder={'Vessel #'}
        name={'vesselNumber'}
        label={'Vessel Number'}
        value={arrivalInfo?.vesselNumber ?? ''}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            vesselNumber: e.target.value.trim(),
          })
        }
        required
      />
      <FormField
        name={'countryOfEmbarkation'}
        label={'Country Of Embarkation'}
        error={
          arrivalInfo?.countryOfEmbarkation != undefined &&
          (arrivalInfo?.countryOfEmbarkation as unknown as string).length == 2
            ? null
            : 'country of embarkation is required'
        }
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
        value={arrivalInfo?.travelOrigin ?? ''}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            travelOrigin: e.target.value.trim(),
          })
        }
        required
      />
      <FormField
        placeholder={'Contact Person'}
        name={'contactPerson'}
        label={'Contact Person'}
        value={arrivalInfo?.contactPerson ?? ''}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            contactPerson: e.target.value,
          })
        }
        required
      />
      <FormField
        placeholder={'Contact Person Phone #'}
        name={'contactPersonPhoneNumber'}
        label={'Contact Person Phone #'}
        value={arrivalInfo?.contactPersonPhoneNumber ?? ''}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            contactPersonPhoneNumber: e.target.value,
          })
        }
        required
      />
      <FormField
        placeholder={'Mode Of Travel'}
        name={'modeOfTravel'}
        label={'Mode of Travel'}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            modeOfTravel: e.target.value as 'air' | 'land' | 'sea',
          })
        }
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
        value={arrivalInfo?.purposeOfTrip ?? ''}
        onChange={(e) =>
          setArrivalInfo?.({
            ...arrivalInfo,
            purposeOfTrip: e.target.value as PurposeOfTrip,
          })
        }
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
