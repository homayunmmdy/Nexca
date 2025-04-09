import React from 'react';

function Container({children , className = ''}: { children : React.ReactNode, className?: string }) {
    return (
        <div className={`mx-auto w-[94%] pt-2 md:w-[92%] ${className.trim()}`}>
            {children}
        </div>
    );
}

export default Container;