const path = require('path')

module.exports = {
    mode: 'development', //'production' when its live 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//sends to index.html
        filename:'bundle.js'
    },
    watch: true // reload bundle.js each time index.js saves
}