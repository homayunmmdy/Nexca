import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NexcaMark from '../../molecules/NexcaMark';

describe('NexcaMark Component', () => {
   const componentsHelper = (statue: boolean) => {
      render(<NexcaMark master={statue} />);

      return {
         link: screen.queryByRole('link'),
         icon: screen.queryByTestId('Icon'),
      };
   };
   it('should render the Link with PiSealCheckFill icon when master is true', () => {
      const { link, icon } = componentsHelper(true);

      expect(link).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
   });

   it('should render nothing when master is false', () => {
      const { link, icon } = componentsHelper(false);

      expect(link).not.toBeInTheDocument();
      expect(icon).not.toBeInTheDocument();
   });
});
