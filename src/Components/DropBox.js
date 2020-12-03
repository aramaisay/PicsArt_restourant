import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import { kitchenTypeSelector } from '../Redux/Selectors'

import '../Css/Components/DropBox.css';

const DropBox = ({onChange}) => {
    const data = useSelector(kitchenTypeSelector)
    return(
        <select className = 'dropCont' name = 'kitchenTypes' onChange = {onChange} >
            {data.map((item) => {
                return <option key = {item.abbr} className = 'dropOpt' value = {item.abbr} >{item.name}</option>
            })}
        </select>
    );
};

export default DropBox;