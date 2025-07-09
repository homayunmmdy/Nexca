import React from 'react';
import "../maps.css";
import {Container} from "@/components/atoms";
import AFMap from "@/app/(pages)/maps/components/AFMap";
import AFContent from "@/app/(pages)/maps/components/AFContent";

const AfghanistanMapPage = () => {
    return (
        <Container>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-12 md:col-span-7"><AFMap /></div>
                <div className='col-span-12 md:col-span-5'><AFContent /></div>
            </div>

        </Container>

    );
};

export default AfghanistanMapPage;