import React, { memo } from 'react';
import { isEqual } from 'lodash';

import Loader from './Loader';
import RestourantCard from './RestourantCard';

import '../Css/Components/RestourantList.css'

const RestourantList = ({ data, isLoading }) => {
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