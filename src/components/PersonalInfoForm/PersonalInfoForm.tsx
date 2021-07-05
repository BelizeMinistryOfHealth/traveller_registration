import React from 'react';
import {
  DateInput,
  FormField,
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
        <Text size={'xlarge'} role={'form-heading'}>
          Personal Information
        </Text>
      </Heading>

      <FormField
        placeholder={'First Name'}
        role={'firstName'}
        name={'firstName'}
        label={'First Name'}
        htmlFor={'firstName'}
        required
      >
        <TextInput id={'firstName'} name={'firstName'} />
      </FormField>
      <FormField
        name={'middleName'}
        role={'middleName'}
        label={'Middle Name'}
        placeholder={'Middle Name'}
        htmlFor={'middleName'}
      >
        <TextInput id={'middleName'} name={'middleName'} />
      </FormField>
      <FormField
        role={'lastName'}
        name={'lastName'}
        label={'Last Name'}
        required={true}
        placeholder={'Last Name'}
        htmlFor={'lastName'}
      >
        <TextInput id={'lastName'} name={'lastName'} />
      </FormField>
      <FormField
        name={'dob'}
        label={'Date of Birth'}
        htmlFor={'dob'}
        role={'dob'}
        required
      >
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
        role={'passport'}
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
        role={'phone'}
        label={'Phone Numbers'}
        placeholder={'Phone Numbers'}
        htmlFor={'phoneNumbers'}
        required
      >
        <TextInput name={'phoneNumbers'} id={'phoneNumbers'} />
      </FormField>
      <FormField
        role={'occupation'}
        name={'occupation'}
        label={'Occupation'}
        placeholder={'Occupation'}
        htmlFor={'occupation'}
        required
      >
        <TextInput name={'occupation'} id={'occupation'} />
      </FormField>
      <FormField
        label={'Email'}
        name={'email'}
        htmlFor={'email'}
        role={'email'}
        required
      >
        <MaskedInput
          id={'email'}
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
