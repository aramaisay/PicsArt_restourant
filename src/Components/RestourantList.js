import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';

import Loader from './Loader';
import RestourantCard from './RestourantCard';
import { restourantSelector } from '../Redux/Selectors';

import '../Css/Components/RestourantList.css'

const RestourantList = ({ isLoading }) => {
    const data = useSelector(restourantSelector)
    return (
        isLoading?
        <Loader></Loader>
        :
        <div className = 'resList' >
            {data.map((item) => {
                return <RestourantCard {...item} key = {item.id} ></RestourantCard>
            })}
        </div>
    );
}

export default memo(RestourantList, isEqual);