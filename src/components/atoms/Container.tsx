import React from 'react';

function Container({children, className = ''}: { children: React.ReactNode, className?: string }) {
    return (
        <div
            className={`mx-auto w-full px-4 sm:px-6 lg:px-8  sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl ${className.trim()}`}>
            {children}
        </div>
    );
}

export default Container;