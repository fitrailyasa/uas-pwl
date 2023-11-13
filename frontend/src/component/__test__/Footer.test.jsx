import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Footer component renders correctly', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    const textElement = screen.getByText('Hak Cipta © 2023 || 120140048 - Fitra Ilyasa');

    expect(footerElement).toHaveClass('bg-primary');
    expect(textElement).toHaveClass('text-white');
});
