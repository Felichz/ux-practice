import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  test('renders button with label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
