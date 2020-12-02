import { useState } from 'react';

import store from '../Redux/Store';

const cache = new Map();

export const createCache = (type, payload) => {
    const { text, min, max, resId, kitchenType } = payload;
    const capitalized = text.toUpperCase();
    return new Promise((resolve) => {
        switch(type) {
            case 'resSearch':
                const data = store.getState()[0];
                const filtered = data.filter((item) => {
                    if(item.name.toUpperCase().includes(capitalized) && item.kitchenTypes.includes(kitchenType)) {
                        return true;
                    }
                    return false;
                })
                if(cache.has(kitchenType)) {
                    cache.get(kitchenType).set(capitalized, filtered);
                }
                else {
                    cache.set(kitchenType,new Map().set(capitalized,filtered))
                }
                resolve(filtered) ;
            case 'menuSearch':
                const Data = store.getState()[1][resId-1];
                const Filtered = Data.filter((item) => {
                    if(item.name.toUpperCase().includes(capitalized) && item.price >= min && item.price <= max) {
                        return true;
                    }
                    return false;
                })
                if(cache.has(resId)){
                    cache.get(resId).set(`${min}${max}${capitalized}`, Filtered);
                }
                else {
                    cache.set(resId, new Map().set(`${min}${max}${capitalized}`, Filtered));                
                }
                resolve(Filtered);
            default:
                return;
        }
    })
}

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = async (type, payload) => {
        setIsLoading(true);
        const {text, min, max, resId, kitchenType} = payload;
        const capitalized = text.toUpperCase();
        switch(type) {
            case 'resSearch':
                if(cache.has(kitchenType)) {
                    const typeCache = cache.get(kitchenType);
                    if(typeCache.has(capitalized)){
                        setData(typeCache.get(capitalized));
                        setIsLoading(false);
                        return;
                    }
                }
                await createCache(type, payload);
                fetchData(type, payload);
                return;
            case 'menuSearch':
                if(cache.has(resId)) {
                    const resCache = cache.get(resId);
                    if(resCache.has(`${min}${max}${capitalized}`)){
                        setData(resCache.get(`${min}${max}${capitalized}`));
                        setIsLoading(false);
                        return;
                    }
                }
                await createCache(type,payload);
                fetchData(type, payload);
                return;
            default:
                return;
        }
    }
    
    return {isLoading, data, fetchData};
}

export default useFetch;