import React from 'react';
import {Container} from "@/components/atoms";
import AlMap from "@/app/(pages)/maps/components/ALMap";

const AlbaniaPage = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-12 md:col-span-7"><AlMap /></div>
                <div className='col-span-12 md:col-span-5'></div>
            </div>
        </>
    );
};

export default AlbaniaPage;