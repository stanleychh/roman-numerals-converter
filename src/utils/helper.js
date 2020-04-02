import { romanArabicMap, regxRomanPattern } from '../common/constants.js';

export const isValidRomanNumerals = (str) => {
    const regx = new RegExp(regxRomanPattern);

    return regx.test(str);
}

export const isValidArabicNumerals = (number) => (number > 0 && number < 4000);

export const arabicToRoman = (number) => {
    if (number < 1 || number > 3999) {
        return '';
    }

    let romanized = '';

    for (let key in romanArabicMap) {
        while (number >= romanArabicMap[key]) {
            romanized += key;
            number -= romanArabicMap[key];
        }
    }

    return romanized;
}

export const romanToArabic = (romanNumber) => {
    if (!isValidRomanNumerals(romanNumber)) {
        return 0;
    }

    romanNumber = romanNumber.toUpperCase();
    let hasRoman =  false, num = 0;

    Object.keys(romanArabicMap).forEach(rn => {
        hasRoman = romanNumber.includes(rn);
        while (hasRoman) {
            num += parseInt(romanArabicMap[rn]);
            romanNumber = romanNumber.replace(rn,"-");
            hasRoman = romanNumber.includes(rn);
        }
    });

    return num;
}
