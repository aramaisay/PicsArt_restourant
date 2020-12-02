import React, { forwardRef, memo } from 'react';
import {isEqual} from 'lodash';

import '../Css/Components/Range.css';

const Range = forwardRef(({minRef},ref) => {
    return (
        <>
            <input className = 'rangeInput' defaultValue = {0}  type = 'number' placeholder = 'min' ref = {minRef} />
            <input className = 'rangeInput' defaultValue = {100000}  type = 'number' placeholder = 'max' ref = {ref} />
        </>
    )
})

export default memo(Range, isEqual);