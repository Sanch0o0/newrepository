/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
    return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else return false;
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
    if (num1 > num2) {
        return `${num1} is the largest number`;
    } else if (num2 > num1) {
        return `${num2} is the largest number`;
    } else return `${num1} is equal to ${num1}`;
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
    if (side1 === side2 && side2 === side3) {
        return 'Equilateral triangle';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return 'Isosceles triangle';
    } else return 'Scalene triangle';
};


/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month > 12) {
        return `Invalid Month of value ${month}`;
    } else if (year % 4 === 0) {
        days[1] = 29;
        return `The Month has ${days[month-1]} days`;
    } else return `The Month has ${days[month-1]} days`;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case 'add':
            return num1 + num2;
            break;
        case 'subtract':
            return num1 - num2;
            break;
        case 'multiply':
            return num1 * num2;
            break;
        case 'divide':
            return num1 / num2;
            break;
        case 'modulus':
            return num1 % num2;
            break;
        default:
            return `${operation} is an invalid operation`
            break;
    }
    // write code here
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
    let qwerty = '';
    for (let i = 2; i < 10; i++) {
        qwerty += '==== ' + i + ' ==== \n'
        for (let j = 1; j < 11; j++) {
            qwerty += i + ' * ' + j + ' = ' + (i * j) + '\n';
        }
    }
    return (qwerty)
};


module.exports = {
    isNumberEven,
    findLargestNumber,
    findTriangleType,
    findDaysInMonth,
    sum,
    calculateResult,
    getMultiplicationTable,
};