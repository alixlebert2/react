import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flexwide from './Flexwide';

describe('<Flexwide />', () => {
  test('it should mount', () => {
    render(<Flexwide />);
    
    const flexwide = screen.getByTestId('Flexwide');

    expect(flexwide).toBeInTheDocument();
  });
});