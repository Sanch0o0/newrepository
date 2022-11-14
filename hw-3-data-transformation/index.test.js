const {
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
} = require('./index.js');

describe('Operators tests', () => {
    describe('when transformString', () => {
        it('should return string without spaces from the beginning and from the end, and in upper letter register', () => {
            expect(transformString('   ')).toEqual('');
            expect(transformString('apple  ')).toEqual('APPLE');
            expect(transformString(' banana, character, spring, doing    ')).toEqual('BANANA, CHARACTER, SPRING, DOING');
            expect(transformString('every, Word, should, Be, counted   ')).toEqual('EVERY, WORD, SHOULD, BE, COUNTED');
        });
    });

    describe('when findMaxNumber', () => {
        it('should return max number from array', () => {
            expect(findMaxNumber([])).toBe(NaN);
            expect(findMaxNumber([5, -7, 19, 38, 12, 5])).toBe(38);
            expect(findMaxNumber([2, 8, 10, 4, 13, -6])).toBe(13);
            expect(findMaxNumber([2, 2, 2, 2, 3])).toBe(3);
        });
    });

    describe('when getStringWordsLength', () => {
        it('should return array of length of every word in string', () => {
            expect(getStringWordsLength('')).toEqual([]);
            expect(getStringWordsLength('apple')).toEqual([5]);
            expect(getStringWordsLength('banana, character, spring, doing')).toEqual([6, 9, 6, 5]);
            expect(getStringWordsLength('every, word, should, be, counted')).toEqual([5, 4, 6, 2, 7]);
        });
    });

    describe('when getTransformedNumbers', () => {
        it('should return array of numbers as result of initial number and degree', () => {
            expect(getTransformedNumbers([], 2)).toEqual([]);
            expect(getTransformedNumbers([5, 7, 19, 38, 12, 5], 3)).toEqual([125, 343, 6859, 54872, 1728, 125]);
            expect(getTransformedNumbers([2, 8, 10, 4, 13, 6], 2)).toEqual([4, 64, 100, 16, 169, 36]);
            expect(getTransformedNumbers([2, 2, 2, 2, 3], 5)).toEqual([32, 32, 32, 32, 243]);
        });
    });

    describe('when getTransformedText', () => {
        it('should return text with all first letters at the beginning of sentence capitalized', () => {
            expect(getTransformedText('case read they must it of cold that. speaking trifling an to unpacked moderate debating learning. an particular contrasted he excellence favourable on. nay preference dispatched difficulty continuing joy one. songs it be if ought hoped of. too carriage attended him entrance desirous the saw. twenty sister hearts garden limits put gay has. we hill lady will both sang room by. desirous men exercise overcame procured speaking her followed.')).toBe('Case read they must it of cold that. Speaking trifling an to unpacked moderate debating learning. An particular contrasted he excellence favourable on. Nay preference dispatched difficulty continuing joy one. Songs it be if ought hoped of. Too carriage attended him entrance desirous the saw. Twenty sister hearts garden limits put gay has. We hill lady will both sang room by. Desirous men exercise overcame procured speaking her followed.');
            expect(getTransformedText('gave read use way make spot how nor. in daughter goodness an likewise oh consider at procured wandered. songs words wrong by me hills heard timed. happy eat may doors songs. be ignorant so of suitable dissuade weddings together. least whole timed we is. an smallness deficient discourse do newspaper be an eagerness continued. mr my ready guest ye after short at.')).toBe('Gave read use way make spot how nor. In daughter goodness an likewise oh consider at procured wandered. Songs words wrong by me hills heard timed. Happy eat may doors songs. Be ignorant so of suitable dissuade weddings together. Least whole timed we is. An smallness deficient discourse do newspaper be an eagerness continued. Mr my ready guest ye after short at.');
        });
    });

    describe('when getPositiveIntegers', () => {
        it('should filter array and return only positive integers', () => {
            expect(getPositiveIntegers([])).toEqual([]);
            expect(getPositiveIntegers([true, null, 1, 34343, -1, Infinity])).toEqual([1, 34343]);
            expect(getPositiveIntegers([2, 8, 10, 4, 13, 6])).toEqual([2, 8, 10, 4, 13, 6]);
            expect(getPositiveIntegers([17, -8, 0, false, undefined])).toEqual([17]);
        });
    });

    describe('when getElementIndex', () => {
        it('should return index of element in array', () => {
            expect(getElementIndex([], 1)).toBe(-1);
            expect(getElementIndex([true, null, 1, 34343, -1, Infinity], -1)).toBe(4);
            expect(getElementIndex([2, 8, 10, 4, 13, 6], 8)).toBe(1);
            expect(getElementIndex([17, -8, 0, false, undefined], 32)).toBe(-1);
        });
    });

    describe('when getItem', () => {
        it('should return item from array or undefined if item is not found', () => {
            expect(getItem([], 1)).toBe(undefined);
            expect(getItem([true, null, 1, 34343, -1, Infinity], -1)).toBe(-1);
            expect(getItem([2, 8, 10, 4, 13, 6], 8)).toBe(8);
            expect(getItem([17, -8, 0, false, undefined], 32)).toBe(undefined);
        });
    });

    describe('when isWordInEveryArrayString', () => {
        it('should return true if word is in every string in array and false if is not', () => {
            expect(isWordInEveryArrayString([], 'apple')).toBe(false);
            expect(isWordInEveryArrayString(['By spite about do', 'of do allow blush. Additions', 'in conveying or collected objection in.', 'Suffer few desire wonder her object hardly nearer'], 'banana')).toBe(false);
            expect(isWordInEveryArrayString(['By spite aboutbanana do', 'of do allow blush banana. Additions', 'in conveying or collected objection in.', 'Suffer few desire wonder her banana object hardly nearer'], 'banana')).toBe(false);
            expect(isWordInEveryArrayString(['By spite about dopeach', 'peachof do allow blush. Additions', 'in conveying or peach collected objection in.', 'Suffer few desire wonder her peach object hardly nearer'], 'peach')).toBe(true);
        });
    });

    describe('when isNegativeNumbersInArray', () => {
        it('should return true if any number in array is negative', () => {
            expect(isNegativeNumbersInArray([])).toBe(false);
            expect(isNegativeNumbersInArray([true, null, 1, 34343, -1, Infinity])).toBe(true);
            expect(isNegativeNumbersInArray([2, 8, 10, 4, 13, 6])).toBe(false);
            expect(isNegativeNumbersInArray([17, -8, 0, false, undefined])).toBe(true);
        });
    });

    describe('when returnArrayPart', () => {
        it('should return part of array from start to end (including) positions', () => {
            expect(returnArrayPart([], 2, 7)).toEqual([]);
            expect(returnArrayPart([true, null, 1, 34343, -1, Infinity], 1, 5)).toEqual([null, 1, 34343, -1, Infinity]);
            expect(returnArrayPart([2, 8, 10, 4, 13, 6], -4, -2)).toEqual([10, 4, 13]);
            expect(returnArrayPart([17, -8, 0, false, undefined], 2, 3)).toEqual([0, false]);
        });
    });
});