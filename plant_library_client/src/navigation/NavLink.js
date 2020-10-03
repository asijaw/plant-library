import React from 'react';
import useHover from './useHover';

const NavLink = ({ link }) => {
    const [hovering, actions] = useHover();
    return (
        <a href="/"
        {...actions}
        style={{
            margin: '10px',
            textDecoration: 'none',
            color: hovering ? 'lightblue' : '',
        }}
        >
        {link}
        </a>
    );
}
export default NavLink;
