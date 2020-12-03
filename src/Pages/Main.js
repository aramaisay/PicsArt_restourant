import React, { useEffect, useState } from 'react';

import useFetch from '../Hooks/useFetch';
import SearchBox from '../Components/SearchBox';
import DropBox from '../Components/DropBox';
import RestourantList from '../Components/RestourantList';
 
import '../Css/Pages/Main.css';

const Main = () => {
    const [text, setText] = useState('');
    const [cuisine, setCuisine] = useState('arm');
    const {isLoading, data, fetchData} = useFetch();


    useEffect(() => {
        fetchData('resSearch', {kitchenType: cuisine, text: text});
    }, [text, cuisine])
    
    const onChangeText = (e) => {
        setText(e.target.value);
    }

    const onChangeDropBox = (e) => {
        setCuisine(e.target.value);
    }

    return (
        <div className = 'mainCont' >
            <div className = 'searchCont' >
                <SearchBox onChange = {onChangeText} placeholder = 'Search for the available restourants'  />
                <DropBox onChange = {onChangeDropBox}  />
            </div>
            <RestourantList data = {data} isLoading = {isLoading} ></RestourantList>
        </div>
    )
}

export default Main;