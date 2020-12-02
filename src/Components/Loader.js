import React from 'react';

import loading from '../Assets/loading.gif';
import '../Css/Components/Loader.css';

const Loader = () => {
    return (
        <div className = 'loaderCont' >
            <img className = 'loaderImg'  src = {loading} ></img>
            <div className = 'loaderText' > Calling the restourants to find ones that meet your request (try to write the name of the res) </div>
        </div>
    )
}

export default Loader;