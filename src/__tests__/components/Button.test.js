import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should fire handleSubmit on click', () => {
    const handleSubmit = jest.fn();
    const { container } = render(
      <Button handleSubmit={handleSubmit} label="test" />
    );
    const button = container.firstChild;
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should have text informed in label prop', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <Button handleSubmit={handleSubmit} label="submit" />
    );

    const button = getByText('submit');

    expect(button).toBeTruthy();
  });
});
