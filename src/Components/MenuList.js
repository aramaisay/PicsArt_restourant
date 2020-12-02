import React, {memo} from 'react';
import {isEqual} from 'lodash';

import Loader from './Loader';
import MenuCard from './MenuCard';

import '../Css/Components/Menu.css';

const MenuList = ({data, isLoading, resId}) => {
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