import React from 'react';

const MapWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <div className='MapSectionContainer'>
            <div className='MapSection'>
                {children}
            </div>
        </div>
    );
};

export default MapWrapper;