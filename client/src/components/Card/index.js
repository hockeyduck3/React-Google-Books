import React from 'react';

function Card({ children, id }) {
    return (
        <div className='card'>
            <div className='card-body' id={id}>
                {children}
            </div>
        </div>
    )
}

export default Card;
