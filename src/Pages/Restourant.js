import React, { useEffect, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import SearchBox from '../Components/SearchBox';
import Range from '../Components/Range';
import MenuList from '../Components/MenuList';
import useFetch from '../Hooks/useFetch';

import '../Css/Pages/Restourant.css';

const Restourant = () => {
    const {data, isLoading, fetchData} = useFetch();
    const {id} = useParams();
    const history = useHistory();
    
    const maxRef = useRef();
    const minRef = useRef();

    useEffect(() => {
        fetchData('menuSearch', { 
            resId: id, 
            text: '', 
            min: minRef.current.value, 
            max: maxRef.current.value
        })
    }, [])

    const onChange = (e) => {
        fetchData('menuSearch', { 
            resId: id, 
            text: e.target.value, 
            min: minRef.current.value, 
            max: maxRef.current.value
        })
    }

    return (
        <div className = 'mainCont' >
            <div className = 'btnBack' onClick = {() => {history.goBack()}} > {'<'} </div>
            <div className = 'searchCont' >
                <SearchBox placeholder = 'Type the name of the dish' onChange = {onChange} />
                <Range minRef = {minRef} ref = {maxRef} />
            </div>
            <MenuList data = {data} isLoading = {isLoading} resId = {id} />
        </div>
    )
}

export default Restourant;