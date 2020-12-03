import React, { memo } from 'react';
import { isEqual } from 'lodash';

import '../Css/Components/Range.css';

const Range = ({ onChange }) => {
    return (
        <>
            <input onChange = {onChange} className = 'rangeInput' defaultValue = {0}  type = 'number' name = 'min' />
            <input onChange = {onChange} className = 'rangeInput' defaultValue = {20000}  type = 'number' name = 'max' />
        </>
    )
}

export default memo(Range, isEqual);