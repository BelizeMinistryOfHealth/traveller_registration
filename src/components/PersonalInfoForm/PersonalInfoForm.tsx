import React from 'react';
import {
  Box,
  Button,
  DateInput,
  Form,
  FormField,
  Grommet,
  grommet,
  MaskedInput,
  RadioButtonGroup,
} from 'grommet';
import { deepMerge } from 'grommet/utils';
import ReactFlagsSelect from 'react-flags-select';

const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
});

interface FormData {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  gender?: 'Female' | 'Male';
  nationality?: string;
  passportNumber?: string;
  phoneNumbers?: string;
  occupation?: string;
  email?: string;
}

const PersonalInfoForm = (): JSX.Element => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    passportNumber: '',
  });

  const onChange = (nextValue: FormData) => {
    console.log(nextValue);
    setFormData(nextValue);
  };

  return (
    <Grommet theme={formTheme}>
      <Box
        responsive={true}
        round={'small'}
        width={'large'}
        flex={'grow'}
        gap={'medium'}
        pad={'xlarge'}
        background={{
          color: 'light-1',
          opacity: true,
        }}
      >
        <Form
          value={formData}
          onChange={(value: FormData) => onChange(value)}
          onSubmit={(e) => console.log(e.value)}
        >
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
              selected={formData.nationality ?? ''}
              onSelect={(countryCode: string) => {
                setFormData({ ...formData, nationality: countryCode });
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
          <Button type={'submit'} label={'Submit'} />
        </Form>
      </Box>
    </Grommet>
  );
};

export default PersonalInfoForm;
