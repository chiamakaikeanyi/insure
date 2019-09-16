/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @returns {String} Combined classes
 */
export const composeClasses = (...styles) => {
    let classes = '';

    styles.forEach((arg) => {
        if (arg) {
            classes += `${arg} `;
        }
    });

    return classes.trim();
};

/**
 * @param arr
 * @returns {arg is Array<any> | boolean}
 */
export const isNotEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;

/**
 * @param {*} obj The object to test
 * @returns {*} boolean
 */
export const isObjectEmpty = (obj = {}) =>
    !obj || Object.keys(obj).length === 0;

/**
 * @param {*} amount
 * @returns {string} Amount in NG currency
 */
export const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumSignificantDigits: 3
    }).format(amount);
}


export const formatDate = (dateString) => {
    const newDate = new Date(dateString);
    return (
        `${newDate.getDate()} ${newDate.toLocaleString('en-us', { month: 'short', })} ${newDate.getFullYear()}`);
};
