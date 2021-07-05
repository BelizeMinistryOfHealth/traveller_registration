import React, { SetStateAction } from 'react';
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
import { PersonalInfo } from '../../models/models';

export interface CompanionInfoFormProps {
  companionInfo: PersonalInfo;
  setCompanionInfo: React.Dispatch<SetStateAction<PersonalInfo>>;
}

const CompanionInfoForm = (props: CompanionInfoFormProps): JSX.Element => {
  const { companionInfo, setCompanionInfo } = props;

  return (
    <>
      <Heading>
        <Text size={'xlarge'} role={'form-heading'}>
          Personal Information
        </Text>
      </Heading>

      <FormField
        placeholder={'First Name'}
        name={'firstName'}
        label={'First Name'}
        htmlFor={'firstName'}
        error={companionInfo.firstName ? null : 'first name is required'}
        required
      >
        <TextInput
          id={'firstName'}
          name={'firstName'}
          role={'firstName'}
          onChange={(e) =>
            setCompanionInfo({
              ...companionInfo,
              firstName: e.target.value.trim(),
            })
          }
        />
      </FormField>
      <FormField
        name={'middleName'}
        label={'Middle Name'}
        placeholder={'Middle Name'}
        htmlFor={'middleName'}
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
            middleName: e.target.value.trim(),
          })
        }
      >
        <TextInput id={'middleName'} name={'middleName'} role={'middleName'} />
      </FormField>
      <FormField
        name={'lastName'}
        label={'Last Name'}
        required={true}
        placeholder={'Last Name'}
        htmlFor={'lastName'}
        error={companionInfo.lastName ? null : 'last name is required'}
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
            lastName: e.target.value.trim(),
          })
        }
      >
        <TextInput id={'lastName'} name={'lastName'} role={'lastName'} />
      </FormField>
      <FormField
        name={'dob'}
        label={'Date of Birth'}
        htmlFor={'dob'}
        error={companionInfo.dob ? null : 'date of birth is required'}
        required
      >
        <DateInput
          name={'dob'}
          format={'yyyy-mm-dd'}
          id={'dob'}
          role={'dob'}
          value={companionInfo.dob}
          onChange={(e) => {
            setCompanionInfo({ ...companionInfo, dob: e.value as string });
          }}
        />
      </FormField>
      <FormField
        name={'nationality'}
        label={'Nationality'}
        htmlFor={'nationality'}
        error={
          companionInfo.nationality != undefined &&
          (companionInfo.nationality as unknown as string).length == 2
            ? null
            : 'nationality is required'
        }
      >
        <ReactFlagsSelect
          id={'nationality'}
          searchable={true}
          selected={companionInfo?.nationality ?? ''}
          onSelect={(countryCode: string) => {
            setCompanionInfo({ ...companionInfo, nationality: countryCode });
          }}
        />
      </FormField>
      <FormField
        name={'gender'}
        label={'Gender'}
        htmlFor={'gender'}
        error={companionInfo.gender ? null : 'gender is required'}
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
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
        name={'passportNumber'}
        label={'Passport Number'}
        placeholder={'Passport Number'}
        htmlFor={'passportNumber'}
        error={
          companionInfo.passportNumber ? null : 'passport number is required'
        }
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
            passportNumber: e.target.value.trim(),
          })
        }
        required
      >
        <TextInput
          id={'passportNumber'}
          name={'passportNumber'}
          role={'passport'}
        />
      </FormField>
      <FormField
        name={'phoneNumbers'}
        label={'Phone Numbers'}
        placeholder={'Phone Numbers'}
        htmlFor={'phoneNumbers'}
        error={companionInfo.phoneNumbers ? null : 'phone numbers are required'}
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
            phoneNumbers: e.target.value.trim(),
          })
        }
        required
      >
        <TextInput name={'phoneNumbers'} id={'phoneNumbers'} role={'phone'} />
      </FormField>
      <FormField
        name={'occupation'}
        label={'Occupation'}
        placeholder={'Occupation'}
        htmlFor={'occupation'}
        error={companionInfo.occupation ? null : 'occupation is required'}
        onChange={(e) =>
          setCompanionInfo({
            ...companionInfo,
            occupation: e.target.value.trim().trim(),
          })
        }
        required
      >
        <TextInput name={'occupation'} id={'occupation'} role={'occupation'} />
      </FormField>
      <FormField
        label={'Email'}
        name={'email'}
        htmlFor={'email'}
        role={'email'}
        onChange={(e) =>
          setCompanionInfo({ ...companionInfo, email: e.target.value.trim() })
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

export default CompanionInfoForm;
