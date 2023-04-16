/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = "";
    const repeatTimes = options.repeatTimes || 1;
    const additionRepeatTimes = options.additionRepeatTimes || 1;

    for (let i = 0; i < repeatTimes; i++) {
        result += str;

        if (options.addition !== undefined) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                result += options.addition;

                if (j !== (additionRepeatTimes - 1)) {
                    result += (options.additionSeparator || "|");
                }
            }
        }

        if (i !== (repeatTimes - 1)) {
            result += (options.separator || "+");
        }
    }

    return result;
}

// str is a string to repeat;
// options is an object of options, that contains properties:
//      separator is a string separating repetitions of the str;
//      addition is an additional string that will be added to each repetition of the str;
//     additionRepeatTimes sets the number of repetitions of the addition;
//    additionSeparator is a string separating repetitions of the addition.

module.exports = {
    repeater
};
