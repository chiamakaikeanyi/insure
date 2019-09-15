import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'images/svgs';
import styles from './accountSection.module.scss';

const AccountSection = ({ title, description, children }) => {
  return (
    <section className={styles.detailsWrapper}>
      <div className={styles.detailsHeader}>
        <Icon />
        <h2 className={styles.detailsTitle}>
          {title}
        </h2>
      </div>
      <p className={styles.detailsDescription}>
        {description}
      </p>

      <section>
        {children}
      </section>
    </section>
  )
}

AccountSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default AccountSection;
