import { arabicToRoman, romanToArabic, isValidRomanNumerals } from './helper.js';

describe('helper', () => {
    describe('arabicToRoman converter', () => {
        test('should return roman numerals if number is provided', () => {
            const actual = arabicToRoman(2018);

            const expected = "MMXVIII";
            expect(actual).toEqual(expected);
        });

        test('should return roman numerals if number is provided', () => {
            const actual = arabicToRoman(390);

            const expected = "CCCXC";
            expect(actual).toEqual(expected);
        });
    });

    describe('romanToArabic converter', () => {
        test('should return a number if roman numerals is provided', () => {
            const actual = romanToArabic("MMXVIII");

            const expected = 2018;
            expect(actual).toEqual(expected);
        });

        test('should return an integer if roman numerals is provided', () => {
            const actual = romanToArabic("XIII");

            const expected = 13;
            expect(actual).toEqual(expected);
        });
    });

    describe('isValidRomanNumerals', () => {
        test('should return true if roman numerals is valid', () => {
            const actual = isValidRomanNumerals("MMXVIII");

            const expected = true;
            expect(actual).toEqual(expected);
        });

        test('should return false if roman numerals is invalid', () => {
            const actual = isValidRomanNumerals("ABC");

            const expected = false;
            expect(actual).toEqual(expected);
        });
    });
});