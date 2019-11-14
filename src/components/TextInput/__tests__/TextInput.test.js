import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as Yup from 'yup';

import TextInput from '..';

const properties = {
  register: jest.fn(),
  errors: {},
  clearError: jest.fn(),
  schema: {
    yupValidations: {
      email: Yup.string()
        .required('Email is required')
        .email('Invalid format'),
    },
    customValidations: {},
  },
};

describe('TextInput component', () => {
  it('render without crashing', () => {
    const element = render(
      <TextInput properties={properties} field="email" label="Email" />
    );

    const textInput = element.getByTestId('text-field');

    expect(textInput).toBeTruthy();
  });

  it('should clear error on focus', () => {
    const { getByTestId, debug } = render(
      <TextInput properties={properties} field="email" label="Email" />
    );

    // debug();

    const input = getByTestId('text-field');
    // fireEvent.change(input, {
    //   target: { value: 'teste' },
    // });
    console.log(input);
    fireEvent.focusIn(input);
    fireEvent.focusOut(input);

    // debug();
  });
});
