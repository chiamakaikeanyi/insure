import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.module.scss';

const NavItem = ({ url, children }) => (
    <li>
        <NavLink
            className={styles.navItem}
            to={url}
        >
            {children}
        </NavLink>

    </li>
);

NavItem.propTypes = {
    children: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default NavItem;