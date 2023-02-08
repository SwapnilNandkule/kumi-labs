import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Prepared = ({text},prepare) => {
    return (
        <div ref={prepare}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Prepared);
