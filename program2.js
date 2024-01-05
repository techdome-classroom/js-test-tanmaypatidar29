/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const currentValue = romanValues[currentSymbol];
        if (i < s.length - 1) {
            const nextSymbol = s[i + 1];
            const nextValue = romanValues[nextSymbol];
            if (currentValue < nextValue) {
                result += (nextValue - currentValue);
                i++; 
                continue;
            }
        }
        result += currentValue;
    }

    return result;
};

module.exports = { romanToInt };
