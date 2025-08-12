import React from 'react'
import SiteConfig from "../../../config/site";
import  GitHubBtn  from "../../molecules/GitHubBtn"
import { render, screen } from "@testing-library/react"
import {expect} from "vitest";

describe('Github button', () => {
    it('should render the correct link for button' , () => {
        render(<GitHubBtn />);
        const BtnLink = screen.getByTestId('btnLink');

        expect(BtnLink).toHaveAttribute('href', SiteConfig.github);
        expect(BtnLink).toHaveAttribute('rel','nofollow');
        expect(BtnLink).toHaveAttribute('aria-label','GitHub button link');
        expect(BtnLink).toHaveAttribute('target','_blank');
        expect(BtnLink).toHaveAttribute('title',"GitHub");
    });

    it('should have render the Button Correctly', () => {
        render(<GitHubBtn />);

        const Btn = screen.queryByRole('button');
        const BtnText = screen.getByTestId('btnText')

        expect(Btn).toHaveAttribute('type', 'button');
        expect(screen.getByTestId('btnIcon')).toBeInTheDocument();
        expect(BtnText).toHaveTextContent('GitHub')
    });

    it('should return the right link when user set link' ,() => {
        render(<GitHubBtn link="https://google.com"/>);
        const BtnLink = screen.getByTestId('btnLink');

        expect(BtnLink).toHaveAttribute('href', 'https://google.com');
    });
    it('should apply custom className to the link when aStyle is provided', () => {
        const customClass = 'custom-class';
        render(<GitHubBtn aStyle={customClass} />);
        const BtnLink = screen.getByTestId('btnLink');

        expect(BtnLink).toHaveClass(customClass);
    });

    it('should combine default props and custom props correctly', () => {
        const customClass = 'custom-class';
        const customLink = 'https://custom.com';
        render(<GitHubBtn link={customLink} aStyle={customClass} />);
        const BtnLink = screen.getByTestId('btnLink');

        expect(BtnLink).toHaveAttribute('href', customLink);
        expect(BtnLink).toHaveClass(customClass);
        // Verify other default attributes are still present
        expect(BtnLink).toHaveAttribute('rel','nofollow');
        expect(BtnLink).toHaveAttribute('aria-label','GitHub button link');
    });
})