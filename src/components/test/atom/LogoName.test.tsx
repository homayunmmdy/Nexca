import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoName from '../../atoms/LogoName';
import SiteConfig from '../../../config/site';

describe('LogoName component', () => {
   it('should have right link for Logo', () => {
      render(<LogoName />);
      const link = screen.getByRole('link', { name: /logo link/i });

      expect(link).toHaveAttribute('href', '/');
      expect(link).toHaveAttribute('title', SiteConfig.name);
      expect(link).toHaveAttribute('aria-label', 'logo link');
   });

   it('should have right style', () => {
      render(<LogoName />);
      const p = screen.getByRole('paragraph');

      expect(p).toHaveClass('text-indigo-700');
      expect(p).toHaveClass('font-bold');
   });
});
