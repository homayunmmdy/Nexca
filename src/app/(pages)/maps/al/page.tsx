'use client'
import React, {useState} from 'react';
import AlMap from "@/app/(pages)/maps/components/ALMap";

const AlbaniaPage = () => {
    const [activeProvinceId, setActiveProvinceId] = useState<string | null>('10');
    return (
        <>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-12 md:col-span-7"><AlMap setActiveProvinceId={setActiveProvinceId}/></div>
                <div className='col-span-12 md:col-span-5'></div>
            </div>
        </>
    );
};

export default AlbaniaPage;