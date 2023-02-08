import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Canned = ({text},canned) => {
    return (
        <div ref={canned}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Canned);
