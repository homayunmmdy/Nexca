import React from 'react'
//@ts-ignore
const Stat = ({ title, number, icon }) => {
    return (
        <>
            <button className="btn h-full w-full shadow-lg px-2 py-7">
                <span>{icon}</span>
                {title}
                <div className="badge badge-secondary">+{number}</div>
            </button>

        </>
    )
}

export default Stat