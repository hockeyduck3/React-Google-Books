import React from 'react';

function Card({ children, id }) {
    return (
        <div className='card' id={id}>
            <div className='card-body'>
                {children}
            </div>
        </div>
    )
}

export default Card;
