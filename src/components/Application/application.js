import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNotEmptyArray, formatAmount, formatDate, composeClasses } from 'libs/utils';
import styles from './application.module.scss';
import config from 'config';
const { account: { options, } } = config;

const renderStatus = (status) => {
  switch (status) {
    case true:
      return (
        <span className={styles.completed}>
          Completed
        </span>
      );
    default:
      return (
        <span className={styles.incomplete}>
          Incomplete
        </span>
      );
  }
}

const renderAction = (status) => {
  switch (status) {
    case true:
      return (
        <button className={styles.action}>Make a Claim</button>
      );
    default:
      return (
        <button className={styles.action}>
          Complete Process
        </button>
      );
  }
}

const renderOptions = () => (
  <ul className={styles.options}>
    {
      options.map((option, id) => (
        <li key={id}>{option}</li>
      ))
    }
  </ul>
);

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
            isNotEmptyArray(content) && content.map((item, id) => (
              <tr className={styles.rowItem} key={item._id}>
                <td className={styles.columnItem}>{id + 1}</td>
                <td className={styles.columnItem}>{item.insuranceType}</td>
                <td className={styles.columnItem}>{formatAmount(item.amount)}</td>
                <td className={styles.columnItem}>{formatDate(item.createdDate)}</td>
                <td className={styles.columnItem}>{renderStatus(item.complete)}</td>
                <td className={styles.columnItem}>{renderAction(item.complete)}</td>
                <td
                  className={composeClasses(styles.columnItem, styles.moreActionsWrapper)}
                  onClick={() => renderOptions()}
                >
                  <button
                    className={styles.moreActions}
                    type="button"
                  >
                    More Actions
                  </button>

                  <ul className={styles.options}>
                    {
                      options.map((option, id) => (
                        <li key={id} className={styles.content}>{option}</li>
                      ))
                    }
                  </ul>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

Applications.defaultProps = {
  content: null,
}

Applications.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.array.isRequired,
  content: PropTypes.array
}

export default Applications
