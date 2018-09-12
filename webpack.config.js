//entry point  -> output 

const path = require('path');

module.exports = {
    entry: './src/playground/full-Calendar.js',
    output:{
        //path must be a absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};