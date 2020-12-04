import React, { memo } from 'react';
import { isEqual } from 'lodash';

import Loader from './Loader';
import MenuCard from './MenuCard';
import { useSelector } from 'react-redux';
import { dishesSelector } from '../Redux/Selectors';

import '../Css/Components/Menu.css';

const MenuList = ({ isLoading, resId }) => {
    const data = useSelector(dishesSelector)
    return (
        isLoading?
        <Loader/>:
        <div className = 'menuList' >
            {data.map((item) => {
                return <MenuCard key = {item.id} {...item} resId = {resId}/>
            })}
        </div>
    )
}

export default memo(MenuList, isEqual);