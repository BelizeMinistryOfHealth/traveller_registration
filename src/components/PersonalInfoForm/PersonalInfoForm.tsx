import React from 'react';
import {
  DateInput,
  FormField,
  Header,
  MaskedInput,
  RadioButtonGroup,
  Text,
} from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { useRegistration } from '../../providers/RegistrationProvider';

const PersonalInfoForm = (): JSX.Element => {
  const { personalInfo, setPersonalInfo } = useRegistration();

  return (
    <>
      <Header>
        <Text size={'xlarge'}>Personal Information</Text>
      </Header>

      <FormField
        placeholder={'First Name'}
        name={'firstName'}
        label={'First Name'}
        required
      />
      <FormField
        name={'middleName'}
        label={'Middle Name'}
        placeholder={'Middle Name'}
      />
      <FormField
        name={'lastName'}
        label={'Last Name'}
        required={true}
        placeholder={'Last Name'}
      />
      <FormField name={'dob'} label={'Date of Birth'} required>
        <DateInput name={'dob'} format={'yyyy-mm-dd'} />
      </FormField>
      <FormField name={'nationality'} label={'Nationality'} required>
        <ReactFlagsSelect
          searchable={true}
          selected={personalInfo?.nationality ?? ''}
          onSelect={(countryCode: string) => {
            setPersonalInfo?.({ ...personalInfo, nationality: countryCode });
          }}
        />
      </FormField>
      <FormField name={'gender'} label={'Gender'} required>
        <RadioButtonGroup
          name={'gender'}
          options={['Male', 'Female']}
          direction={'row'}
        />
      </FormField>
      <FormField
        name={'passportNumber'}
        label={'Passport Number'}
        placeholder={'Passport Number'}
        required
      />
      <FormField
        name={'phoneNumbers'}
        label={'Phone Numbers'}
        placeholder={'Phone Numbers'}
        required
      />
      <FormField
        name={'occupation'}
        label={'Occupation'}
        placeholder={'Occupation'}
        required
      />
      <FormField label={'Email'} name={'email'} required>
        <MaskedInput
          name='email'
          mask={[
            { regexp: /^[\w\-_.]+$/, placeholder: 'your' },
            { fixed: '@' },
            { regexp: /^[\w]+$/, placeholder: 'email' },
            { fixed: '.' },
            { regexp: /^[\w]+$/, placeholder: 'com' },
          ]}
        />
      </FormField>
    </>
  );
};

export default PersonalInfoForm;
