// Data Validation Library

// Check if the input is a valid email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

// Check if the input is a valid phone number (basic validation)
function isPhoneNumberValid(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
}

// Check if the input is a valid URL
function isUrlValid(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}

// Check if the input is a valid number (integer)
function isNumberValid(num) {
    return !isNaN(num) && Number.isInteger(Number(num));
}

// Check if the input is a valid number within a specified range
function isNumberInRange(num, min, max) {
    return isNumberValid(num) && num >= min && num <= max;
}

// Check if the input string's length is within the specified range
function isStringLengthValid(str, minLength, maxLength) {
    return str.length >= minLength && str.length <= maxLength;
}

// Check if the input is a valid date in YYYY-MM-DD format
function isDateValid(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date) && !isNaN(Date.parse(date));
}

// Check if a string matches a specific regex pattern
function matchesPattern(str, pattern) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

// Expose the functions as a module
module.exports = {
    isEmailValid,
    isPhoneNumberValid,
    isUrlValid,
    isNumberValid,
    isNumberInRange,
    isStringLengthValid,
    isDateValid,
    matchesPattern
};
