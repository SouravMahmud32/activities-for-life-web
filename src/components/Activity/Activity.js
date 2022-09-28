import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {name, img, time, age} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-info">
                <h3>Name: {name}</h3>
                <p>Time: {time}</p>
                <p>Age: {age}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
    );
};

export default Activity;