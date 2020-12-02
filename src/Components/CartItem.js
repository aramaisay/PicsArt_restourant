import React, {memo} from 'react';
import {isEqual} from 'lodash';
import { useDispatch } from 'react-redux';

import { CART_DELETE_OBJ, CART_QUANTITY_OBJ } from '../Redux/Actions';

const CartItem = ({id, name, photoUrl, price, quantity, resId}) => {
    const dispatch = useDispatch();
    return(
        <div className = 'itemCont' >
            <div className = 'imgCont' >
                <img className = 'img'  src = {photoUrl} />
            </div>
            <div className = 'infoCont' >
                <div className = 'top' > {name} - {price}$ </div>
                <div className = 'bottom' > 
                    <button className = 'btn' onClick = {() => {dispatch(CART_QUANTITY_OBJ(resId, id, quantity - 1))}} >-</button> 
                    <div>{quantity}</div> 
                    <button className = 'btn' onClick = {() => { dispatch(CART_QUANTITY_OBJ(resId, id , quantity + 1))}} >+</button> 
                    <button className = 'btn' onClick = {() => {dispatch(CART_DELETE_OBJ(resId, id))}} >Delete</button> 
                </div>
            </div>
        </div>
    )
}

export default memo(CartItem, isEqual);