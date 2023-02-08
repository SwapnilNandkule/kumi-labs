import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Meat = ({text},meat) => {
    return (
        <div ref={meat}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Meat);
