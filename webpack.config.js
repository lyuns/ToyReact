const config = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}

module.exports = config;