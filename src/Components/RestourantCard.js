import React, { memo } from 'react';
import { isEqual } from 'lodash';
import { useHistory } from 'react-router-dom';

import '../Css/Components/RestourantCard.css';

const RestourantCard = ({ name, photoUrl, id, kitchenTypes }) => {
    const history = useHistory();

    return (
        <div className = 'cardCont' onClick = {() => history.push(`/${id}`, {})} >
            <img className = 'cardImg'  src = {photoUrl} ></img>
            <div className = 'cardInfo' >
                <div className = 'cardTitle' > {name} </div>
                <div className = 'cardTypes' >
                Kitchen Type:
                {kitchenTypes.map((item) => {
                    return ` ${item} `;
                })}
                </div>
            </div>
        </div>
    )
}

export default memo(RestourantCard, isEqual);