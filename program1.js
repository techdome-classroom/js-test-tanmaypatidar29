/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let mapping = {')': '(', '}': '{', ']': '['};
    for (let char of s) {
        if (char in mapping) {
            let topElement = stack.pop() || '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
let inputString = "{[()]}";

if (isValid(inputString)) {
    console.log("true");
} else {
    console.log("false");
}
