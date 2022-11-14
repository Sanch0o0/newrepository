/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
    return str.toUpperCase().trim();
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
    if (array.length === 0) return NaN;

    let maxNumber;
    array.forEach((currentElement) => {
        if (isNaN(maxNumber)) {
            maxNumber = currentElement;
        } else if (currentElement > maxNumber) { maxNumber = currentElement };
    })
    return maxNumber;
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
    const arr = str.split(', ');
    if (!str) return [];
    return arr
        .map(el => el.length)
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
    return numArray
        .map(el => el ** degree);
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
    const arr = text.split('. ');
    return arr
        .map(el => el[0].toUpperCase() + el.slice(1))
        .join('. ');
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
    return array.filter((el) => {
        if (Number.isInteger(el)) return el > 0;
    })
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
    //if (array.length === 0) return -1;
    let index = -1;
    array.forEach((el, i) => {
        if (el === value) index = i;
    })
    return index;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
    let num;
    array.forEach((el) => {
        if (el === value) num = value;
    })
    return num;
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
    if (array.length === 0) return false;

    return array.every(arr => arr.includes(word));
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
    return array.some(number => number < 0);
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
    return array.slice(startPosition, endPosition + 1);
};


module.exports = {
    transformString,
    findMaxNumber,
    getStringWordsLength,
    getTransformedNumbers,
    getTransformedText,
    getPositiveIntegers,
    getElementIndex,
    getItem,
    isWordInEveryArrayString,
    isNegativeNumbersInArray,
    returnArrayPart,
};