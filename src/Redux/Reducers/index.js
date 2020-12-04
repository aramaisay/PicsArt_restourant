import {produce} from 'immer'; 

import { CART_ADD, CART_DELETE, CART_ORDER, CART_QUANTITY_CHANGE, RES_ADD, DISHES_ADD, TYPES_ADD } from '../Actions';
import { initialState } from '../InitialState';

const reducer = produce((state, action) => {
    const {type, payload} = action;
    const {amount, resId, itemId, data} = payload?payload:{amount:0, resId:-1,itemId:-1};
    switch(type) {
        case CART_ADD:
            const isThere = state.cart.find((item) => item.resId === resId && item.id === itemId);
            if(isThere) {
                return state;
            }
            const item = state.dishes.find((dish) => dish.id === itemId);
            state.cart.push({...item, quantity: 1, resId});
            state.price += item.price;
            return state;
        case CART_DELETE:
            state.cart.filter((item, index) => {
                if(item.id === itemId && item.resId === resId) {
                    state.price -= item.price*item.quantity;
                    state.cart.splice(index,1);
                }
                return;
            })
            return state;
        case CART_QUANTITY_CHANGE:
            if(amount >= 0) {
                state.cart.filter((item, index) => {
                    if(item.id === itemId && item.resId === resId) {
                        if(amount > 0) {
                            state.price -= item.price * item.quantity;
                            state.price += item.price * amount;
                        }
                        else {
                            state.price -= item.price*item.quantity;
                            state.cart.splice(index,1);
                        }
                        item.quantity = amount;
                    }
                })
            }
            return state;
        case CART_ORDER:
            state = initialState;
            return state;
        case RES_ADD:
            state.restourants = data;
            return state;
        case DISHES_ADD:
            state.dishes = data;
            return state;
        case TYPES_ADD:
            state.types = data;
            return state;
        default:
            return state;
    }
})

export default reducer;