import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<HelloWorld name="John" />);
    const greetingElement = getByText(/Hello, John!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  it('throws an error if "name" prop is missing', () => {
    // Silence the expected PropTypes error in the console for this test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<HelloWorld />)).toThrow();

    // Restore console.error
    console.error = originalError;
  });
});
