const plugin = require('tailwindcss/plugin')

const colors = require('./colors');
const withOpacity = require('./with-opacity');

const Alert = require('./components/alert');

const components = [
    Alert,
]

const defaultColors = ['primary'];

module.exports = plugin.withOptions(
    function(options = {}) {

    }
)