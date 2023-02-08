import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Produce = ({text},pro) => {
    return (
        <div ref={pro}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Produce);
