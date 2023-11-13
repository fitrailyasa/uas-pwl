import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleHeading from '../TitleHeading';

test('TitleHeading component renders the text correctly', () => {
    const titleText = 'Judul Halaman';
    render(<TitleHeading text={titleText} />);

    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
});
