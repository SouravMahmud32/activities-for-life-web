import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css';

const Activities = () => {
    const [activites, setActivities] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);
    const handleAddToCart = (activity) =>{
        const newCart = [...cart, activity];
        setCart(newCart);
    }
    return (
        <div className='activities-corner'>
            <div className="activities-container">
                {
                    activites.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToCart={handleAddToCart}
                        ></Activity>)
                }
            </div>
            <div className="activitiy-summary">
                <div className="profile">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Activities;