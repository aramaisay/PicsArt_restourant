import React, {memo} from 'react';
import {isEqual} from 'lodash';

import '../Css/Components/SearchBox.css'

const SearchBox = ({placeholder,onChange}) => {
    return(
        <input onChange = {onChange} className = 'search' placeholder = {placeholder} />
    );
};

export default memo(SearchBox, isEqual);