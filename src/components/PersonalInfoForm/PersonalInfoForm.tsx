import React from 'react';
import {
  DateInput,
  FormField,
  Header,
  Heading,
  MaskedInput,
  RadioButtonGroup,
  Text,
  TextInput,
} from 'grommet';
import ReactFlagsSelect from 'react-flags-select';
import { useRegistration } from '../../providers/RegistrationProvider';

const PersonalInfoForm = (): JSX.Element => {
  const { personalInfo, setPersonalInfo } = useRegistration();

  return (
    <>
      <Heading>
        <Text size={'xlarge'}>Personal Information</Text>
      </Heading>

      <FormField
        placeholder={'First Name'}
        name={'firstName'}
        label={'First Name'}
        htmlFor={'firstName'}
        required
      >
        <TextInput id={'firstName'} name={'firstName'} />
      </FormField>
      <FormField
        name={'middleName'}
        label={'Middle Name'}
        placeholder={'Middle Name'}
        htmlFor={'middleName'}
      >
        <TextInput id={'middleName'} name={'middleName'} />
      </FormField>
      <FormField
        name={'lastName'}
        label={'Last Name'}
        required={true}
        placeholder={'Last Name'}
        htmlFor={'lastName'}
      >
        <TextInput id={'lastName'} name={'lastName'} />
      </FormField>
      <FormField name={'dob'} label={'Date of Birth'} htmlFor={'dob'} required>
        <DateInput name={'dob'} format={'yyyy-mm-dd'} id={'dob'} />
      </FormField>
      <FormField
        name={'nationality'}
        label={'Nationality'}
        htmlFor={'nationality'}
        required
      >
        <ReactFlagsSelect
          id={'nationality'}
          searchable={true}
          selected={personalInfo?.nationality ?? ''}
          onSelect={(countryCode: string) => {
            setPersonalInfo?.({ ...personalInfo, nationality: countryCode });
          }}
        />
      </FormField>
      <FormField name={'gender'} label={'Gender'} htmlFor={'gender'} required>
        <RadioButtonGroup
          name={'gender'}
          id={'gender'}
          options={['Male', 'Female']}
          direction={'row'}
        />
      </FormField>
      <FormField
        name={'passportNumber'}
        label={'Passport Number'}
        placeholder={'Passport Number'}
        htmlFor={'passportNumber'}
        required
      >
        <TextInput id={'passportNumber'} name={'passportNumber'} />
      </FormField>
      <FormField
        name={'phoneNumbers'}
        label={'Phone Numbers'}
        placeholder={'Phone Numbers'}
        htmlFor={'phoneNumbers'}
        required
      >
        <TextInput name={'phoneNumbers'} id={'phoneNumbers'} />
      </FormField>
      <FormField
        name={'occupation'}
        label={'Occupation'}
        placeholder={'Occupation'}
        htmlFor={'occupation'}
        required
      >
        <TextInput name={'occupation'} id={'occupation'} />
      </FormField>
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
