import { useState } from 'react';

import store from '../Redux/Store';
import { DISHES_ADD_OBJ, RES_ADD_OBJ, TYPES_ADD_OBJ } from '../Redux/Actions';

export const fillTheStore = async (type, payload) => {
    const { text, min, max, resId, kitchenType } = payload;
    const capitalized = text.toUpperCase();
    switch(type) {
        case 'resSearch':
            const res = await fetch('data/restaurants.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }});
            const data = await res.json();
            const filtered = data.filter((item) => {
                if(item.name.toUpperCase().includes(capitalized) && item.kitchenTypes.includes(kitchenType)) {
                    return true;
                }
                return false;
            })
            store.dispatch(RES_ADD_OBJ(filtered));
            return;
        case 'menuSearch':
            const menusRes = await fetch('data/menus.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                } 
            })
            const menusData = await menusRes.json();
            const ourMenu = menusData.find((item) => item.restourantId === parseInt(resId));
            const dishesRes = await fetch('data/dishes.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const dishesData = await dishesRes.json();

            const Filtered = dishesData.filter((item) => {
                if( ourMenu.dishes.includes(item.id) && item.name.toUpperCase().includes(capitalized) && item.price >= min && item.price <= max ) {
                    return true;
                }
                return false;
            })
            store.dispatch(DISHES_ADD_OBJ(Filtered))
            return ;
        case 'getTypes':
            const typesRes = await fetch('data/kitchenTypes.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const typesData = await typesRes.json();
            store.dispatch(TYPES_ADD_OBJ(typesData));
            return;
        default:
            return;
    }
}

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (type, payload) => {
        setIsLoading(true);
        switch(type) {
            case 'resSearch':
                await fillTheStore(type, payload);
                setIsLoading(false);
                return;
            case 'menuSearch':
                await fillTheStore(type,payload);
                setIsLoading(false);
                return;
            default:
                setIsLoading(false);
                return;
        }
    }
    
    return {isLoading, fetchData};
}

export default useFetch;