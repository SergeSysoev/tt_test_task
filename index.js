const IN_BETWEEN = 0;
const START = 1;
const END = 2;

const createMask = (numbersArray) => {
    return new Promise(resolve => {
        const mask = new Array(numbersArray.length).fill(0);

        for (let i = 0; i < numbersArray.length; i++) {
            let difference = numbersArray[i+1] - numbersArray[i];
            if (difference === 1 && mask[i-1] !== START && mask[i-1] !== IN_BETWEEN) {
                mask[i] = START;
            } else if (difference !== 1) {
                mask[i] = END;
            }
        }
        mask[0] = START;

        resolve(mask);
    });
};

const createResultString = (numbersArray, mask) => {
    return new Promise(resolve => {
        let result = '';
        let hasDash = false;
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === START) {
                result += numbersArray[i];
                if (mask[i+1] !== IN_BETWEEN) {
                    result += ',';
                }
            } else if (mask[i] === IN_BETWEEN && !hasDash) {
                result += '-';
                hasDash = true;
            } else if (mask[i] === END) {
                result += `${numbersArray[i]},`;
                hasDash = false;
            }
        }

        resolve(result.replace(/,$/, ''));
    });
};

/**
 * Converts numbers array to string showing ranges
 *
 * @param numbersArray
 * @returns {Promise<string>}
 */
const arrayToString = async (numbersArray) => {
    if (numbersArray.length === 1) {
        return numbersArray[0].toString();
    }

    const mask = await createMask(numbersArray);

    return await createResultString(numbersArray, mask);
};

module.exports = arrayToString;
