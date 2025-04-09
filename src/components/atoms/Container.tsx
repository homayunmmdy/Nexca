import React from 'react';

function Container({children}: { children : React.ReactNode }) {
    return (
        <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
            {children}
        </div>
    );
}

export default Container;