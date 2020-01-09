import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="name">
                {props.name}
            </div>
            <div className='text'>
                {props.text}
            </div>
        </div>
    )
}

export default Card;
