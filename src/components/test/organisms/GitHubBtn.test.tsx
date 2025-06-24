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
})