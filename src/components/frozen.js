import React, { forwardRef } from 'react';
import Productbar from './productbar';

const Frozen = ({text},frozen) => {
    return (
        <div ref={frozen}>
            <h1>{text}</h1>
            <Productbar/>
        </div>
    );
}

export default forwardRef(Frozen);
