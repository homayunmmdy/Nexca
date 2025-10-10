import { useEffect, useRef } from 'react';

const useMapInteraction = (setActiveProvinceId: (id: string) => void) => {
   const mapRef = useRef<SVGSVGElement>(null);

   useEffect(() => {
      const mapElement = mapRef.current;
      if (!mapElement) return;

      const allProvinces = mapElement.querySelectorAll('.provinceSec');

      const handleClick = (e: Event) => {
         e.stopPropagation();
         const clickedProvince = e.target as SVGAElement;
         const provinceID = clickedProvince.id.slice(9);
         setActiveProvinceId(provinceID);

         allProvinces.forEach((province: any) => {
            province.classList.remove('activeProvince');
         });
         clickedProvince.classList.add('activeProvince');
      };

      allProvinces.forEach((province: any) => {
         province.addEventListener('click', handleClick);
      });

      return () => {
         allProvinces.forEach((province: any) => {
            province.removeEventListener('click', () => {});
         });
      };
   }, [setActiveProvinceId]);

   return mapRef;
};

export default useMapInteraction;
