'use client';
import { useState } from 'react';
import MapContent from '../../components/MapContent';
import SEMap from '../../components/SEMap';
import { SE_MAP_CONTENT } from '../../types/constants';

const SwedenPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>('1');
   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <SEMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={SE_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={160}
            />
         </div>
      </div>
   );
};

export default SwedenPage;
