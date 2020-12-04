import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import SearchBox from '../Components/SearchBox';
import Range from '../Components/Range';
import MenuList from '../Components/MenuList';
import useFetch from '../Hooks/useFetch';

import '../Css/Pages/Restourant.css';

const Restourant = () => {
    const {isLoading, fetchData} = useFetch();
    const {id} = useParams();
    const history = useHistory();
    
    const [text, setText] = useState('');
    const [range, setRange] = useState({min: 0, max: 2000});

    useEffect(() => {
        fetchData('menuSearch', { 
            resId: id, 
            text: text, 
            min: range.min, 
            max: range.max
        })
    }, [text, range])

    const onChangeText = (e) => {
        setText(e.target.value);
    }
    const onChangeRange = (e) => {
        setRange((prevState) => {
            return {...prevState, [e.target.name]: e.target.value};
        });
    }

    return (
        <div className = 'mainCont' >
            <div className = 'btnBack' onClick = {() => {history.goBack()}} > {'<'} </div>
            <div className = 'searchCont' >
                <SearchBox onChange = {onChangeText} placeholder = 'Type the name of the dish' />
                <Range onChange = {onChangeRange} />
            </div>
            <MenuList isLoading = {isLoading} resId = {id} />
        </div>
    )
}

export default Restourant;