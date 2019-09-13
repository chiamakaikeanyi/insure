import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Navigation from "components/Navigation";
import styles from './layout.module.scss';
import config from 'config';

const { navItems, } = config;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation navItems={navItems} />
      <main className={styles.siteBody}>
        {children}
      </main>
    </Fragment>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;