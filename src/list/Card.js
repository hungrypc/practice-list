import React from 'react';

const Card = (props) => {

    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}  ${today.getHours()}:${today.getMinutes()}`

    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" 
                    src="http://treasuresofinnocence.org/wp-content/uploads/2016/11/icon-user-default.png"
                    alt="avatar" />
                    <div className="header">
                        {props.name}
                    </div>
                    <div className="meta">
                        {date}
                    </div>
                    <div className='description'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
