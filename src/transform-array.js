/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    const stack = [];

    if (!Array.isArray(arr)) {
        throw Error('\'arr\' parameter must be an instance of the Array!');
    }

    let i = 0;
    while (i < arr.length) {
        switch (arr[i]) {
            case "--discard-next": {
                i += 2;
                break;
            }
            case "--discard-prev": {
                if (arr[i - 2] !== '--discard-next') {
                    stack.length && stack.pop();
                }
                i++;
                break;
            }
            case "--double-next": {
                if (arr[i + 1]) {
                    stack.push(arr[i + 1], arr[i + 1]);
                }
                i += 2;
                break;
            }
            case "--double-prev": {
                if (arr[i - 2] !== '--discard-next') {
                    if (stack[i - 1]) {
                        stack.push(stack[i - 1]);
                    }
                }
                i++;
                break;
            }
            default: {
                stack.push(arr[i]);
                i++;
            }
        }
    }

    return stack;
}

module.exports = {
    transform
};
