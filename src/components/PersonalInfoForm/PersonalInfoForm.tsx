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
        <TextInput
          id={'firstName'}
          name={'firstName'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              firstName: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        name={'middleName'}
        role={'middleName'}
        label={'Middle Name'}
        placeholder={'Middle Name'}
        htmlFor={'middleName'}
      >
        <TextInput
          id={'middleName'}
          name={'middleName'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              middleName: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        role={'lastName'}
        name={'lastName'}
        label={'Last Name'}
        required={true}
        placeholder={'Last Name'}
        htmlFor={'lastName'}
      >
        <TextInput
          id={'lastName'}
          name={'lastName'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              lastName: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        name={'dob'}
        label={'Date of Birth'}
        htmlFor={'dob'}
        role={'dob'}
        error={personalInfo?.dob ? null : 'date of birth is required'}
      >
        <DateInput
          name={'dob'}
          format={'yyyy-mm-dd'}
          id={'dob'}
          value={personalInfo?.dob}
          onChange={(e) =>
            setPersonalInfo?.({ ...personalInfo, dob: e.value as string })
          }
        />
      </FormField>
      <FormField
        name={'nationality'}
        label={'Nationality'}
        htmlFor={'nationality'}
        error={
          personalInfo?.nationality != undefined &&
          (personalInfo?.nationality as unknown as string).length == 2
            ? null
            : 'nationality is required'
        }
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
      <FormField
        name={'gender'}
        label={'Gender'}
        htmlFor={'gender'}
        onChange={(e) =>
          setPersonalInfo?.({
            ...personalInfo,
            gender: e.target.value as 'Female' | 'Male',
          })
        }
        required
      >
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
        <TextInput
          id={'passportNumber'}
          name={'passportNumber'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              passportNumber: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        name={'phoneNumbers'}
        role={'phone'}
        label={'Phone Numbers'}
        placeholder={'Phone Numbers'}
        htmlFor={'phoneNumbers'}
        required
      >
        <TextInput
          name={'phoneNumbers'}
          id={'phoneNumbers'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              phoneNumbers: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        role={'occupation'}
        name={'occupation'}
        label={'Occupation'}
        placeholder={'Occupation'}
        htmlFor={'occupation'}
        required
      >
        <TextInput
          name={'occupation'}
          id={'occupation'}
          onChange={(e) =>
            setPersonalInfo?.({
              ...personalInfo,
              occupation: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        label={'Email'}
        name={'email'}
        htmlFor={'email'}
        role={'email'}
        onChange={(e) =>
          setPersonalInfo?.({ ...personalInfo, email: e.target.value.trim() })
        }
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
