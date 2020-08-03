import React from 'react';

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
}

export function Row({ children }) {
    return <div className='row'>{children}</div>
}

export function Column({ size, children, id }) {
    return <div className={`col-${size}`} id={id}>{children}</div>
}
