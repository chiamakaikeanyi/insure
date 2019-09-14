import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';
import styles from './navigation.module.scss';
import { Logo, Caret, Avatar } from 'images/svgs';
import config from 'config';

const Navigation = ({ navItems }) => (
    <Fragment>
        <header className={styles.header}>
            <div className={styles.navWrapper}>
                <Logo className={styles.logo} />
                <nav >
                    <ul className={styles.navItemWrapper}>
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
            </div>
            <div className={styles.userWrapper}>
                <Avatar className={styles.userAvatar} />
                <span className={styles.userName}>{config.user}</span>
                <Caret className={styles.caret} />
            </div>
        </header>
    </Fragment>
);



Navigation.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Navigation;
