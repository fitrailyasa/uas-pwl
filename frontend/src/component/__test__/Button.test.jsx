import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('Button component renders correctly', () => {
    render(<Button />);

    const buttonElement = screen.getByText('Kirim Pesan');
    expect(buttonElement).toBeInTheDocument();

    const buttonClass = screen.getByRole('button');
    expect(buttonClass).toHaveClass('btn btn-primary');
});

