'use client'
import React, {useState} from 'react';
import MapContent from "@/app/(pages)/maps/components/MapContent";
import { GL_MAP_CONTENT} from "@/config/Constants";
import GLMap from "@/app/(pages)/maps/components/GLMap";

const GreenlandPage = () => {
    const [activeProvinceId, setActiveProvinceId] = useState<string | null>('4');
    return (
        <>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-12 md:col-span-5"><GLMap setActiveProvinceId={setActiveProvinceId}/></div>
                <div className='col-span-12 md:col-span-7'><MapContent key={GL_MAP_CONTENT} provinceID={Number(activeProvinceId)} countryID={200} /></div>
            </div>
        </>
    );
};

export default GreenlandPage;