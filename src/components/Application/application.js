import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './application.module.scss';

const renderAction = (status) => {
  switch (status) {
    case 'Completed':
      return (
        <td>
          <button className={styles.action}>Make a Claim</button>
        </td>
      );
    case 'Incomplete':
      return (
        <td>
          <button className={styles.action}>
            Complete Process
          </button>
        </td>
      );
    default:
      break;
  }
}

const Applications = ({ title, header, content }) => {
  return (
    <section className={styles.applicationsWrapper}>
      <h2 className={styles.applicationsTitle}>{title}</h2>

      <table className={styles.table}>
        <thead>
          <tr className={styles.rowHeader}>
            {
              header.map((item, id) => (
                <Fragment key={id}>
                  <td className={styles.columnHeader}>{item}</td>
                </Fragment>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            content.map((item, id) => (
              <tr className={styles.rowItem} key={id}>
                <td className={styles.columnItem}>{item.id}</td>
                <td className={styles.columnItem}>{item.type}</td>
                <td className={styles.columnItem}>{item.amount}</td>
                <td className={styles.columnItem}>{item.date}</td>
                <td>
                  <span className={styles[item.status.toLowerCase()]}>{item.status}
                  </span>
                </td>
                {renderAction(item.status)}
                <td className={styles.moreAction}>
                  More Actions
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

Applications.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired
}

export default Applications
