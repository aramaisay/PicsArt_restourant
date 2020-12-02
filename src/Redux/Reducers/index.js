import {produce} from 'immer';

import { CART_ADD, CART_DELETE, CART_ORDER, CART_QUANTITY_CHANGE } from '../Actions';
import { initialState } from '../InitialState';

const reducer = produce((state, action) => {
    const {type, payload} = action;
    const {amount, resId, itemId} = payload?payload:{amount:0, resId:-1,itemId:-1};
    switch(type) {
        case CART_ADD:
            const isThere = state[3].find((item) => item.resId === resId && item.id === itemId);
            if(isThere) {
                return state;
            }
            const menu = state[1][resId-1];
            const item = menu.find((dish) => dish.id === itemId);
            state[3].push({...item, quantity: 1, resId});
            state[4] += item.price;
            return state;
        case CART_DELETE:
            state[3].filter((item, index) => {
                if(item.id === itemId && item.resId === resId) {
                    state[4] -= item.price*item.quantity;
                    state[3].splice(index,1);
                }
                return ;
            })
            return state;
        case CART_QUANTITY_CHANGE:
            if(amount>=0) {
                state[3].filter((item, index) => {
                    if(item.id === itemId && item.resId === resId) {
                        if(amount>0) {
                            state[4] -= item.price * item.quantity;
                            state[4] += item.price * amount;
                        }
                        else {
                            state[4] -= item.price*item.quantity;
                            state[3].splice(index,1);
                        }
                        item.quantity = amount;
                    }
                })
            }
            return state;
        case CART_ORDER:
            state = initialState;
            return state;
        default:
            return state;
    }
})

export default reducer;