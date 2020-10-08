import React from 'react';

import { NavLink } from 'react-router-dom'


const NavBar = () => {
   
    return (
        <>
           
                <NavLink  exact activeStyle={{ color: 'blue'}} to='/'>
                    Home
                </NavLink> -

                <NavLink exact activeStyle={{ color: 'blue'}} to='/about'>
                    About
                </NavLink> -

                <NavLink exact activeStyle={{ color: 'blue'}} to='/new'>
                    New
                </NavLink> 
        </>
    );
};

export default NavBar;
