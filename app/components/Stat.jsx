import React from 'react'

const Stat = ({title , number}) => {
    return (
        <>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">{title}</div>
                    <div className="stat-value">{number}</div>
                </div>

            </div>
        </>
    )
}

export default Stat