import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import { composeClasses } from 'libs/utils';

const Input = ({ htmlFor, type, name, label, disabled, value, customClass }) => {
    return (
        <section className={styles.inputWrapper}>
            <label
                className={styles.inputLabel}
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={htmlFor}
                disabled={disabled}
                defaultValue={value}
                className={composeClasses(styles.input, customClass)}
                maxLength={50}
            />
        </section>
    );
};

Input.defaultProps = {
    disabled: false,
    value: '',
    customClass: '',
}

Input.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    customClass: PropTypes.string,
}

export default Input;