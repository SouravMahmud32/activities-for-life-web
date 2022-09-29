import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {handleAddToCart, activity} = props;
    const {name, img, time, age, suggestion} = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-info">
                <h3>Name: {name}</h3>
                <p>Time: {time}m</p>
                <p>Age: {age}yrs</p>
                <p>Detail: {suggestion}</p>
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
    );
};

export default Activity;