module.exports = {
    isNumber (input) {
        if (!(isNaN(parseInt(input)))) return true;
        console.log('\nYou must enter a valid number!');
        return false;
    },

    isRequired (input) {
        if (input) return true;
        console.log('\nThis field is required');
        return false;
    }
}