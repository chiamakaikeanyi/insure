import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';
import styles from './navigation.module.scss';

const Navigation = ({ navItems }) => (
    <Fragment>
        <header className={styles.header}>
            <nav>
                <ul>
                    {
                        navItems.map((item, id) => (
                            <NavItem
                                key={id}
                                url={item.link}
                            >
                                {item.name}
                            </NavItem>)
                        )
                    }
                </ul>
            </nav>
        </header>
    </Fragment>
);



Navigation.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Navigation;
