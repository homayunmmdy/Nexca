import React from 'react';
import Image from "next/image";

const AfghanistanMapPage = () => {
    return (
        <div>
            <Image src='/static/maps/af.svg' alt="Map of the Afghanistan" width={800} height={800} priority={true} fetchPriority='high'/>
        </div>
    );
};

export default AfghanistanMapPage;