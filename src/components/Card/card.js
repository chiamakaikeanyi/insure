import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ icon, total, description, background }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardTotal}>{total}</div>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  description: PropTypes.string.isRequired,
}

export default Card
