import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header component renders correctly', () => {
    render(<Header />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('navbar-primary');
    expect(navElement).toHaveClass('bg-primary');

    const berandaLink = screen.getByText('Beranda');
    expect(berandaLink).toHaveClass('text-white');

    const tentangLink = screen.getByText('Tentang');
    expect(tentangLink).toHaveClass('text-white');

    const kontakLink = screen.getByText('Kontak');
    expect(kontakLink).toHaveClass('text-white');
});
