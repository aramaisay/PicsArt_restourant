import types from './kitchenTypes.json';
import restourants from './restaurants.json';
import menu1 from './menus/1.json';
import menu2 from './menus/2.json';
import menu3 from './menus/3.json';
import menu4 from './menus/4.json';
import menu5 from './menus/5.json';
import menu6 from './menus/6.json';

const menus = [menu1, menu2, menu3, menu4, menu5, menu6];

export const initialState = {
    restourants: restourants,
    menus: menus,
    types: types,
    cart: [],
    price: 0
};