import { render, screen } from '@testing-library/react';
import { Reservation } from './components';

test.only('Test correct attributes', () => {
    render(<Reservation />);
    const checkName = screen.getAllByPlaceholderText("Enter your Name");
    expect(checkName).toHaveAttribute('required');
})