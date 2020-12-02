import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { cartSelector } from '../Redux/Selectors';
import { CART_ORDER_OBJ } from '../Redux/Actions';
import CartItem from './CartItem';

import '../Css/Components/Cart.css';

const Cart = () => {
    const [data, price] = useSelector(cartSelector);
    const [isOrdered, setIsOrdered] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    if(data.length>0 && !isOrdered) {
        return (
            <div className = 'cartCont' >
                {data.map((item) => <CartItem key = {item.id} {...item} />)}
                <div className = 'cartPrice'> Overall: {price}$ </div>
                <div onClick = {() => { dispatch(CART_ORDER_OBJ()); setIsOrdered(true);}} className = 'cartSubmit'>Order</div>
            </div>
        )
    } else if(isOrdered) {
        return (
            <div className = 'popUp' >
                <div className = 'popUpTitle' >Your order is being processed. Order Id: {Math.floor(Math.random() * 100000)} </div>
                <div className = 'popUpBtn'  onClick = {() => {history.replace('/', {}); setIsOrdered(false)}} >Close</div>
            </div>
        )
    }
    return null;
}

export default Cart;