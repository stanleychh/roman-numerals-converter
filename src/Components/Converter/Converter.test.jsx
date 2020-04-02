import React from 'react';
import { render } from '@testing-library/react';
import { Converter } from './Converter.jsx';

describe('<Converter>', () => {
    test('It should render two input fields', () => {
        const { container } = render(<Converter />);
        const actual = container.querySelectorAll('input');
        const expected = 2;

        expect(actual.length).toEqual(expected);
    });
});