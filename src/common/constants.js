export const romanArabicMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5, 
    IV: 4, 
    I: 1 
};
export const regxRomanPattern = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
export const INVALID_ROMAN_MSG = 'Please enter an valid roman numerals';
export const INVALID_ARABIC_MSG = 'Please enter the value between 1 to 3999';
