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
