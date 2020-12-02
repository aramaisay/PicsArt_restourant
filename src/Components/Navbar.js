import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../Assets/logo.jpg';
import '../Css/Components/Navbar.css';

const Navbar = () => {
    const history = useHistory()

    return (
        <div className = 'navCont' >
            <img className = 'navImg'  onClick = {() => history.push('/', {})} src = {logo} />
        </div>
    )
}

export default Navbar