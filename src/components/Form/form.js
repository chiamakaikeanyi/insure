import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.scss';

const Form = ({ customClass, children }) => {
    return (
        <form className={customClass}>
            <section className={styles.formContent}>
                {children}
            </section>
            <button
                className={styles.saveChangesBtn}
                type="submit"
                value="Submit"
            >
                <span className={styles.saveChanges}>
                    Save Changes
                </span>
            </button>
        </form>
    );
};

Form.defaultProps = {
    customClass: '',
}

Form.propTypes = {
    customClass: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Form;