import React from 'react';

interface SectionsTitleProps {
   children: string;
   bg?: string;
   line?: boolean;
   className?: string;
}
const SectionsTitle: React.FC<SectionsTitleProps> = ({
   children,
   bg = 'bg-indigo-700',
   line = true,
   className = '',
}: SectionsTitleProps) => {
   return (
      <div className="flex items-center gap-2 mb-2 md:mb-4">
         <p
            className={`${bg} ${className} p-3 rounded-lg text-white text-nowrap text-sm md:text-lg`}
         >
            {children}
         </p>
         {line === true && (
            <div data-testid="line" className="h-0.5 w-full bg-base-300"></div>
         )}
      </div>
   );
};

export default SectionsTitle;
