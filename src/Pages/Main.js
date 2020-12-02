import React, {useEffect, useRef} from 'react';

import useFetch from '../Hooks/useFetch';
import SearchBox from '../Components/SearchBox';
import DropBox from '../Components/DropBox';
import RestourantList from '../Components/RestourantList';
 
import '../Css/Pages/Main.css';

const Main = () => {
    const dropBoxRef = useRef();
    const {isLoading, data, fetchData} = useFetch();

    useEffect(() => {
        fetchData('resSearch', {kitchenType: dropBoxRef.current.value, text: ''});
    }, [])

    const onChange = (e) => {
        fetchData('resSearch', {kitchenType: dropBoxRef.current.value, text: e.target.value});
    }

    return (
        <div className = 'mainCont' >
            <div className = 'searchCont' >
                <SearchBox onChange = {onChange} placeholder = 'Search for the available restourants'  />
                <DropBox ref = {dropBoxRef} />
            </div>
            <RestourantList data = {data} isLoading = {isLoading} ></RestourantList>
        </div>
    )
}

export default Main;