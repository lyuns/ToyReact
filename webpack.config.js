const config = {
    mode: 'development',
    entry: {
        main: './src/ttt.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}

module.exports = config;