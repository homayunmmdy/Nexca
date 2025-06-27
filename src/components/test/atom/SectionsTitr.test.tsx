import React from 'react';
import SectionsTitr from "../../atoms/SectionsTitr";
import {render,screen} from "@testing-library/react";
import {FaEye} from "react-icons/fa";

describe('sectionsTitr component', () => {
    it('render default sectionsTitr correctly', () => {

        render(<SectionsTitr>Test</SectionsTitr>);

        const children = screen.getByText('Test')
        const line = screen.getByTestId('line');

        expect(children).toHaveClass('bg-indigo-700');
        expect(line).toBeInTheDocument();
    });

    it('should render without line' , () => {
        render(<SectionsTitr line={false}>Test</SectionsTitr>);

        const line = screen.queryByTestId('line');

        expect(line).not.toBeInTheDocument();
    });

    it('should render with custom background' , () => {
        render(<SectionsTitr bg="bg-red-200">Test</SectionsTitr>);

        const children = screen.getByText('Test')

        expect(children).toHaveClass('bg-red-200');
        expect(children).not.toHaveClass('bg-indigo-700');
    });
})