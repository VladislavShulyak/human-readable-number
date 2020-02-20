module.exports = function toReadable(number) {
    let firstDischarge = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
    };

    let secondDischarge = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    };

    let thirdDischarge = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',

    };

    let newNumber = number.toString().split('');
    let array = [];

    if (number === 0) {
        return 'zero'
    }
    if (number < 21) {
        return firstDischarge[number];
    }

    if (number % 10 === 0) {

        if (number % 100 === 0) {
            let key = +newNumber[0];
            let value = secondDischarge[key];
            array = array.concat(value);
            return array;
        } else if (newNumber.length === 2) {
            let key = +newNumber[0];
            let value = thirdDischarge[key];
            array = array.concat(value);
            return array;
        } else if (newNumber.length === 3) {
            for (let i = 0; i <= 1; i++) {
                if (i === 0) {
                    let key = +newNumber[i];
                    let value = secondDischarge[key];
                    array = array.concat(value);
                } else if (i > 0) {
                    let key = String(newNumber[1]);
                    let value = thirdDischarge[key];
                    array = array.concat(value);
                }
            }
            array = array.join(' ');
            return array;
        }

    }


    if (number >= 21 && number <= 99) {
        for (let i = 0; i <= 1; i++) {
            if (i === 0) {
                let key = +newNumber[i];
                let value = thirdDischarge[key];
                array = array.concat(value);
            } else if (i > 0) {
                let key = String(newNumber[1]);
                let value = firstDischarge[key];
                array = array.concat(value);
            }
        }
        array = array.join(' ');
        return array;
    }

    if (newNumber[1] == 0 || (newNumber[1] == 1)) {
        for (let i = 0; i <= 1; i++) {
            if (i === 0) {
                let key = +newNumber[i];
                let value = secondDischarge[key];
                array = array.concat(value);
            } else if (i === 1) {
                if (+newNumber[i] === 0) {
                    let key = +newNumber[2];
                    let value = firstDischarge[key];
                    array = array.concat(value);
                } else if (+newNumber[i] === 1) {
                    let key = "1" + newNumber[2];
                    let value = firstDischarge[key];
                    array = array.concat(value);
                }

            }
        }
        array = array.join(' ');
        return array;
    }


    for (let i = 0; i <= 2; i++) {
        if (i === 0) {
            let key = +newNumber[i];
            let value = secondDischarge[key];
            array = array.concat(value);
        } else if (i === 1) {
            let key = String(newNumber[1]);
            let value = thirdDischarge[key];
            array = array.concat(value);
        } else if (i === 2) {
            let key = String(newNumber[2]);
            let value = firstDischarge[key];
            array = array.concat(value);
        }
    }
    array = array.join(' ');
    return array;

};
