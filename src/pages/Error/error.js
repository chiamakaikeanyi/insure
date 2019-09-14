import React from 'react';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import styles from './error.module.scss';

const Error = () => {
  return (
    <Layout>
      <section className={styles.errorWrapper}>
        <h2 className={styles.code}>Oops! 404</h2>
        <p>You just hit a route that doesn&#39;t exist.</p>

        <Link to="/" className={styles.home}>Return home</Link>
      </section>
    </Layout>
  )
}

export default Error;