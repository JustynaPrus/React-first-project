import React from 'react';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom';

const list = [
    {name: 'o nas', path:'/'},
    {name: 'artykuły', path:'/articles'},
    {name: 'opinie', path:'/opinions'},
    {name: 'kontakt', path:'/contact'}
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact>{item.name}</NavLink>
        </li>
    ))

    return(
            <>
                <div className='logo'>LOGO</div>
                <ul className='navigation'>
                    {menu}
                </ul>
            </>
    );
}

export default Navigation;