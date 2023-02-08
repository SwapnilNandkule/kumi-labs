import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Bakery = ({text},bakery) => {
    return (
        <div ref={bakery}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Bakery);
