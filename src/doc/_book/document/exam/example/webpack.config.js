
const path = require('path');

module.exports = {
    entry: {
        'main': path.join(__dirname, './index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        }, {
            test: /\.less/,
            use: {
                loader: 'less-loader'
            }
        }]
    }
};