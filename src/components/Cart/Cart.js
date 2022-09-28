import React from 'react';
import './Cart.css';

const Cart = () => {
    let exerciseTime = 0;
    let breakTime = 0;
    return (
        <div>
            <div className='cart'>
            <div>
              <h3>Xaviar Antony</h3>
              <p>California, USA</p>
            </div>
            <div className='body-detail'>
            <div className='weight'>
                <h2>75<small>kg</small></h2>
                <p><small>Weight</small></p>
            </div>
            <div className='height'>
                <h2>5.7</h2>
                <p><small>Height</small></p>
            </div>
            <div className='age'>
                <h2>28<small>years</small></h2>
                <p><small>Age</small></p>
            </div>
            </div>
            <div>
                <div className="break-text">
                    <h5>Add a Break</h5>
                </div>
                <div className="break-time">
                    <div>
                        <p>10<small>s</small></p>
                    </div>
                    <div>
                        <p>20<small>s</small></p>
                    </div>
                    <div>
                        <p>40<small>s</small></p>
                    </div>
                    <div>
                        <p>50<small>s</small></p>
                    </div>
                </div>
            </div>
            <h3>Duration of Activity:</h3>
            <p>Activity Time: ${exerciseTime}</p>
            <p>Break Time: ${breakTime}</p>
            <button className='btn-activity'>Activity Completed</button>
        </div>
        </div>
    );
};

export default Cart;