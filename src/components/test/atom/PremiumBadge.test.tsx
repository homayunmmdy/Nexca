import React from 'react';
import PremiumBadge from '../../atoms/PremiumBadge';
import { render, screen } from '@testing-library/react';

describe('PremiumBadge Component', () => {
   it('should children correctly', () => {
      const testText = 'Premium Feature';
      render(<PremiumBadge>{testText}</PremiumBadge>);

      expect(screen.getByText(`✨ ${testText}`)).toBeInTheDocument();
   });
   it('should render with react elements as children', () => {
      render(
         <PremiumBadge>
            <span data-testid="custom-child">Custom Element</span>
         </PremiumBadge>
      );

      expect(screen.getByTestId('custom-child')).toBeInTheDocument();
      expect(screen.getByText('Custom Element')).toBeInTheDocument();
   });
});
