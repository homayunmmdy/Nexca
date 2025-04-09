import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from "../../../components/atoms/Container";


describe('Container Component', () => {
    // Define the return type for our helper function
    interface RenderContainerResult extends RenderResult {
        containerElement: HTMLElement;
    }

    // Helper function with proper typing
    const renderContainer = (props: { className?: string; children: React.ReactNode }): RenderContainerResult => {
        const utils = render(<Container {...props} />);
        const containerElement = utils.container.firstChild as HTMLElement;
        return {
            ...utils,
            containerElement,
        };
    };

    it('renders children correctly', () => {
        const testText = 'Test Child Content';
        renderContainer({ children: <div>{testText}</div> });
        expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it('applies default classes correctly', () => {
        const { containerElement } = renderContainer({ children: <div>Test</div> });
        expect(containerElement).toHaveClass('mx-auto');
        expect(containerElement).toHaveClass('w-[94%]');
        expect(containerElement).toHaveClass('pt-2');
        expect(containerElement).toHaveClass('md:w-[92%]');
    });

    it('merges custom className with default classes', () => {
        const customClass = 'custom-class';
        const { containerElement } = renderContainer({
            className: customClass,
            children: <div>Test</div>
        });
        expect(containerElement).toHaveClass('mx-auto');
        expect(containerElement).toHaveClass(customClass);
    });

    it('has exactly the default classes when no className prop is provided', () => {
        const { containerElement } = renderContainer({ children: <div>Test</div> });
        expect(containerElement.className).toBe('mx-auto w-[94%] pt-2 md:w-[92%] ');
    });
});