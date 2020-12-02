import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { isEqual } from 'lodash';

import { CART_ADD_OBJ } from '../Redux/Actions'

const MenuCard = ({ resId, id, name, photoUrl, price }) => {
    const dispatch = useDispatch();

    return (
        <div className = 'cardCont'  onClick = {() => {dispatch(CART_ADD_OBJ(resId, id))}} >
            <img className = 'cardImg'  src = {photoUrl}></img>
            <div className = 'cardInfo' >
                <div className = 'cardTitle' >{name} - {price}$</div>
            </div>
        </div>
    );
}

export default memo(MenuCard, isEqual);