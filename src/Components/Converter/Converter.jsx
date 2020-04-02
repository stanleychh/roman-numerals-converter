import React, { useState } from 'react';
import { Container, TextField } from '@material-ui/core';
import { arabicToRoman, romanToArabic, isValidRomanNumerals, isValidArabicNumerals } from '../../utils/helper.js';
import { INVALID_ROMAN_MSG, INVALID_ARABIC_MSG } from '../../common/constants.js'; 
import styles from './Converter.module.css';

export const Converter = () => {
    const [roman, setRoman] = useState('');
    const [romanPatternError, setRomanPatternError] = useState(false);
    const [arabic, setArabic] = useState(1);
    const [arabicPatternError, setArbicPatternError] = useState(false);
    const romanErrorMessage = romanPatternError ? INVALID_ROMAN_MSG : '';
    const arbicErrorMessage = arabicPatternError ? INVALID_ARABIC_MSG : '';

    const clearError = () => {
        setRomanPatternError(false);
        setArbicPatternError(false);
    };

    const handleRomanChange = (value) => {
        setRoman(value);
        if (isValidRomanNumerals(value)) {
            setArabic(parseInt(romanToArabic(value)));
            clearError();
        } else {
            setRomanPatternError(true);
        }
    };

    const handleArbicChange = (value) => {
        setArabic(value);
        if (isValidArabicNumerals(value)) {
            setRoman(arabicToRoman(value));
            clearError();
        } else {
            setArbicPatternError(true);
            setRoman('');
        }
    };

    return (
        <Container fixed>
            <div className={styles.inputWrapper}>
                <TextField 
                    label="Roman" 
                    variant="outlined"
                    type="string"
                    className={styles.input}
                    value={roman}
                    onChange={(event) => handleRomanChange(event.target.value)}
                    error={romanPatternError}
                    helperText={romanErrorMessage}
                />
            </div>
            <div className={styles.inputWrapper}>
                <TextField 
                    label="Arabic"
                    variant="outlined"
                    type="number"
                    className={styles.input}
                    value={arabic}
                    onChange={(event) => handleArbicChange(event.target.value)}
                    error={arabicPatternError}
                    helperText={arbicErrorMessage}
                />
            </div>
        </Container>
    )
};