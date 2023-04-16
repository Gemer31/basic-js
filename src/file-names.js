/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    const suffixCounter = {};
    const resultArr = [];

    const updateName = (name) => {
        return suffixCounter[name]
            ? `${name}(${suffixCounter[name]})`
            : name;
    }

    new Set(names).forEach(name => suffixCounter[name] = 0);

    names.map((name) => {
        let updatedName = updateName(name);

        while (resultArr.includes(updatedName)) {
            suffixCounter[name] += 1;
            updatedName = updateName(name);
        }

        suffixCounter[name] += 1;
        resultArr.push(updatedName);
    });

    return resultArr;
}

module.exports = {
    renameFiles
};
